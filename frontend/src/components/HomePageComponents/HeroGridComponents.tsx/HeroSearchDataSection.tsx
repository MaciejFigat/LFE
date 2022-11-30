import React, { ReactFragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
// import Highlighter from 'react-highlight-words'
import { getDocResult } from '../../../features/searchResults/searchResultsSlice'
import { addVisitedLink } from '../../../features/searchResults/searchResultsSlice'
import {
  // InfoSec,
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
  TopLineShort,
} from './HeroSection.styled'
import parse from 'html-react-parser'
// import { SendButtonSmall } from '../Buttons/Buttons.styled'
import { HorizontalWrapper } from '../../../styles/misc.styled'
import SimpleResultDisplay from '../../Miscellaneous/ResultDisplay/SimpleResultDisplay'
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
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'transparent'
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
  istota_interpretacji,
}) => {
  const dispatch = useAppDispatch()
  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
  )
  const resultsDetailView: any = useAppSelector(
    (state) => state.preference.resultsDetailView
  )
  let navigate = useNavigate()

  const submitHandlerDocNr = (index: number) => {
    const searchquery = {
      query: query,
      selectedDoc: index,
      docNumber: metryka.doc_id,
    }
    dispatch(getDocResult(searchquery))
    const fragData = {
      doc_link: metryka.doc_link,
      rodzaj_orzeczenia: metryka.rodzaj_orzeczenia,
      data: metryka.data,
      organ: metryka.organ,
      id: metryka.doc_id,
      query: query,
    }

    const existingLink = visitedLinks.find(
      (visitedLinks) => visitedLinks.doc_link === fragData.doc_link
    )
    if (!existingLink) dispatch(addVisitedLink(fragData))
    navigate(`/search/result#frag-${index}`)
  }

  return (
    <>
      {' '}
      {resultsDetailView ? (
        <SimpleResultDisplay />
      ) : (
        <CenterWrapper>
          <Container>
            <InfoRow imgStart={imgStart}>
              <InfoColumnShort imgStart={imgStart}>
                <TextWrapperShort>
                  <SubtitleShort>{metryka.rodzaj_orzeczenia}</SubtitleShort>
                  <SubtitleShort>{metryka.data}</SubtitleShort>
                  <SubtitleShort>{metryka.syg}</SubtitleShort>

                  <TopLineShort>Istota interpretacji:</TopLineShort>
                  <SubtitleShortLonger onClick={() => submitHandlerDocNr(0)}>
                    {istota_interpretacji}
                  </SubtitleShortLonger>
                  <SubtitleShort> Wynik przydatny?</SubtitleShort>
                  <HorizontalWrapper>
                    <Button variant='secondary'>
                      <ButtonLink href={buttonLink} target='_blank'>
                        Tak
                      </ButtonLink>
                    </Button>
                    <Button variant='secondary'>
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
                  {fragmentsFound.length > 0 &&
                    fragmentsFound.map((fragment, index) => (
                      <HighlightMarker
                        key={Math.random()}
                        mark={[query, highlightQuery]}
                      >
                        {' '}
                        <Subtitle onClick={() => submitHandlerDocNr(index)}>
                          {/* <Highlighter
                          highlightClassName='highlightQuery'
                          searchWords={[highlightQuery]}
                          autoEscape={true}
                          textToHighlight={fragment
                            .replace('<em>', '')
                            .replace('</em>', '')}
                        /> */}
                          {/* (...) */}
                          {/* {parse(fragment)} */}
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
