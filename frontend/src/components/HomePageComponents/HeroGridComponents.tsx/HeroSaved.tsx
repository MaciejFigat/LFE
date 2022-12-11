import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import UserFragmentsByKeyword from '../../FragmentsColumn/UserFragmentsByKeyword'
import UserFragmentsColumn from '../../FragmentsColumn/UserFragmentsColumn'
interface HeroSavedProps {}

const HeroSavedMain: React.FC<HeroSavedProps> = () => {
  return <div></div>
}

const HeroSavedOne: React.FC<HeroSavedProps> = () => {
  const citations: any[] = useAppSelector((state) => state.fragment.citations)
  return (
    <div>
      {citations?.length > 1 ? (
        <>ilość fragmentów: {citations?.length - 1}</>
      ) : (
        <>Zaznacz tekst przeglądanego dokumentu</>
      )}
    </div>
  )
}
const HeroSavedTwo: React.FC<HeroSavedProps> = () => {
  return <div>Dokument link</div>
}
const HeroFragmentsDisplay: React.FC<HeroSavedProps> = () => {
  const sortingOption: string = useAppSelector(
    (state) => state.preference.sortingOption
  )
  return (
    <>
      {sortingOption === 'data' || sortingOption === 'wszystkie' ? (
        <UserFragmentsColumn />
      ) : null}
      {sortingOption === 'projekt' ? <UserFragmentsByKeyword /> : null}
    </>
  )
}
export { HeroSavedOne, HeroSavedTwo, HeroFragmentsDisplay, HeroSavedMain }
