import React, { useState } from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import {
  SwitchButtonWrapper,
  SwitchResultContainer,
  SwitchResultWrapper,
  SwitchText,
} from '../../Miscellaneous/SearchBar/SearchBar.styled'
import SwitchButton from '../../Miscellaneous/SearchBar/SwitchButton'
interface HeroSearchOptionsProps {}

const HeroSearchOptions: React.FC<HeroSearchOptionsProps> = () => {
  const searchResults: any = useAppSelector(
    (state) => state.searchResult.searchResults
  )

  const { data } = searchResults

  const fragmentsSource: any = useAppSelector(
    (state) => state.preference.sortFragmentsBySource
  )
  const { KrajowaInformacjaSkarbowa, IzbaSkarbowa, MinisterFinansów } =
    fragmentsSource

  const [isOnOne, setIsOnOne] = useState(KrajowaInformacjaSkarbowa)
  const [isOnTwo, setIsOnTwo] = useState(IzbaSkarbowa)
  const [isOnThree, setIsOnThree] = useState(MinisterFinansów)
  return (
    <div>
      {' '}
      <SwitchResultWrapper>
        <SwitchButtonWrapper>
          <SwitchResultContainer>
            {/* <button onClick={() => console.log(KrajowaInformacjaSkarbowa)}>
              terst
            </button> */}
            <SwitchButton
              isOn={isOnOne}
              setIsOn={setIsOnOne}
              sortingOption='one'
            />
            <SwitchText isOn={isOnOne}>
              Krajowa Informacja Skarbowa ({' '}
              {
                data.filter((dataFiltered: any) => dataFiltered.typSadu === 7)
                  .length
              }{' '}
              )
            </SwitchText>
          </SwitchResultContainer>
        </SwitchButtonWrapper>
        <SwitchButtonWrapper>
          <SwitchResultContainer>
            <SwitchButton
              isOn={isOnTwo}
              setIsOn={setIsOnTwo}
              sortingOption='two'
            />
            <SwitchText isOn={isOnTwo}>
              Izba Skarbowa ({' '}
              {
                data.filter((dataFiltered: any) => dataFiltered.typSadu === 8)
                  .length
              }{' '}
              )
            </SwitchText>
          </SwitchResultContainer>
        </SwitchButtonWrapper>
        <SwitchButtonWrapper>
          {' '}
          <SwitchResultContainer>
            <SwitchButton
              isOn={isOnThree}
              setIsOn={setIsOnThree}
              sortingOption='three'
            />
            <SwitchText isOn={isOnThree}>
              Minister Finansów ({' '}
              {
                data.filter((dataFiltered: any) => dataFiltered.typSadu === 9)
                  .length
              }{' '}
              )
            </SwitchText>
          </SwitchResultContainer>
        </SwitchButtonWrapper>
      </SwitchResultWrapper>
    </div>
  )
}
export default HeroSearchOptions
