import React, { useState } from 'react'
import {
  KeywordPar,
  ListButtonContainer,
  ListTitle,
  ListTitleContainer,
  TitleAnimated,
  TitleInput,
} from './AnimatedList.styled'
import { motion, AnimatePresence } from 'framer-motion'
import { SendButtonSmall } from '../Buttons/Buttons.styled'
interface KeywordEditingProps {
  keywords: string[]
}

const KeywordEditing: React.FC<KeywordEditingProps> = ({ keywords }) => {
  const [keywordEditing, setKeywordEditing] = useState(false)
  const [keywordValue, setKeywordValue] = useState<string>('')
  const [prevKeywordValue, setPrevKeywordValue] = useState<string>('')
  const [keywordArr, setKeywordArr] = useState<string[]>(keywords)

  const editKeywordHandler = (keyword: string, index: number) => {
    setKeywordEditing(!keywordEditing)
    setKeywordValue(keyword)
    setPrevKeywordValue(keyword)
  }
  const addKeywordHandler = () => {
    setKeywordEditing(!keywordEditing)

    console.log(prevKeywordValue)
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

  const deleteKeywordHandler = (index: number) => {
    const indexKeyword = keywordArr.indexOf(keywordValue)
    if (index > -1) {
      keywordArr.splice(indexKeyword, 1) //? 2nd parameter means remove one item only
    }
    if (keywordArr.includes(keywordValue)) {
      setKeywordArr([...keywordArr, keywordValue])
    }
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
                {/* <KeywordPar>
                  {' '}
                  {keywords.map((keyword, index) => (
                    <div
                      key={index}
                      onClick={() => editKeywordHandler(keyword)}
                    >
                      {keyword}
                    </div>
                  ))}
                </KeywordPar> */}
                <KeywordPar>
                  {' '}
                  {keywordArr.map((keyword, index) => (
                    <div
                      key={index}
                      onClick={() => editKeywordHandler(keyword, index)}
                    >
                      {keyword}
                    </div>
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
                // placeholder='new keyword'
                placeholder={keywordValue}
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
                <SendButtonSmall
                  variant='primaryEmpty'
                  onClick={addKeywordHandler}
                  as={motion.button}
                >
                  +
                </SendButtonSmall>
              ) : (
                <SendButtonSmall
                  variant='successEmpty'
                  onClick={saveKeywordHandler}
                >
                  s
                </SendButtonSmall>
              )}
            </motion.div>{' '}
          </AnimatePresence>
        </ListButtonContainer>
      </ListTitleContainer>{' '}
    </div>
  )
}
export default KeywordEditing
