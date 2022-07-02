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
  // ArticleParagraphFragment,
  ArticleContainer,
} from './ResultDisplay.styled'
import SideButtons from '../menu/SideButtons/SideButtons'

interface ResultDisplayProps {
  // variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
  imgStart?: boolean
}

const ResultDisplay: React.FC<ResultDisplayProps> = () => {
  const docResult: any = useAppSelector((state) => state.searchResult.docResult)
  const [hashIds, setHashIds] = useState<string[]>([])
  useEffect(() => {
    const idArray = []
    if (docResult.frags && docResult.selected_frag) {
      idArray.push(docResult.selected_frag.substring(40, 70))
      for (let i = 0; i < docResult.frags.length; i++) {
        console.log(docResult.frags[i].substring(30, 70))
        idArray.push(docResult.frags[i].substring(30, 70))
      }
      setHashIds(idArray)
    }
    // if (docResult.selected_frag) {
    //   idArray.push(docResult.selected_frag.substring(30, 70))
    // }
  }, [docResult.frags, docResult.selected_frag])

  // const testHandler = () => {
  //   if (docResult.frags) {
  //     const idArray = []
  //     for (let i = 0; i < docResult.frags.length; i++) {
  //       console.log(docResult.frags[i].substring(30, 50))
  //       idArray.push(docResult.frags[i].substring(30, 50))
  //     }
  //     setHashIds(idArray)
  //   }
  // }
  // const helperTwo = () => {
  //   console.log(hashIds)
  // }
  // const helperThree = (smallParagraph: string) => {
  //   if (docResult.frags) {
  //     if (
  //       docResult.frags.every((item: any) =>
  //         smallParagraph.toLowerCase().includes(item.substring(30, 50))
  //       ) ||
  //       smallParagraph
  //         .toLowerCase()
  //         .includes(docResult.selected_frag.toLowerCase().substring(30, 50))
  //     ) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // const helperFour = (paragraph: string) => {
  //   for (let i = 0; i < hashIds.length; i++) {
  //     paragraph.includes(docResult.frags[i].substring(30, 90))
  //   }
  // }
  return (
    <ArticleContainer>
      {/* <NavHashLink smooth to='/search/result#idNumber1'> */}
      {/* <NavHashLink smooth to='/search/result#testing'> */}
      {/* <button onClick={testHandler}>TESTING !!!1</button>
      <button onClick={helperTwo}>TESTING 2</button>
      <button onClick={() => helperThree}>Compare</button> */}
      {/* <NavHashLink to={`/search/result#${hashIds[3]}`}>TEST</NavHashLink> */}
      {/* //todo */}
      {/* {hashIds.length > 0 &&
        hashIds.map((id: any) => (
          <HashLink smooth to={`/search/result#${id}`} key={Math.random()}>
            {id}
          </HashLink>
        ))} */}
      {/* //todo */}
      <SideButtons hashIds={hashIds} />
      {/* // <HashLink to=`/search/result#${id}`>id</HashLink> */}
      {/* // <HashLink to=`/search/result#`>id</HashLink> */}

      {/* <NavHashLink smooth to='/search/result#testing'>
        TEST 2
      </NavHashLink> */}
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
                    <ArticleParagraph key={Math.random()}>
                      {!korpusParagraph.toString().startsWith('TRESC') &&
                        !Array.isArray(korpusParagraph) &&
                        korpusParagraph}
                      {Array.isArray(docResult.frags) &&
                        Array.isArray(korpusParagraph) &&
                        korpusParagraph.map((smallParagraph: any) => (
                          <div key={Math.random()}>
                            {/* {helperThree(smallParagraph) ? (
                              <ArticleParagraphFragment
                                key={Math.random()}
                               
                                id={`${hashIds.every((item: any) =>
                                  smallParagraph.match(`/${item.toString()}/g`)
                                  smallParagraph.match(`${item}`)
                                )}`}
                      
                               
                            
                              >
                                {smallParagraph}
                              </ArticleParagraphFragment>
                            ) : ( */}
                            <ArticleParagraph key={Math.random()}>
                              {reactStringReplace(
                                smallParagraph,
                                // new RegExp(`${hashIds[0]}`),
                                hashIds[0],
                                (match, i) => (
                                  <span
                                    id={`${hashIds[0]}`}
                                    key={i}
                                    style={{ color: 'red' }}
                                  >
                                    {match}
                                  </span>
                                )
                              )}
                              {reactStringReplace(
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
                              )}
                            </ArticleParagraph>
                            )
                          </div>
                        ))}
                    </ArticleParagraph>
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
