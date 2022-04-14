import React from 'react'
import { useAppSelector } from '../app/reduxHooks'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import { UserInfo } from '../interfaces'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  return (
    <div>
      {Object.keys(userInfo).length > 0 ? (
        <ResizableScrollSection
          widthBig='50%'
          widthSmall='30%'
          transparent
          wideSection={<UserFragmentsColumn />}
          narrowSection={
            <>
              <h2>Sorting features </h2>
              <p>make sure it has z-index {'>'} 1</p>
              <p>when the sorting component will be ready</p>
            </>
          }
        />
      ) : (
        <h1>Log in to view stored fragments</h1>
      )}
    </div>
  )
}
export default StoredFragments
