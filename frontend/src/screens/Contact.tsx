import React from 'react'
import DragAndDrop from '../components/DragAndDrop/DragAndDrop'

// import SideMenuResizable from '../components/SideMenu/SideMenuResizable'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <DragAndDrop />
      {/* <SideMenuResizable mainData={<>sdsds</>}>
        <FragmentsColumn />
      </SideMenuResizable> */}
    </>
  )
}
export default Contact
