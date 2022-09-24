import React, { Dispatch, SetStateAction } from 'react'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordColumnContainer,
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

import {
  OpenBigDivButton,
  OpenDivButtonWrapper,
  WrapperMotionDiv,
} from '../LayoutAnimated/LayoutAnimated.styled'

interface FirstColumnProjectProps {
  state: any[]
  keywordMain?: string
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
  // setTitle?: Dispatch<SetStateAction<string>>
  setIdOpen?: Dispatch<SetStateAction<string>>
  canOpenApp?: boolean
  openedApp?: string | null
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
  setOpenedApp,
  // setTitle,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  const exportHandler = () => {
    Packer.toBlob(doc).then((blob) => {
      console.log(blob)
      saveAs(blob, `${keywordMain}.docx`)
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

  const openWindowHandler = (id: string, title: string) => {
    if (
      canOpenApp &&
      setOpenedApp &&
      // setTitle &&
      setIdOpen &&
      openedApp === null
    ) {
      setOpenedApp(id)
      // setTitle(title)
      setIdOpen(id)
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
                  onClick={exportHandler}
                >
                  <SvgIcon variant='export' toBottom contentAfter='eksportuj' />
                </SendButtonVerySmall>
              </AlignCenterContainer>
            </HorizontalButtonContainer>

            {/*  // todo here  */}

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
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {/* <WrapperMotionDiv> */}
                      <WrapperMotionDiv layoutId={fragment._id}>
                        {' '}
                      </WrapperMotionDiv>
                      <OpenDivButtonWrapper>
                        <OpenBigDivButton
                          onClick={() =>
                            openWindowHandler(fragment._id, fragment.title)
                          }
                        />
                      </OpenDivButtonWrapper>
                      {/*  // todo here  */}
                      <FragmentParSmall>
                        {' '}
                        <FragmentB>T:</FragmentB> {fragment.title}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>E:</FragmentB> {fragment.excerpt}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>D:</FragmentB> {fragment.description}
                      </FragmentParSmall>

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
                      {/* </WrapperMotionDiv> */}
                    </FragmentDivSmall>
                  )}
                </Draggable>
              ))}

            {provided.placeholder}
          </KeywordSearchContainer>
        )}
      </Droppable>
    </KeywordColumnContainer>
  )
}
export default FirstColumnProject
