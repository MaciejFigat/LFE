import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import { motion } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'

import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'

interface UserFragmentsByKeywordProps {
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  setTitle?: Dispatch<SetStateAction<string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
}

const UserFragmentsByKeyword: React.FC<UserFragmentsByKeywordProps> = ({
  setOpenedApp,
  setTitle,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const dispatch: any = useAppDispatch()

  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )

  const fragmentSuccess: boolean = useAppSelector(
    (state) => state.fragment.success
  )

  useEffect(() => {
    dispatch(getUserFragments(1))
    if (fragmentSuccess === true) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, fragmentSuccess])

  return (
    // <AnimateSharedLayout>
    <>
      {fragmentsKeywordMain.length > 0 &&
        fragmentsKeywordMain
          .map((fragment) => (
            <ListWrapper
              as={motion.ul}
              key={fragment._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {fragment.excerpt !== '' && (
                <FragmentContainer key={fragment.title}>
                  <ItemWrapper>
                    <AnimatedSavedItemSimple
                      setOpenedApp={setOpenedApp}
                      setTitle={setTitle}
                      canOpenApp={canOpenApp}
                      setIdOpen={setIdOpen}
                      openedApp={openedApp}
                      id={fragment._id}
                      title={fragment.title}
                      description={fragment.description}
                      source={fragment.source}
                      excerpt={fragment.excerpt}
                      coordinates={fragment.coordinates}
                      updatedAt={fragment.updatedAt}
                      keywords={fragment.keywords}
                      keywordValue={fragment.keywordValue}
                    />
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapper>
          ))
          .reverse()}{' '}
    </>
    // </AnimateSharedLayout>
  )
}
export default UserFragmentsByKeyword
