import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import SideMenu from '../components/SideMenu/SideMenu'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'

export const homeData = {
  topline: 'Lorem ipsum dolor sit.',
  headline:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, mollitia?',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis non deleniti doloremque, iure laudantium quaerat esse odit. Similique nihil voluptate voluptatem sed tempora sunt libero, saepe corrupti laboriosam suscipit.',
}
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {/* <SideMenu> */}
      <SideMenu mainData={<p>Hello</p>}>
        <FragmentsColumn />
      </SideMenu>
      <HighlightPopMenu>
        <InfoSection
          variant='tertiary'
          paddingTop='small'
          data={homeData}
        ></InfoSection>
        <InfoSection
          variant='primary'
          paddingTop='small'
          data={homeData}
        ></InfoSection>
        <InfoSection
          variant='secondary'
          paddingTop='small'
          data={homeData}
        ></InfoSection>
        <InfoSection
          paddingTop='small'
          variant='transparent'
          data={homeData}
        ></InfoSection>
      </HighlightPopMenu>
    </>
  )
}
export default Contact
// mainData={
