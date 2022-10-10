import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { SendButtonVerySmall } from '../../Miscellaneous/Buttons/Buttons.styled'
import SvgIcon from '../../Miscellaneous/SvgIcon/SvgIcon'
import {
  PopupB,
  PopupHorizontalContainer,
  PopupKeywordDiv,
  PopupKeywordPar,
  PopupListButtonContainer,
  PopupTitle,
  PopupTitleAnimated,
  PopupTitleContainer,
  PopupTitleInput,
} from './PopupEditWindow.styled'

interface KeywordEditingProps {
  id: string
}

const KeywordEditing: React.FC<KeywordEditingProps> = ({ id }) => {
  const dispatch: any = useAppDispatch()
  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const fragment = fragments.find(
    (fragmentSearched: any) => fragmentSearched._id === id
  )

  const keywords = fragment?.keywords
  const keywordValueProps = fragment?.keywordValue

  const [keywordEditing, setKeywordEditing] = useState(false)
  const [keywordValue, setKeywordValue] = useState<string>('')
  const [keywordValuePropsFiltered, setKeywordValuePropsFiltered] = useState<
    any[]
  >([])
  const [prevKeywordValue, setPrevKeywordValue] = useState<string>('')
  const [keywordArr, setKeywordArr] = useState<string[]>(keywords)
  // const [keywordArr, setKeywordArr] = useState<string[]>([''])
  const [sameContents, setSameContents] = useState<boolean>(true)

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
        (keywordObject: any) =>
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
      <PopupTitleContainer>
        {!keywordEditing ? (
          <PopupTitle>
            <PopupTitleAnimated>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PopupKeywordPar>
                  <PopupB>Projekty:&nbsp;</PopupB>
                  {keywordArr &&
                    keywordArr.map((keyword, index) => (
                      <PopupKeywordDiv
                        key={index}
                        onClick={() => editKeywordHandler(keyword, index)}
                      >
                        {keywordArr.length > 1 ? `${keyword} \u00A0` : keyword}
                      </PopupKeywordDiv>
                    ))}
                </PopupKeywordPar>
              </motion.div>
            </PopupTitleAnimated>
          </PopupTitle>
        ) : (
          <PopupTitle>
            <PopupTitleAnimated>
              <PopupTitleInput
                type='keyword'
                name='keyword'
                placeholder='new keyword'
                value={keywordValue}
                onChange={(e: any) => setKeywordValue(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </PopupTitleAnimated>
          </PopupTitle>
        )}

        <PopupListButtonContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
              }}
              exit={{ opacity: 0 }}
            >
              <PopupHorizontalContainer>
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
              </PopupHorizontalContainer>
            </motion.div>
          </AnimatePresence>
        </PopupListButtonContainer>
      </PopupTitleContainer>
    </>
  )
}
export default KeywordEditing
