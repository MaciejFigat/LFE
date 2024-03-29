import React from 'react'
import Toast from '../components/Miscellaneous/Toast/Toast'
import HeroGrid from '../modules/HomePageComponents/HeroGrid'
import HomeMobileLayout from '../layout/HomeMobileLayout'

const HomeScreen: React.FC = () => {
  return (
    <>
      <Toast option='registerUser' />

      <HeroGrid />
      <HomeMobileLayout />
    </>
  )
}
export default HomeScreen
