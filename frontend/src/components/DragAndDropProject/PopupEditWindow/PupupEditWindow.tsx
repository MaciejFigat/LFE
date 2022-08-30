import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/reduxHooks'
import { editSavedFragment } from '../../../features/fragments/fragmentSlice'
import {
  ClosingDivBig,
  OpenedDivBig,
} from '../../LayoutAnimated/LayoutAnimated.styled'

interface PupupEditWindowProps {
  title: string
  openedApp: string | null
  setOpenedApp: Dispatch<SetStateAction<null | string>>
  setCanOpenApp: Dispatch<SetStateAction<boolean>>
  idOpen: string
  canOpenApp?: boolean
}

const PupupEditWindow: React.FC<PupupEditWindowProps> = ({
  openedApp,
  title,
  setOpenedApp,
  setCanOpenApp,
  idOpen,
}) => {
  const dispatch: any = useAppDispatch()

  const fragments: any[] = useAppSelector(
    (state) => state.fragment.userFragments
  )

  const [openedFragment, setOpenedFragment] = useState({ title: '' })
  useEffect(() => {
    const fragment = fragments.find(
      (fragmentSearched: any) => fragmentSearched._id === idOpen
    )
    setOpenedFragment(fragment)
  }, [fragments, idOpen])

  const testHelper = () => {
    console.log(openedFragment)
  }

  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }

  return (
    <>
      <ClosingDivBig
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ ease: 'linear' }}
        onClick={() => onClickCloseHelper()}
      />

      <OpenedDivBig layoutId={openedApp!.toString()}>
        {title}
        {idOpen}
        {/* {openedFragment !== {} && openedFragment.title} */}
        <button onClick={testHelper}>TEST !!!!!</button>
      </OpenedDivBig>
    </>
  )
}
export default PupupEditWindow
