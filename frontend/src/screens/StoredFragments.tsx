import React, { useState } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import { UserInfo } from '../interfaces'
import ResizableScrollSection from '../components/ScrollSection/ResizableScrollSection'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const keywordsAll = fragments
    .map((fragment) => fragment.keywords.map((keyword: string) => keyword))
    .flat()
  //todo .flat() flattens the arr ie. [a, b, [c, d]].flat()=>[a, b, c, d]
  //? I wonder which one generates more boilerplate when compiled from TS, this or the next one
  let uniqueChars = [...Array.from(new Set(keywordsAll))]

  //? it iterates through elements show its index and then indexOf method show what index is this element when it first time appears, so if the result isn't the same for index and indexOf(element) then it means it's a duplicate
  // let uniqueChars = keywordsAll.filter((element, index) => {
  //   return keywordsAll.indexOf(element) === index
  // })

  // const testHandler = () => {
  // console.log(`keywordsAll ${keywordsAll}`)
  // console.log(`keywordsAll ${fragments.map((keyword) => keyword.keywords)}`)
  // console.log(`uniqueChars ${uniqueChars}`)
  // }
  const keywordHandler = (keyword: string) => {
    setSearchKeyword(keyword)
    console.log(searchKeyword)
  }

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
              <h2>Here are the keywords of this user:</h2>
              {uniqueChars.map((keyword) => (
                <b onClick={() => keywordHandler(keyword)}> {keyword}</b>
              ))}
              {/* <button onClick={testHandler}>Click Test</button> */}
              <h2>Fragments </h2>
              <h3>search key:{searchKeyword}</h3>
              {searchKeyword !== '' &&
                fragments.length > 0 &&
                fragments
                  .filter(
                    (fragmentsSorted) =>
                      // todo here is filtering function comparing the selected searchKeyword and keywords within the arr
                      fragmentsSorted.keywords.indexOf(searchKeyword) >= 0
                  )
                  .map((fragment) => (
                    <p>
                      {fragment.title} keywords arr: {fragment.keywords}
                    </p>
                  ))}
              <p></p>
              <p></p>
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
