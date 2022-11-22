import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import {
  addVisitedLink,
  getDocResult,
} from '../../../features/searchResults/searchResultsSlice'
import {
  Container,
  InfoSecSimple,
  TopLineSimple,
  // TextWrapperSimple,
  SubtitleSimple,
  CenterWrapperSimple,
  InfoColumnShortSimple,
  TextWrapperSimpleShort,
  // InfoRowSimple,
  // InfoColumnSimple,
} from './InfoSection.styled'
// import parse from 'html-react-parser'

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

interface DataSectionSimpleProps {
  metryka: InfoData
  query: string

  fragmentsFound: string[]
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'blue'
    | 'bluegreen'
    | 'transparent'
  imgStart?: boolean
  paddingTop?: 'large' | 'small' | undefined
  istota_interpretacji: string
}

const DataSectionSimple: React.FC<DataSectionSimpleProps> = ({
  metryka,
  query,
  // fragmentsFound,
  variant,
  imgStart,
  paddingTop,
  istota_interpretacji,
}) => {
  const dispatch = useAppDispatch()

  const visitedLinks: any[] = useAppSelector(
    (state) => state.searchResult.visitedLinks
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
    navigate('/search/result')
    navigate('/search/result')
  }

  return (
    <CenterWrapperSimple>
      <InfoSecSimple
        variant={variant}
        paddingTop={paddingTop}
        onClick={() => submitHandlerDocNr(0)}
      >
        <Container>
          <InfoColumnShortSimple>
            <TextWrapperSimpleShort imgStart={imgStart}>
              <TopLineSimple variant={variant}>
                {metryka.rodzaj_orzeczenia}
              </TopLineSimple>{' '}
              <TopLineSimple variant={variant}>{metryka.data}</TopLineSimple>{' '}
              <TopLineSimple variant={variant}>{metryka.organ}</TopLineSimple>
              <SubtitleSimple variant={variant}>
                {istota_interpretacji.substring(0, 50)} (...)
              </SubtitleSimple>
            </TextWrapperSimpleShort>
          </InfoColumnShortSimple>
        </Container>
      </InfoSecSimple>
    </CenterWrapperSimple>
  )
}
export default DataSectionSimple
