import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { AppDispatch } from '../../../app/store'
import {
  changeHeroDocIndex,
  getDocByIdAndQuery
} from '../../../features/searchResults/searchResultsSlice'
import {
  Container,
  InfoSecSimple,
  TopLineSimple,
  SubtitleSimple,
  CenterWrapperSimple,
  InfoColumnShortSimple,
  TextWrapperSimpleShort
} from '../../InfoSection/InfoSection.styled'

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

interface HeroDataSectionSimpleProps {
  metryka: InfoData
  fragmentsFound: string[]
  variant?: 'primary' | 'secondary' | 'tertiary'
  index?: number
  imgStart?: boolean
  paddingTop?: 'large' | 'small' | undefined
  istota_interpretacji: string
}

const HeroDataSectionSimple: React.FC<HeroDataSectionSimpleProps> = ({
  metryka,
  index,
  variant,
  imgStart,
  paddingTop,
  istota_interpretacji
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const resultsDetailView: boolean = useAppSelector(
    state => state.preference.resultsDetailView
  )
  const searchResult: any = useAppSelector(state => state.searchResult)

  const { data, query } = searchResult.searchResults

  const heroDocIndex: number = useAppSelector(
    state => state.searchResult.heroDocIndex
  )
  const submitHandlerDocIndex = (index: number) => {
    if (resultsDetailView) {
      const searchquery = {
        query: query,
        docNumber: data[index].doc_id
      }
      dispatch(getDocByIdAndQuery(searchquery))
    }
    dispatch(changeHeroDocIndex(index))
  }

  return (
    <CenterWrapperSimple>
      <InfoSecSimple
        variant={variant}
        paddingTop={paddingTop}
        onClick={() => submitHandlerDocIndex(index ?? 0)}
        active={index === heroDocIndex ? true : false}
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
export default HeroDataSectionSimple
