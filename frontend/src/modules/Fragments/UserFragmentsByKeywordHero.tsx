import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import {
  ListWrapper,
  ItemWrapper
} from '../AnimatedTextPanel/AnimatedList.styled'
import { getUserFragments } from '../../features/fragments/fragmentSlice'
import AnimatedSavedItemSimple from '../AnimatedTextPanel/AnimatedSavedItemSimple'
import StaggerChildrenWrapperSecondary from '../../components/AnimationWrappers/StaggerChildrenWrapperSecondary'
import { HeroColumnsWrapper } from '../../styles/misc.styled'
import AnimatedSavedItemSuperSimple from '../AnimatedTextPanel/AnimatedSavedItemSuperSimple'
import { AppDispatch } from '../../app/store'

interface UserFragmentsByKeywordHeroProps {}

const dropUpVariants = {
  hidden: {
    y: -10,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.3
    }
  }
}

const UserFragmentsByKeywordHero: React.FC<
  UserFragmentsByKeywordHeroProps
> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const fragmentsKeywordMain: any[] = useAppSelector(
    state => state.fragment.fragmentsKeywordMain
  )
  const keywordMain: string = useAppSelector(
    state => state.preference.sortingKeywords.keywordMain
  )
  const fragmentsDetailView: boolean = useAppSelector(
    state => state.preference.fragmentsDetailView
  )

  const fragmentSuccess: boolean = useAppSelector(
    state => state.fragment.success
  )

  useEffect(() => {
    dispatch(getUserFragments(1))
    if (fragmentSuccess === true) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, fragmentSuccess])

  return (
    <StaggerChildrenWrapperSecondary key={keywordMain}>
      <HeroColumnsWrapper details={fragmentsDetailView}>
        {fragmentsKeywordMain.length > 0 &&
          fragmentsKeywordMain
            .map(fragment => (
              <ListWrapper key={fragment._id} variants={dropUpVariants}>
                {fragment.excerpt !== '' && (
                  <FragmentContainer key={fragment.title}>
                    <ItemWrapper>
                      {fragmentsDetailView ? (
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
                      ) : (
                        <AnimatedSavedItemSuperSimple
                          id={fragment._id}
                          source={fragment.source}
                          excerpt={fragment.excerpt}
                          updatedAt={fragment.updatedAt}
                          keywords={fragment.keywords}
                          keywordValue={fragment.keywordValue}
                        />
                      )}
                    </ItemWrapper>
                  </FragmentContainer>
                )}
              </ListWrapper>
            ))
            .reverse()}{' '}
      </HeroColumnsWrapper>
    </StaggerChildrenWrapperSecondary>
  )
}
export default UserFragmentsByKeywordHero
