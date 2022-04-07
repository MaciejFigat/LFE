import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { FragmentContainer } from './FragmentsColumn.styled'
import { motion, AnimateSharedLayout } from 'framer-motion'
import {
  ListWrapper,
  ItemWrapper,
} from '../AnimatedTextPanel/AnimatedList.styled'
import AnimatedSavedItem from '../AnimatedTextPanel/AnimatedSavedItem'
import { getUserFragments } from '../../features/fragments/fragmentSlice'
import { useAppDispatch } from '../../app/reduxHooks'
interface UserFragmentsColumnProps {}

const UserFragmentsColumn: React.FC<UserFragmentsColumnProps> = () => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
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
    <AnimateSharedLayout>
      {fragments.length > 0 &&
        fragments
          .map((fragment) => (
            <ListWrapper
              as={motion.ul}
              key={fragment._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {fragment.excerpt !== '' && (
                <FragmentContainer key={fragment.title}>
                  <ItemWrapper>
                    {' '}
                    <AnimatedSavedItem
                      id={fragment._id}
                      title={fragment.title}
                      description={fragment.description}
                      source={fragment.source}
                      excerpt={fragment.excerpt}
                      coordinates={fragment.coordinates}
                      updatedAt={fragment.updatedAt}
                    ></AnimatedSavedItem>
                  </ItemWrapper>
                </FragmentContainer>
              )}
            </ListWrapper>
          ))
          .reverse()}{' '}
    </AnimateSharedLayout>
  )
}
export default UserFragmentsColumn
