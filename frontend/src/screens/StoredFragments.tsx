import React from 'react'
import ScrollSection from '../components/ScrollSection/ScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import { UserInfo } from '../interfaces'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  return (
    <div>
      {Object.keys(userInfo).length > 0 ? (
        <ScrollSection
          widthBig='50%'
          widthSmall='30%'
          transparent
          wideSection={<UserFragmentsColumn />}
          // narrowSection={<FragmentsColumn />}
          narrowSection={<h2>Sorting features</h2>}
          // wideSection={<h2>Sorting features</h2>}
        />
      ) : (
        <h1>Log in to view stored fragments</h1>
      )}
    </div>
  )
}
export default StoredFragments
