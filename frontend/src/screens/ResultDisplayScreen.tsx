import React from 'react'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import ResultDisplay from '../components/ResultDisplay/ResultDisplay'

interface ResultDisplayScreenProps {}

const ResultDisplayScreen: React.FC<ResultDisplayScreenProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  return (
    <>
      {' '}
      <ResizableScrollSection
        widthBig='60%'
        widthSmall='40%'
        // transparent
        narrowOption
        narrowSection={
          Object.keys(userInfo).length > 0 ? (
            <UserFragmentsColumn />
          ) : (
            <FragmentsColumn />
          )
        }
        wideSection={<ResultDisplay />}
      />
    </>
  )
}
export default ResultDisplayScreen
