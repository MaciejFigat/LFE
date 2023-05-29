import React from 'react'
import { HeroMobile } from '../../layout/layout.styled'
import UserFragmentsByKeywordHero from '../Fragments/UserFragmentsByKeywordHero'
import {
  HorizontalLineBottomLight,
  HorizontalLineTop,
  HorizontalWrapperMobile
} from '../../styles/misc.styled'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import HeroProjectExport from '../HomePageComponents/HeroGridComponents/HeroProjectExport'
import HeroProjectCategories from '../HomePageComponents/HeroGridComponents/HeroProjectCategories'
import { useAppSelector } from '../../app/reduxHooks'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import PupupEditWindow from './PopupEditWindow/PupupEditWindow'

interface StoredFragmentsMobileProps {}

const StoredFragmentsMobile: React.FC<StoredFragmentsMobileProps> = () => {
  const idOpenFragment = useAppSelector(
    state => state.preference.idOpenFragment
  )
  return (
    <HeroMobile>
      {' '}
      <AnimateSharedLayout type='crossfade'>
        <HorizontalWrapperMobile>
          <SelectMainKeyword />
          <HeroProjectExport />
        </HorizontalWrapperMobile>
        <HorizontalLineBottomLight />
        <HorizontalLineTop />
        <HeroProjectCategories />
        <HorizontalLineBottomLight />
        <HorizontalLineTop />
        <UserFragmentsByKeywordHero />{' '}
        <AnimatePresence>
          {idOpenFragment !== '' && (
            <PupupEditWindow
              idOpen={idOpenFragment}
              openedApp={idOpenFragment}
            />
          )}
        </AnimatePresence>{' '}
      </AnimateSharedLayout>
    </HeroMobile>
  )
}
export default StoredFragmentsMobile
