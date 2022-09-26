import React, { useState, useEffect } from 'react'
import {
  KeywordPar,
  KeywordDiv,
  ListButtonContainer,
  ListTitle,
  TitleAnimated,
  TitleInput,
  HorizontalButtonContainer,
  ListKeywordContainer,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import { FragmentB } from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
interface KeywordEditingProps {
  keywords: string[]
  id: string
  keywordValue: {
    keyword: string
    value: boolean
    labelOne: string
    labelTwo: string
    skip: boolean
  }[]
}

const KeywordEditing: React.FC<KeywordEditingProps> = ({
  keywords,
  id,
  keywordValue: keywordValueProps,
}) => {
  const dispatch: any = useAppDispatch()

  const [keywordEditing, setKeywordEditing] = useState(false)
  const [keywordValue, setKeywordValue] = useState<string>('')
  const [keywordValuePropsFiltered, setKeywordValuePropsFiltered] = useState<
    any[]
  >([])
  const [prevKeywordValue, setPrevKeywordValue] = useState<string>('')
  const [keywordArr, setKeywordArr] = useState<string[]>(keywords)
  const [sameContents, setSameContents] = useState<boolean>(false)

  const newKeywordList = {
    _id: id,
    keywords: keywordArr,
    keywordValue: keywordValuePropsFiltered,
  }

  const editKeywordHandler = (keyword: string, index: number) => {
    setKeywordEditing(!keywordEditing)
    setKeywordValue(keyword)
    setPrevKeywordValue(keyword)
  }
  const addKeywordHandler = () => {
    setKeywordEditing(!keywordEditing)
  }

  const saveKeywordHandler = () => {
    if (
      !keywordArr.includes(keywordValue) &&
      keywordValue !== '' &&
      keywordValue !== prevKeywordValue
    ) {
      if (prevKeywordValue !== '') {
        let filteredArr = keywordArr.filter(
          (keyword) => keyword !== prevKeywordValue
        )
        setKeywordArr(() => [...filteredArr, keywordValue])
      } else if (prevKeywordValue === '' && keywordArr) {
        setKeywordValuePropsFiltered([
          ...keywordValueProps,
          {
            keyword: keywordValue,
            value: true,
            labelOne: 'pro',
            labelTwo: 'contra',
            skip: true,
          },
        ])
        setKeywordArr((keywordArr) => [...keywordArr, keywordValue])
      }
    }
    setKeywordEditing(!keywordEditing)
    setKeywordValue('')
    setPrevKeywordValue('')
  }

  const deleteKeywordHandler = () => {
    let filteredArr = keywordArr.filter((keyword) => keyword !== keywordValue)
    setKeywordValuePropsFiltered([
      ...keywordValueProps.filter(
        (keywordObject) =>
          // keywordObject.keyword !== keywordValue || keywordObject.keyword === ''
          keywordObject.keyword !== keywordValue
      ),
    ])
    setKeywordArr(() => filteredArr)
    setKeywordEditing(!keywordEditing)
  }
  const saveKeywordArrHandler = () => {
    dispatch(editSavedFragment(newKeywordList))
  }

  useEffect(() => {
    if (keywordArr?.length > 0 && keywords?.length > 0) {
      setSameContents(haveSameContents(keywordArr, keywords))
    }
  }, [keywordArr, keywords, sameContents, dispatch])

  //? helper function to compare 2 arrays pertaining elements regardless of the order
  const haveSameContents = (a: any[], b: any[]) => {
    for (const v of Array.from(new Set([...a, ...b])))
      if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
        return false
    return true
  }

  return (
    <>
      <ListKeywordContainer>
        {!keywordEditing ? (
          <ListTitle>
            <TitleAnimated>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KeywordPar>
                  <FragmentB>Keywords:&nbsp;</FragmentB>
                  {keywordArr &&
                    keywordArr.map((keyword, index) => (
                      <KeywordDiv
                        key={index}
                        onClick={() => editKeywordHandler(keyword, index)}
                      >
                        {keywordArr.length > 1 ? `${keyword} \u00A0` : keyword}
                      </KeywordDiv>
                    ))}
                </KeywordPar>
              </motion.div>
            </TitleAnimated>
          </ListTitle>
        ) : (
          <ListTitle>
            <TitleAnimated>
              <TitleInput
                type='keyword'
                name='keyword'
                placeholder='new keyword'
                value={keywordValue}
                onChange={(e: any) => setKeywordValue(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </TitleAnimated>
          </ListTitle>
        )}

        <ListButtonContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              exit={{ opacity: 0 }}
            >
              <HorizontalButtonContainer>
                {!keywordEditing ? (
                  <>
                    {!sameContents ? (
                      <SendButtonVerySmall
                        variant='successEmpty'
                        onClick={saveKeywordArrHandler}
                      >
                        <SvgIcon variant='save' toBottom contentAfter='save' />
                      </SendButtonVerySmall>
                    ) : (
                      <SendButtonVerySmall
                        variant='successEmpty'
                        onClick={addKeywordHandler}
                      >
                        <SvgIcon
                          variant='plus'
                          toBottom
                          contentAfter='add keyword'
                        />
                      </SendButtonVerySmall>
                    )}
                  </>
                ) : (
                  <>
                    <SendButtonVerySmall
                      variant='successEmpty'
                      onClick={saveKeywordHandler}
                      as={motion.button}
                    >
                      <SvgIcon
                        variant='save'
                        toBottom
                        contentAfter='save changes'
                      />
                    </SendButtonVerySmall>

                    <SendButtonVerySmall
                      variant='secondaryEmpty'
                      onClick={deleteKeywordHandler}
                    >
                      <SvgIcon
                        variant='remove'
                        toBottom
                        contentAfter='delete'
                      />
                    </SendButtonVerySmall>
                    <SendButtonVerySmall
                      variant='primaryEmpty'
                      onClick={() => setKeywordEditing(!keywordEditing)}
                    >
                      <SvgIcon variant='back' toBottom contentAfter='back' />
                    </SendButtonVerySmall>
                  </>
                )}
              </HorizontalButtonContainer>
            </motion.div>
          </AnimatePresence>
        </ListButtonContainer>
      </ListKeywordContainer>
    </>
  )
}
export default KeywordEditing
