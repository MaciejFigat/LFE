import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Toast from '../components/Toast/Toast'

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
      <InfoSection paddingTop='small' data={homeData}></InfoSection>
      <InfoSection
        paddingTop='small'
        variant='transparent'
        data={homeData}
      ></InfoSection>
    </>
  )
}
export default Home
