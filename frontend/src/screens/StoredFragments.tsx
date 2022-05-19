import React from 'react'
import { useAppSelector } from '../app/reduxHooks'
// import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import { UserInfo } from '../interfaces'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
import KeywordSearch from '../components/KeywordSearchPanel/KeywordSearch/KeywordSearch'
import { KeywordColumnContainer } from '../components/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import UserFragColSimple from '../components/FragmentsColumn/UserFragColSimple'

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
          // wideSection={<UserFragmentsColumn />}
          wideSection={<UserFragColSimple />}
          narrowSection={
            <KeywordColumnContainer>
              <KeywordSearch keywordOptionOne />
              <KeywordSearch />
            </KeywordColumnContainer>
          }
        />
      ) : (
        <h1>Log in to view stored fragments 232323</h1>
      )}
    </div>
  )
}
export default StoredFragments
