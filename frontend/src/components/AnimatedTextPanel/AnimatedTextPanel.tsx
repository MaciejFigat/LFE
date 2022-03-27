// import React, { useState } from 'react'
// import {
//   ListWrapper,
//   ItemWrapper,
//   PictureWrapper,
//   PictureListWrapper,
// } from '../../styles/homePanel.js'
// import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
// import ImageAnimated from './ImageAnimated'
// import Item from './Item'
// import Content from './Content'

// const AnimatedPanel = ({ data, Icon }) => {
//   const [panelNumber, setPanelNumber] = useState(null)

//   return (
//     <PictureListWrapper>
//       <AnimateSharedLayout>
//         <PictureWrapper as={motion.div} layout>
//           {panelNumber === null && data[0].picture2 && (
//             <ImageAnimated
//               src={data[0].picture2}
//               width='50vw'
//               height='60vh'
//               id='2'
//             />
//           )}
//           {panelNumber !== null && (
//             <ImageAnimated
//               src={data[panelNumber].picture}
//               id={data[panelNumber].id}
//               width='50vw'
//               height='60vh'
//             />
//           )}
//           {panelNumber !== null && data[panelNumber].description2 && (
//             <>
//               {' '}
//               <AnimatePresence exitBeforeEnter>
//                 <Content
//                   description={data[panelNumber].description2}
//                   key={data[panelNumber].id}
//                 />
//               </AnimatePresence>
//             </>
//           )}
//         </PictureWrapper>
//         <ListWrapper
//           as={motion.ul}
//           layout
//           initial={{ borderRadius: 25, opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {data.map((item) => (
//             <ItemWrapper
//               key={item.id}
//               onClick={() => {
//                 setPanelNumber(item.id - 1)
//               }}
//             >
//               <Item
//                 picture={item.picture}
//                 title={item.title}
//                 description={item.description}
//                 svgColor={item.color}
//                 Icon={Icon}
//               />
//             </ItemWrapper>
//           ))}
//         </ListWrapper>{' '}
//       </AnimateSharedLayout>
//     </PictureListWrapper>
//   )
// }

// export default AnimatedPanel
