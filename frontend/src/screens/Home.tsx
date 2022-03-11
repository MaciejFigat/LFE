import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Toast from '../components/Toast/Toast'
// @ts-ignore
// import HighlightPop from 'react-highlight-pop'
import HighlightPop from '../components/HighlightPopRemake/HighlightPopRemake'
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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo libero
          placeat, iste maiores adipisci quis. Ducimus fugit suscipit labore
          repellendus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quae illum quaerat iste unde cum. Dolores ratione ipsa perferendis rem
          ut, quisquam dolorem modi sequi, commodi debitis repellat quis
          eveniet!
        </p>
      </HighlightPop>
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
