import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import SideMenu from '../components/SideMenu/SideMenu'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import {
  createFragment,
  getUserFragments,
} from '../features/fragments/fragmentSlice'
import { useAppDispatch } from '../app/reduxHooks'

export const homeData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',
}
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  // todo TESTING
  const dispatch: any = useAppDispatch()
  const newFragment = {
    // id: id,
    // userId?: ''
    source: 'testing',
    excerpt: 'testing',
    coordinates: 'testing',
    title: 'testing',
    description: 'testing',
  }
  const saveFragmentHandler = () => {
    dispatch(createFragment(newFragment))
  }
  const getUserFragmentsHandler = () => {
    // parameter that is passed below is just a filler, apparently ThunkApi needs 2 parameters so I pass a dummy value, that is not used anywhere
    dispatch(getUserFragments(1))
  }
  //todo
  return (
    <>
      <HighlightPopMenu>
        <InfoSection variant='tertiary' paddingTop='small' data={homeData}>
          <button onClick={saveFragmentHandler}>
            Testing saving the fragment
          </button>
          <button onClick={getUserFragmentsHandler}>
            Testing retrieving my fragments
          </button>
        </InfoSection>
        <InfoSection
          variant='primary'
          paddingTop='small'
          data={homeData}
        ></InfoSection>
        <InfoSection
          variant='secondary'
          paddingTop='small'
          data={homeData}
        ></InfoSection>
        <InfoSection
          paddingTop='small'
          variant='transparent'
          data={homeData}
        ></InfoSection>{' '}
      </HighlightPopMenu>
      <SideMenu>
        <FragmentsColumn />
      </SideMenu>
    </>
  )
}
export default Contact
