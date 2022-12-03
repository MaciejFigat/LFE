import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
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
export { HeroSavedOne, HeroSavedTwo, HeroSavedMain }
