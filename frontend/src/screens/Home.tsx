import React from 'react'
import Toast from '../components/Miscellaneous/Toast/Toast'
// import { useAppSelector } from '../app/reduxHooks'
// import HomeChoiceWrapper from '../components/HomePageComponents/HomeChoiceWrapper/HomeChoiceWrapper'
// import HeroOne from '../components/HomePageComponents/HeroOne'
// import HeroTwo from '../components/HomePageComponents/HeroTwo'
// import HeroThree from '../components/HomePageComponents/HeroThree'
// import { UserInfo } from '../interfaces'
// import SearchResultsDisplay from '../components/HomePageComponents/SearchResultsDisplay'
// import ProjectsDisplay from '../components/HomePageComponents/ProjectsDisplay'
// import FragmentsDisplay from '../components/HomePageComponents/FragmentsDisplay'
// import VisitedLinks from '../components/Miscellaneous/VisitedLinks/VisitedLinks'
import HeroGrid from '../modules/HomePageComponents/HeroGrid'
// import HomeSearch from '../components/HomePageComponents/HomeSearch'

const Home: React.FC = () => {
  // const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)

  //todo tabs used for unlogged user
  // const tabsTutorial = [
  //   {
  //     label: 'Wyszukaj',
  //     content: (
  //       <>
  //         <SearchResultsDisplay />
  //       </>
  //     ),
  //   },
  //   {
  //     label: 'Zapisz',
  //     // content: <HeroTwo />,
  //     content: 'HeroTwo suspended ',
  //   },
  //   {
  //     label: 'Eksportuj',
  //     // content: <HeroThree />,
  //     content: 'HEroThree suspended aswell as Two',
  //   },
  // ]
  // const tabsUser = [
  //   {
  //     label: 'Wyszukaj',
  //     content: (
  //       <>
  //         {/* <HomeSearch /> */}
  //         <SearchResultsDisplay />
  //       </>
  //     ),
  //   },
  //   {
  //     label: 'Projekty',
  //     content: <ProjectsDisplay />,
  //   },
  //   {
  //     label: 'Zapisane fragmenty',
  //     content: <FragmentsDisplay />,
  //   },
  //   {
  //     label: `Ostatnie wyniki`,
  //     content: (
  //       <>
  //         <VisitedLinks large />
  //       </>
  //     ),
  //   },
  // ]

  return (
    <>
      <Toast option='registerUser' />
      {/* {Object.keys(userInfo).length === 0 && (
        <HomeChoiceWrapper tabs={tabsTutorial} />
      )} */}
      <HeroGrid />
      {/* {Object.keys(userInfo).length > 0 && (
        <HomeChoiceWrapper navTop tabs={tabsUser} />
      )} */}
      {/* <SearchResultsDisplay /> */}
    </>
  )
}
export default Home
