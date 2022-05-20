import React, { useState, useEffect } from 'react'
import {
  KeywordPar,
  KeywordDiv,
  ListButtonContainer,
  ListTitle,
  ListTitleContainer,
  TitleAnimated,
  TitleInput,
} from './AnimatedList.styled'
import { useAppDispatch } from '../../app/reduxHooks'
import { editSavedFragment } from '../../features/fragments/fragmentSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
interface KeywordEditingProps {
  keywords: string[]
  id: string
  title: string
  description: string
  source: string
  excerpt: string
  coordinates: string
}

const KeywordEditing: React.FC<KeywordEditingProps> = ({
  keywords,
  id,
  title,
  description,
  source,
  excerpt,
  coordinates,
}) => {
  const dispatch: any = useAppDispatch()

  const [keywordEditing, setKeywordEditing] = useState(false)
  const [keywordValue, setKeywordValue] = useState<string>('')
  const [prevKeywordValue, setPrevKeywordValue] = useState<string>('')
  const [keywordArr, setKeywordArr] = useState<string[]>(keywords)
  const [sameContents, setSameContents] = useState<boolean>()

  const newKeywordList = {
    _id: id,
    source: source,
    excerpt: excerpt,
    coordinates: coordinates,
    title: title,
    description: description,
    keywords: keywordArr,
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
      } else if (prevKeywordValue === '') {
        setKeywordArr((keywordArr) => [...keywordArr, keywordValue])
      }
    }
    setKeywordEditing(!keywordEditing)
    setKeywordValue('')
    setPrevKeywordValue('')
  }

  const deleteKeywordHandler = () => {
    let filteredArr = keywordArr.filter((keyword) => keyword !== keywordValue)
    setKeywordArr(() => filteredArr)
    setKeywordEditing(!keywordEditing)
  }
  const saveKeywordArrHandler = () => {
    dispatch(editSavedFragment(newKeywordList))

    console.log(keywordArr)
    console.log(keywords)
  }
  // useEffect(() => {
  //   if (keywordArr !== keywords) {
  //     dispatch(editSavedFragment(newKeywordList))
  //   } else return
  // }, [keywordArr, keywords, dispatch, newKeywordList])
  useEffect(() => {
    setSameContents(haveSameContents(keywordArr, keywords))
  }, [keywordArr, keywords])

  //? helper function to compare 2 arrays pertaining elements regardless of the order
  const haveSameContents = (a: any[], b: any[]) => {
    for (const v of Array.from(new Set([...a, ...b])))
      if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
        return false
    return true
  }

  return (
    <div>
      <ListTitleContainer as={motion.div} layout='size'>
        {!keywordEditing ? (
          <ListTitle as={motion.h2} layout>
            <TitleAnimated as={motion.div} layout>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KeywordPar>
                  {' '}
                  {keywordArr &&
                    keywordArr.map((keyword, index) => (
                      <KeywordDiv
                        key={index}
                        onClick={() => editKeywordHandler(keyword, index)}
                      >
                        {keywordArr.length > 1 ? `${keyword} \u00A0` : keyword}
                        {/* {keyword} */}
                      </KeywordDiv>
                    ))}
                </KeywordPar>
              </motion.div>
            </TitleAnimated>
          </ListTitle>
        ) : (
          <ListTitle>
            <TitleAnimated as={motion.div}>
              <TitleInput
                type='keyword'
                name='keyword'
                layout
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

        <ListButtonContainer
          as={motion.div}
          layout='position'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                // ease: [0.04, 0.22, 0.49, 0.98],
              }}
              exit={{ opacity: 0 }}
            >
              {!keywordEditing ? (
                <>
                  {' '}
                  {!sameContents ? (
                    <SendButtonSmall
                      variant='successEmpty'
                      onClick={saveKeywordArrHandler}
                    >
                      Test save Arr
                    </SendButtonSmall>
                  ) : (
                    <SendButtonSmall
                      variant='primaryEmpty'
                      onClick={addKeywordHandler}
                      as={motion.button}
                    >
                      +
                    </SendButtonSmall>
                  )}
                </>
              ) : (
                <>
                  <SendButtonSmall
                    variant='successEmpty'
                    onClick={saveKeywordHandler}
                  >
                    s
                  </SendButtonSmall>
                  <SendButtonSmall
                    variant='secondaryEmpty'
                    onClick={deleteKeywordHandler}
                  >
                    x
                  </SendButtonSmall>
                </>
              )}
            </motion.div>{' '}
          </AnimatePresence>
        </ListButtonContainer>
      </ListTitleContainer>{' '}
    </div>
  )
}
export default KeywordEditing
