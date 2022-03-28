import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Toast from '../components/Toast/Toast'
import ScrollSection from '../components/ScrollSection/ScrollSection'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import AnimatedList from '../components/AnimatedTextPanel/AnimatedList'

export const homeData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',

  imgLink: 'https://source.unsplash.com/kVi5zMOUTFc',
}
const data = [
  {
    title: '1',
    description: 'testing 1',
  },
  {
    title: '2',
    description: 'testing 2',
  },
  {
    title: '3',
    description: 'testing 3',
  },
]

const Home: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />
      <ScrollSection
        widthBig='60%'
        widthSmall='40%'
        transparent
        narrowSection={<FragmentsColumn />}
        wideSection={
          <HighlightPopMenu>
            <InfoSection paddingTop='small' data={homeData}></InfoSection>
            {/* import { AnimateSharedLayout } from 'framer-motion' */}
            <AnimatedList data={data} />
            <InfoSection
              paddingTop='small'
              variant='transparent'
              data={homeData}
            ></InfoSection>
          </HighlightPopMenu>
        }
      />
    </>
  )
}
export default Home
