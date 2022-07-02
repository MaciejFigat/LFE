import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
// import { HashLink } from 'react-router-hash-link'
// import { NavHashLink, HashLink } from 'react-router-hash-link'
import reactStringReplace from 'react-string-replace'
import HighlightPopMenu from '../../components/HighlightPopRemake/HighlightPopMenu'
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleSection,
  ArticleTopline,
  ArticleParagraph,
  ArticleContainer,
} from './ResultDisplay.styled'
import SideButtons from '../menu/SideButtons/SideButtons'

interface ResultDisplayProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)
  const [hashIds, setHashIds] = useState<string[]>([])

  const replaceText = (smallParagraph: string) => {
    let replacedText

    replacedText = reactStringReplace(
      smallParagraph,
      //   new RegExp(`${hashIds[0]}`),
      hashIds[0],
      (match, i) => (
        <span
          id={`${hashIds[0]}`}
          key={Math.random()}
          style={{ color: 'cyan' }}
        >
          {match}
        </span>
      )
    )
    replacedText = reactStringReplace(
      replacedText,
      //   new RegExp(`${hashIds[1]}`),
      hashIds[1],
      (match, i) => (
        <span
          id={`${hashIds[1]}`}
          key={Math.random()}
          style={{ color: 'gold' }}
        >
          {match}
        </span>
      )
    )
    replacedText = reactStringReplace(
      replacedText,
      //   new RegExp(`${hashIds[2]}`),
      hashIds[2],
      (match, i) => (
        <span id={`${hashIds[2]}`} key={Math.random()} style={{ color: 'red' }}>
          {match}
        </span>
      )
    )
    replacedText = reactStringReplace(
      replacedText,
      //   new RegExp(`${hashIds[3]}`),
      hashIds[3],
      (match, i) => (
        <span
          id={`${hashIds[3]}`}
          key={Math.random()}
          style={{ color: 'yellow' }}
        >
          {match}
        </span>
      )
    )

    return replacedText
  }

  useEffect(() => {
    const idArray = []
    if (docResult.frags && docResult.selected_frag) {
      idArray.push(
        // docResult.selected_frag.substring(21, docResult.selected_frag.length)
        docResult.selected_frag.substring(30, 60)
      )
      for (let i = 0; i < docResult.frags.length; i++) {
        console.log(docResult.frags[i].substring(21, 120))
        // idArray.push(docResult.frags[i].substring(30, 120))
        idArray.push(
          //   docResult.frags[i].substring(21, docResult.frags[i].length)
          docResult.frags[i].substring(30, 60)
        )
      }
      setHashIds(idArray)
    }
  }, [docResult.frags, docResult.selected_frag])

  return (
    <ArticleContainer>
      <SideButtons hashIds={hashIds} />

      <ArticleWrapper>
        {docResult?.tresc?.sad && (
          <>
            {' '}
            <ArticleTitle>{docResult.tresc.typWyroku}</ArticleTitle>
            <ArticleTopline> {docResult.tresc.sad}</ArticleTopline>
            <ArticleTopline>{docResult.tresc.syg}</ArticleTopline>
            <ArticleTopline>
              {' '}
              {docResult.tresc.dataOrzeczenia}
            </ArticleTopline>{' '}
            <HighlightPopMenu>
              {docResult.korpus.map((korpusElement: any) => (
                <ArticleSection key={Math.random()}>
                  {korpusElement.map((korpusParagraph: any) => (
                    <div key={Math.random()}>
                      {!korpusParagraph.toString().startsWith('TRESC') &&
                        !Array.isArray(korpusParagraph) && (
                          <ArticleParagraph>{korpusParagraph}</ArticleParagraph>
                        )}
                      {/* {korpusParagraph} */}
                      {Array.isArray(docResult.frags) &&
                        Array.isArray(korpusParagraph) &&
                        korpusParagraph.map((smallParagraph: any) => (
                          <ArticleParagraph key={Math.random()}>
                            {replaceText(smallParagraph)}
                            {/* {reactStringReplace(
                              smallParagraph,
                              // new RegExp(`${hashIds[1]}`),
                              hashIds[1],
                              (match, i) => (
                                <span
                                  id={`${hashIds[1]}`}
                                  key={i}
                                  style={{ color: 'lime' }}
                                >
                                  {match}
                                </span>
                              )
                            )}
                            {reactStringReplace(
                              smallParagraph,
                              // new RegExp(`${hashIds[2]}`),
                              hashIds[2],
                              (match, i) => (
                                <span
                                  id={`${hashIds[2]}`}
                                  key={i}
                                  style={{ color: 'pink' }}
                                >
                                  {match}
                                </span>
                              )
                            )}
                            {reactStringReplace(
                              smallParagraph,
                              // new RegExp(`${hashIds[3]}`),
                              hashIds[3],
                              (match, i) => (
                                <span
                                  key={i}
                                  id={`${hashIds[3]}`}
                                  style={{ color: 'rebeccapurple' }}
                                >
                                  {match}
                                </span>
                              )
                            )} */}
                          </ArticleParagraph>
                        ))}
                    </div>
                  ))}
                </ArticleSection>
              ))}
            </HighlightPopMenu>
          </>
        )}
      </ArticleWrapper>
    </ArticleContainer>
  )
}
export default ResultDisplay
