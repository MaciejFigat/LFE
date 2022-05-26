import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Toast from '../components/Toast/Toast'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
export const homeData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',

  imgLink: 'https://source.unsplash.com/kVi5zMOUTFc',
}

const Home: React.FC = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  return (
    <>
      <Toast option='registerUser' />

      <ResizableScrollSection
        widthBig='60%'
        widthSmall='40%'
        transparent
        // narrowSection={<FragmentsColumn />}
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <UserFragmentsColumn />
          ) : (
            <FragmentsColumn />
          )
        }
        wideSection={
          <HighlightPopMenu>
            <InfoSection paddingTop='small' data={homeData}></InfoSection>

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
