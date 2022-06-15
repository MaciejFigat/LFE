import React from 'react'
import Toast from '../components/Toast/Toast'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'

const Home: React.FC = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  return (
    <>
      <Toast option='registerUser' />

      <ResizableScrollSection
        widthBig='60%'
        widthSmall='40%'
        transparent
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <UserFragmentsColumn />
          ) : (
            <FragmentsColumn />
          )
        }
        wideSection={
          <HighlightPopMenu>
            <p>dsds</p>
          </HighlightPopMenu>
        }
      />
    </>
  )
}
export default Home
