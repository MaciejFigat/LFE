import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/reduxHooks'
import DragAndDropMain from '../components/DragAndDrop/DragAndDropMain'
import { getUserFragments } from '../features/fragments/fragmentSlice'
interface StoredFragmentsProps {}

const StoredFragments: React.FC<StoredFragmentsProps> = () => {
  const dispatch: any = useAppDispatch()
  useEffect(() => {
    dispatch(getUserFragments(1))
  }, [dispatch])
  return <DragAndDropMain />
}
export default StoredFragments
