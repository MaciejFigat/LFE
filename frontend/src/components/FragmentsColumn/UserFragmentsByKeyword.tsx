import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import { motion } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'

import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../Miscellaneous/AnimatedTextPanel/AnimatedSavedItemSimple'

interface UserFragmentsByKeywordProps {}

const UserFragmentsByKeyword: React.FC<UserFragmentsByKeywordProps> = () => {
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
  )
}
export default UserFragmentsByKeyword
