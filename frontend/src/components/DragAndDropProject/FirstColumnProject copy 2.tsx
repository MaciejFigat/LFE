import React, { useState } from 'react'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  // KeywordB,
  KeywordColumnContainer,
  // KeywordDivSimple,
  KeywordSearchContainer,
} from '../KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
import { useAppSelector } from '../../app/reduxHooks'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Header,
  PageBreak,
  ExternalHyperlink,
} from 'docx'
import { saveAs } from 'file-saver'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import {
  AlignCenterContainer,
  HorizontalButtonContainer,
} from './LabelInput/LabelInput.styled'
import { SendButtonVerySmall } from '../Buttons/Buttons.styled'
import SvgIcon from '../SvgIcon/SvgIcon'
import LayoutAnimated from '../LayoutAnimated/LayoutAnimated'
import {
  AnimationContainer,
  ClosedLayoutDiv,
  ClosingDiv,
  ClosingDivBig,
  LayoutDivWrapper,
  OpenDivButton,
  OpenedDivBig,
  OpenedLayoutDiv,
  WrapperMotionDiv,
} from '../LayoutAnimated/LayoutAnimated.styled'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

interface FirstColumnProjectProps {
  state: any[]
  keywordMain?: string
}
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging
    ? 'var(--background2-main)'
    : 'var(--background1-main)',
  color: isDragging
    ? 'var(--background-secondary4)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-tertiary1)'
    : 'var(--background1-main)',

  width: 250,
  minWidth: '100%',
})
const FirstColumnProject: React.FC<FirstColumnProjectProps> = ({
  state,
  keywordMain,
}) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  // todo
  const [canOpenApp, setCanOpenApp] = useState<boolean>(true)

  const [openedApp, setOpenedApp] = useState<null | string>(null)
  const [title, setTitle] = useState<string>('')
  //todo

  const testHandler = () => {
    Packer.toBlob(doc).then((blob) => {
      console.log(blob)
      saveAs(blob, 'example.docx')
      console.log('Document created successfully')
    })
  }

  const buildParagraphTwo = () => {
    let paragraphArray: Paragraph[] = [
      new Paragraph({
        children: [
          new TextRun({
            text: `PROJEKT ${keywordMain?.toUpperCase()}`,
            bold: true,
          }),
          new PageBreak(),
          new TextRun({
            text: `Fragmenty bez kategorii`,
            italics: true,
            bold: true,
          }),
        ],
      }),
    ]
    for (let i = 0; i < state[0].length; i++) {
      paragraphArray.push(
        new Paragraph({
          children: [
            new Paragraph({
              children: [
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: `${state[0][i].source} ${state[0][i].coordinates}`,
                      italics: true,
                    }),
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[0][i].docId
                  }/${state[0][i].query ?? ''}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true,
                }),

                new TextRun({
                  text: ` ${state[0][i].excerpt}`,
                }),
              ],
            }),
          ],
        })
      )
    }

    paragraphArray.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Fragmenty ${
              state[1][0]?.keywordValue[0]?.labelOne ?? 'Pros'
            }`,
            italics: true,
            bold: true,
          }),
          new PageBreak(),
        ],
      })
    )
    for (let i = 0; i < state[1].length; i++) {
      paragraphArray.push(
        new Paragraph({
          children: [
            new Paragraph({
              children: [
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: `${state[1][i].source} ${state[1][i].coordinates}`,
                      italics: true,
                    }),
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[1][i].docId
                  }/${state[1][i].query ?? ''}`,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true,
                }),
                // new PageBreak(),
                new TextRun({
                  text: ` ${state[1][i].excerpt}`,
                }),
              ],
            }),
          ],
        })
      )
    }

    paragraphArray.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `Fragmenty ${
              state[1][0]?.keywordValue[0]?.labelTwo ?? 'Cons'
            }`,
            italics: true,
            bold: true,
          }),
          new PageBreak(),
        ],
      })
    )
    for (let i = 0; i < state[2].length; i++) {
      paragraphArray.push(
        new Paragraph({
          children: [
            new Paragraph({
              children: [
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: `${state[2][i].source} ${state[2][i].coordinates}`,
                      italics: true,
                    }),
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[2][i].docId
                  }/${state[2][i].query ?? ''}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true,
                }),

                new TextRun({
                  text: ` ${state[2][i].excerpt}`,
                }),
              ],
            }),
          ],
        })
      )
    }

    return paragraphArray
  }

  const doc = new Document({
    sections: [
      {
        headers: {
          default: new Header({
            // The standard default header on every page or header on odd pages when the 'Different Odd & Even Pages' option is activated
            children: [],
          }),
          first: new Header({
            // The header on first page when the 'Different First Page' option is activated
            children: [],
          }),
          even: new Header({
            // The header on even pages when the 'Different Odd & Even Pages' option is activated
            children: [],
          }),
        },

        children: buildParagraphTwo(),
      },
    ],
  })

  const onClickCloseHelper = () => {
    setOpenedApp(null)
    setCanOpenApp(false)
    setTimeout(() => {
      setCanOpenApp(true)
    }, 500)
  }
  const openWindowHandler = (id: string, title: string) => {
    if (canOpenApp) {
      setOpenedApp(id)
      setTitle(title)
    }
  }
  return (
    <KeywordColumnContainer>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <KeywordSearchContainer
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            <HorizontalButtonContainer>
              <SelectMainKeyword />
              <AlignCenterContainer>
                <SendButtonVerySmall
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variant='primaryEmpty'
                  onClick={testHandler}
                >
                  <SvgIcon variant='export' toBottom contentAfter='eksportuj' />
                </SendButtonVerySmall>
              </AlignCenterContainer>
            </HorizontalButtonContainer>
            {/* <LayoutAnimated /> */}
            {/*  // todo here  */}
            {/* <AnimationContainer> */}
            {/* <LayoutDivWrapper> */}
            <AnimateSharedLayout type='crossfade'>
              {state[0]
                .slice(start, end + 1)
                .map((fragment: any, index: number) => (
                  <Draggable
                    key={fragment.nanoId}
                    draggableId={fragment.nanoId}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <FragmentDivSmall
                        // layoutId={fragment._id.toString()}

                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        // key={fragment._id}
                        // layoutId={fragment._id.toString()}
                      >
                        <WrapperMotionDiv layoutId={fragment._id}>
                          {/*  // todo here  */}
                          <FragmentParSmall>
                            <FragmentB>T:</FragmentB> {fragment.title}
                          </FragmentParSmall>
                          <FragmentParSmall>
                            <FragmentB>E:</FragmentB> {fragment.excerpt}
                          </FragmentParSmall>
                          <FragmentParSmall>
                            <FragmentB>D:</FragmentB> {fragment.description}
                          </FragmentParSmall>
                          <OpenDivButton
                            onClick={() =>
                              openWindowHandler(fragment._id, fragment.title)
                            }
                          />
                          {/* <ClosedLayoutDiv
                              key={fragment.id}
                              layoutId={fragment._id.toString()}
                            >
                              <KeywordDivSimple>
                                <FragmentB>Keywords:&nbsp;</FragmentB>
                                {fragment.keywords.map((keyword: string) => (
                                  <KeywordB key={Math.random()}>
                                    {keyword} &nbsp;
                                  </KeywordB>
                                ))}
                              </KeywordDivSimple>
                              <OpenDivButton
                                onClick={() =>
                                  openWindowHandler(
                                    fragment._id,
                                    fragment.title
                                  )
                                }
                              />
                            </ClosedLayoutDiv> */}
                          {/* <KeywordDivSimple>
                              <FragmentB>Keywords:&nbsp;</FragmentB>
                              {fragment.keywords.map((keyword: string) => (
                                <KeywordB key={Math.random()}>
                                  {keyword} &nbsp;
                                </KeywordB>
                              ))}
                            </KeywordDivSimple> */}
                        </WrapperMotionDiv>
                      </FragmentDivSmall>
                    )}
                  </Draggable>
                ))}
              <AnimatePresence>
                {openedApp && (
                  <>
                    <ClosingDivBig
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ ease: 'linear' }}
                      onClick={() => onClickCloseHelper()}
                    />
                    {/* <OpenedLayoutDiv layoutId={openedApp.toString()}> */}
                    <OpenedDivBig layoutId={openedApp.toString()}>
                      {title}
                    </OpenedDivBig>
                  </>
                )}
              </AnimatePresence>
            </AnimateSharedLayout>
            {provided.placeholder}
            {/* </LayoutDivWrapper> */}
            {/* </AnimationContainer> */}
            {/* {provided.placeholder} */}
          </KeywordSearchContainer>
        )}
      </Droppable>
    </KeywordColumnContainer>
  )
}
export default FirstColumnProject
