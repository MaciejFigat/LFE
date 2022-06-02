import React from 'react'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import DataSection from '../components/InfoSection/DataSection'
import { useAppSelector } from '../app/reduxHooks'
import axios from 'axios'
import { UserInfo } from '../interfaces'
import { useAppDispatch } from '../app/reduxHooks'
import {
  getSearchResults,
  getSearchResultsTwo,
} from '../features/searchResults/searchResultsSlice'
import UserFragmentsColumn from '../components/FragmentsColumn/UserFragmentsColumn'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import SideMenuSecondary from '../components/SideMenu/SideMenuSecondary'
import { SendButton } from '../components/Buttons/Buttons.styled'
// import { useGetPokemonByNameQuery } from '../features/lexApi/lexApiSlice'

interface SearchResultsProps {}

export const Data = {
  topline: 'ISTOTA INTERPRETACJI:',
  headline:
    'w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej',
  fragmentsFound: [
    '(...) dochodowego od osób fizycznych w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej - jest prawidłowe. (...)',
    '(...) w zakresie możliwości zaliczenia do kosztów uzyskania przychodów prowadzonej działalności gospodarczej opłaty za obronę pracy doktorskiej. We wniosku przedstawiono następujące zdarzenie (...)',
    '(...) jak oprogramowanie komputerowe oraz programu prawniczego. W związku z powyższym opisem zadano następujące pytanie. Czy koszty związane z obroną pracy doktorskiej będą stanowiły koszty (...)',
    '(...) uzyskania przychodów z tytułu prowadzenia pozarolniczej działalności gospodarczej w zakresie usług prawnych? Zdaniem Wnioskodawczyni, wydatki na obronę doktorską można zaliczyć do kosztów (...)',
  ],

  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',
}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const dispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  //! testing here - express and react
  const submitHandler = (e: any) => {
    e.preventDefault()
    // dispatch(getSearchResults('test'))
    dispatch(getSearchResults('obrona'))
  }
  const submitHandlerTwo = (e: any) => {
    e.preventDefault()
    // dispatch(getSearchResults('test'))
    dispatch(getSearchResultsTwo())
  }

  // const testHandlerHackaton = () => {
  const dataHandler = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      },
    }

    const data = await axios.get(
      'https://null.turbo-lex.pl/search/?query=obrona%20konieczna',
      config
    )
    //@ts-ignore
    // setFetchedData(data)
    console.log(data)
  }
  // dataHandler()
  // }

  // const submitHandlerFetch = (e: any) => {
  //   e.preventDefault()
  //   // const config = {
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   // }
  //   // axios.get('https://null.turbo-lex.pl/', config).then((res) => {
  //   //   const data = res.data
  //   //   return data
  //   //   console.log(data)
  //   // })
  //   async function getResponse() {
  //     try {
  //       // 👇️ const data: GetUsersResponse
  //       // 'https://cors-anywhere.herokuapp.com/https://null.turbo-lex.pl/',
  //       const { data, status } = await axios.get('https://null.turbo-lex.pl/', {
  //         headers: {
  //           // Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //           // 'Access-Control-Allow-Origin': '*',
  //           // 'Access-Control-Allow-Credentials': 'true',
  //         },
  //       })

  //       console.log(JSON.stringify(data, null, 4))

  //       // 👇️ "response status is: 200"
  //       console.log('response status is: ', status)

  //       return data
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         console.log('error message: ', error.message)
  //         return error.message
  //       } else {
  //         console.log('unexpected error: ', error)
  //         return 'An unexpected error occurred'
  //       }
  //     }
  //   }
  //   getResponse()
  // }

  // todo testing Api access
  // const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  // const dataHandlerApi = async () => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   }

  return (
    <div>
      <SideMenuSecondary
        mainData={
          <HighlightPopMenu>
            <SendButton onClick={submitHandler}>Testing the A's DB</SendButton>
            <SendButton variant='secondary' onClick={dataHandler}>
              hackaton test
            </SendButton>

            <DataSection paddingTop='large' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
            <DataSection paddingTop='small' data={Data} />
          </HighlightPopMenu>
        }
      >
        {Object.keys(userInfo).length > 0 ? (
          <UserFragmentsColumn />
        ) : (
          <FragmentsColumn />
        )}
      </SideMenuSecondary>
    </div>
  )
}
export default SearchResults
