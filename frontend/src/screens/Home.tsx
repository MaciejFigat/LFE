import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Toast from '../components/Toast/Toast'
// @ts-ignore
// import HighlightPop from 'react-highlight-pop'
import HighlightPop from '../components/HighlightPopRemake/HighlightPopRemake'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
export const homeData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',

  imgLink: 'https://source.unsplash.com/kVi5zMOUTFc',
}

const Home: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />

      <HighlightPop>
        <InfoSection paddingTop='small' data={homeData}></InfoSection>
      </HighlightPop>
      <HighlightPopMenu>
        <InfoSection
          paddingTop='small'
          variant='transparent'
          data={homeData}
        ></InfoSection>
      </HighlightPopMenu>
    </>
  )
}
export default Home
