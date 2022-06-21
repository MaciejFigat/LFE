import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import DragAndDropMain from '../components/DragAndDrop/DragAndDropMain'
import { getUserFragments } from '../features/fragments/fragmentSlice'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  const dispatch: any = useAppDispatch()
  const userInfo: UserInfo = useAppSelector((state) => state.user.userInfo)
  useEffect(() => {
    if (Object.keys(userInfo).length > 0) {
      dispatch(getUserFragments(1))
    }
  }, [dispatch, userInfo])
  return <DragAndDropMain />
}
export default StoredFragments
