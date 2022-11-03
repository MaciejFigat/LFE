import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'

import {
  ListWrapper,
  ItemWrapper,
  FragmentsWrapper,
} from '../Miscellaneous/AnimatedTextPanel/AnimatedList.styled'

import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../Miscellaneous/AnimatedTextPanel/AnimatedSavedItemSimple'
import StaggerChildrenWrapperSecondary from '../Miscellaneous/AnimationWrappers/StaggerChildrenWrapperSecondary'

interface UserFragmentsByKeywordProps {
  moreColumns?: boolean
}

const dropUpVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3,
    },
  },
}

const UserFragmentsByKeyword: React.FC<UserFragmentsByKeywordProps> = ({
  moreColumns,
}) => {
  const dispatch: any = useAppDispatch()

  const fragmentsKeywordMain: any[] = useAppSelector(
    (state) => state.fragment.fragmentsKeywordMain
  )
  const keywordMain: string = useAppSelector(
    (state) => state.preference.sortingKeywords.keywordMain
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
    <StaggerChildrenWrapperSecondary key={keywordMain}>
      <FragmentsWrapper moreColumns={moreColumns}>
        {fragmentsKeywordMain.length > 0 &&
          fragmentsKeywordMain
            .map((fragment) => (
              <ListWrapper
                // as={motion.ul}
                key={fragment._id}
                variants={dropUpVariants}
              >
                {fragment.excerpt !== '' && (
                  <FragmentContainer
                    key={fragment.title}
                    moreColumns={moreColumns}
                  >
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
      </FragmentsWrapper>
    </StaggerChildrenWrapperSecondary>
  )
}
export default UserFragmentsByKeyword
