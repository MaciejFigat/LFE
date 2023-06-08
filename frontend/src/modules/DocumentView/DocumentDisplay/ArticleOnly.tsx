import React, { useEffect, useState } from 'react'
import {
  ArticleParagraph,
  ArticleSection,
  ArticleTitle,
  ArticleTopline,
  ArticleWrapper
} from './ResultDisplay.styled'
import HighlightPopMenu from '../../../components/Miscellaneous/HighlightPopRemake/HighlightPopMenu'
import { useAppSelector } from '../../../app/reduxHooks'
import parse from 'html-react-parser'
import { useScroll } from 'framer-motion'
import SideButtons from '../../../components/Miscellaneous/SideButtons/SideButtons'
interface ArticleOnlyProps {}

const ArticleOnly: React.FC<ArticleOnlyProps> = () => {
  const docResult: any = useAppSelector(state => state.searchResult.docResult)
  const { frags: highlightedFragments } = docResult

  const { scrollYProgress } = useScroll()

  const [hashIds, setHashIds] = useState<string[]>([])
  //* look for id's: frag-0, frag-1 etc.
  useEffect(() => {
    const idArray: string[] = []
    if (highlightedFragments) {
      for (let i = 0; i < highlightedFragments.length; i++) {
        idArray.push(`frag-${i}`)
      }
      setHashIds(idArray)
    }
  }, [highlightedFragments])

  return (
    <>
      {' '}
      <SideButtons hashIds={hashIds} scrollYProgress={scrollYProgress} />
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
              {docResult.korpus.map((korpusElement: any, index: number) => (
                <ArticleSection key={index}>
                  {korpusElement.map((korpusParagraph: any, index: number) => (
                    <div key={index}>
                      {!korpusParagraph.toString().startsWith('TRESC') &&
                        !Array.isArray(korpusParagraph) && (
                          <ArticleParagraph>
                            {parse(korpusParagraph)}
                          </ArticleParagraph>
                        )}

                      {Array.isArray(docResult.frags) &&
                        Array.isArray(korpusParagraph) &&
                        korpusParagraph.map(
                          (smallParagraph: any, index: number) => (
                            <ArticleParagraph key={index}>
                              {parse(smallParagraph)}
                            </ArticleParagraph>
                          )
                        )}
                    </div>
                  ))}
                </ArticleSection>
              ))}
            </HighlightPopMenu>
          </>
        )}
      </ArticleWrapper>
    </>
  )
}
export default ArticleOnly
