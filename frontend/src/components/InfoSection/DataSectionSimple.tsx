import React from 'react'
// import SvgIcon from '../SvgIcon/SvgIcon'
import { useAppDispatch } from '../../app/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { getDocResult } from '../../features/searchResults/searchResultsSlice'
import {
  //   InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  //   TextWrapper,
  //   TopLine,
  //   Heading,
  //   Subtitle,
  InfoColumnShort,
  //   CenterWrapper,
  InfoSecSimple,
  TopLineSimple,
  TextWrapperSimple,
  SubtitleSimple,
  CenterWrapperSimple,
} from './InfoSection.styled'
import parse from 'html-react-parser'
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
}

const DataSectionSimple: React.FC<DataSectionSimpleProps> = ({
  metryka,
  query,
  fragmentsFound,
  variant,
  imgStart,
  paddingTop,
}) => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const submitHandlerDocNr = (index: number) => {
    const searchquery = {
      query: query,
      selectedDoc: index,
      docNumber: metryka.doc_id,
    }
    dispatch(getDocResult(searchquery))
    navigate('/search/result')
  }

  return (
    <CenterWrapperSimple>
      <InfoSecSimple variant={variant} paddingTop={paddingTop}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumnShort>
              <TextWrapperSimple>
                <TopLineSimple variant={variant}>
                  {metryka.rodzaj_orzeczenia}
                </TopLineSimple>{' '}
                <TopLineSimple variant={variant}>{metryka.data}</TopLineSimple>{' '}
                {/* <TopLineSimple variant={variant}>{metryka.syg}</TopLineSimple> */}
                {/* <TopLineSimple variant={variant}>
                  {metryka.numer_dokumentu}
                </TopLineSimple> */}
                <TopLineSimple variant={variant}>{metryka.organ}</TopLineSimple>
              </TextWrapperSimple>
            </InfoColumnShort>
            <InfoColumn>
              <TextWrapperSimple>
                {fragmentsFound.length > 0 &&
                  fragmentsFound
                    .filter(
                      (fragmentsSorted) =>
                        !fragmentsSorted.startsWith('ISTOTA INTERPRETACJI')
                    )
                    .map((fragment, index) => (
                      <SubtitleSimple
                        variant={variant}
                        key={fragment}
                        onClick={() => submitHandlerDocNr(index)}
                      >
                        * {parse(fragment.substring(0, 60))}
                      </SubtitleSimple>
                    ))}
              </TextWrapperSimple>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSecSimple>
    </CenterWrapperSimple>
  )
}
export default DataSectionSimple
