import React from 'react'
import DragAndDropMain from '../components/DragAndDropSecondary/DragAndDropMain'
// import DnD from '../components/DragAndDrop/DnD'

// import DragAndDrop from '../components/DragAndDrop/DragAndDrop'
// import DragAndDropSecondary from '../components/DragAndDrop/DragAndDropSecondary'

// import SideMenuResizable from '../components/SideMenu/SideMenuResizable'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <DragAndDropMain />

      {/* <SideMenuResizable mainData={<>sdsds</>}>
        <DnD />
      </SideMenuResizable> */}
    </>
  )
}
export default Contact
