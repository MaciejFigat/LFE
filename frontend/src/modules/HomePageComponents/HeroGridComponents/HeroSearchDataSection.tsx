import React, { ReactFragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import {
  changeDocId,
  getDocResult
} from '../../../features/searchResults/searchResultsSlice'
import { addVisitedLink } from '../../../features/searchResults/searchResultsSlice'
import {
  Container,
  Subtitle,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  ButtonLink,
  InfoColumnShort,
  CenterWrapper,
  SubtitleShort,
  HighlightMarker,
  TextWrapperShort,
  Button,
  SubtitleShortLonger,
  TopLineShort
} from './HeroSection.styled'
import parse from 'html-react-parser'
import { HorizontalWrapper } from '../../../styles/misc.styled'
import SimpleResultDisplay from '../../DocumentView/DocumentDisplay/SimpleDocumentDisplay'
import { AppDispatch } from '../../../app/store'
//! problem solved with parse - html-react-parser - prarses string to html in React

interface InfoData {
  doc_id: number
  doc_link: string
  syg: string
  organ: string
  rodzaj_orzeczenia: string
  data: string
  numer_dokumentu: string
  uuid: string
}

interface HeroSearchDataSectionProps {
  metryka: InfoData
  query: string
  highlightQuery: string
  fragmentsFound: string[]
  imgStart?: boolean
  children?: ReactFragment
  buttonLink?: string
  buttonNavLink?: string
  istota_interpretacji?: string
  paddingTop?: 'large' | 'small' | undefined
}

const HeroSearchDataSection: React.FC<HeroSearchDataSectionProps> = ({
  metryka,
  query,
  highlightQuery,
  fragmentsFound,
  imgStart,
  buttonLink,
  istota_interpretacji
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const visitedLinks: any[] = useAppSelector(
    state => state.searchResult.visitedLinks
  )
  const savedDocId: number = useAppSelector(state => state.searchResult.docId)
  const resultsDetailView: boolean = useAppSelector(
    state => state.preference.resultsDetailView
  )
  let navigate = useNavigate()

  const submitHandlerDocNr = (index: number) => {
    const searchquery = {
      query: query,
      selectedDoc: index,
      docNumber: metryka.doc_id
    }
    dispatch(getDocResult(searchquery))
    const fragData = {
      doc_link: metryka.doc_link,
      rodzaj_orzeczenia: metryka.rodzaj_orzeczenia,
      data: metryka.data,
      organ: metryka.organ,
      id: metryka.doc_id,
      query: query
    }

    const existingLink = visitedLinks.find(
      visitedLinks => visitedLinks.doc_link === fragData.doc_link
    )
    if (!existingLink) dispatch(addVisitedLink(fragData))
    if (savedDocId !== metryka.doc_id) dispatch(changeDocId(metryka.doc_id))
    navigate(`/search/result#frag-${index}`)
  }

  return (
    <>
      {resultsDetailView ? (
        <SimpleResultDisplay />
      ) : (
        <CenterWrapper>
          <Container>
            <InfoRow imgStart={imgStart}>
              <InfoColumnShort imgStart={imgStart}>
                <TextWrapperShort>
                  <SubtitleShort>{metryka?.rodzaj_orzeczenia}</SubtitleShort>
                  <SubtitleShort>{metryka?.data}</SubtitleShort>
                  <SubtitleShort>{metryka?.syg}</SubtitleShort>

                  <TopLineShort>Istota interpretacji:</TopLineShort>
                  <SubtitleShortLonger onClick={() => submitHandlerDocNr(0)}>
                    {istota_interpretacji}
                  </SubtitleShortLonger>
                  <SubtitleShort> Wynik przydatny?</SubtitleShort>
                  <HorizontalWrapper>
                    <Button>
                      <ButtonLink href={buttonLink} target='_blank'>
                        Tak
                      </ButtonLink>
                    </Button>
                    <Button>
                      <ButtonLink href={buttonLink} target='_blank'>
                        Nie
                      </ButtonLink>
                    </Button>{' '}
                  </HorizontalWrapper>
                </TextWrapperShort>
              </InfoColumnShort>
              <InfoColumn>
                <TextWrapper>
                  <TopLine>Znalezione fragmenty:</TopLine>
                  {fragmentsFound?.length > 0 &&
                    fragmentsFound.map((fragment, index) => (
                      <HighlightMarker
                        key={Math.random()}
                        mark={[query, highlightQuery]}
                      >
                        {' '}
                        <Subtitle onClick={() => submitHandlerDocNr(index)}>
                          &bull;
                          {parse(
                            fragment
                              .replace('ISTOTA INTERPRETACJI', '')
                              .replace('INTERPRETACJA INDYWIDUALNA', '')
                          )}
                        </Subtitle>
                      </HighlightMarker>
                    ))}
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </CenterWrapper>
      )}
    </>
  )
}
export default HeroSearchDataSection
