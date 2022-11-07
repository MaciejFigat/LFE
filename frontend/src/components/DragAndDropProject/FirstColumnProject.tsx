import React, { Dispatch, SetStateAction } from 'react'
import {
  FirstColProjectWrapper,
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  FragmentTitleRowSmall,
  KeywordB,
  KeywordColumnContainer,
  KeywordDivSimple,
  KeywordSearchContainer,
} from '../Miscellaneous/KeywordSearchPanel/KeywordSearch/KeywordSearch.styled'
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
import SelectMainKeyword from '../Miscellaneous/KeywordSearchPanel/DropdownSelect/SelectMainKeyword'
import {
  AlignCenterContainer,
  ProjectOneSelectProjectWrapper,
  VerticalButtonContainer,
} from './LabelInput/LabelInput.styled'
import { SendButtonVerySmall } from '../Miscellaneous/Buttons/Buttons.styled'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'

import {
  ClayButtonWrapper,
  DotButton,
  RelativeRightSvgWrapper,
  WrapperMotionDiv,
} from '../../styles/misc.styled'
import { ButtonMedium } from '../Miscellaneous/Buttons/BigButton.styled'

interface FirstColumnProjectProps {
  state: any[]
  keywordMain?: string
  setOpenedApp?: Dispatch<SetStateAction<null | string>>
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
    ? 'var(--background-secondary1)'
    : 'var(--background4-main)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver
    ? 'var(--background-blur1)'
    : 'var(--background1-main)',
  borderRadius: '40px',

  width: 250,
  minWidth: '100%',
})

const FirstColumnProject: React.FC<FirstColumnProjectProps> = ({
  state,
  keywordMain,
  setOpenedApp,
  canOpenApp,
  openedApp,
  setIdOpen,
}) => {
  const savedFragmentsPage: any = useAppSelector(
    (state) => state.preference.savedFragmentsPage
  )
  const { start, end } = savedFragmentsPage

  const widthNumber = useAppSelector((state) => state.preference.width)
  // const width = widthString.substring(0, 2)

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

  const openWindowHandler = (id: string) => {
    if (canOpenApp && setOpenedApp && setIdOpen && openedApp === null) {
      setOpenedApp(id)
      setIdOpen(id)
    }
  }
  return (
    <>
      <VerticalButtonContainer>
        <ProjectOneSelectProjectWrapper>
          {' '}
          <SelectMainKeyword wide />
        </ProjectOneSelectProjectWrapper>
        <AlignCenterContainer>
          <ClayButtonWrapper paddingProps='0.5rem'>
            {' '}
            <ButtonMedium variant='success' onClick={exportHandler}>
              {' '}
              eksportuj wybrany projekt &nbsp;
              <SvgIcon
                variant='export'
                toBottom
                noContent
                lowerPosition='2px'
              />
            </ButtonMedium>
          </ClayButtonWrapper>
        </AlignCenterContainer>
      </VerticalButtonContainer>
      <KeywordColumnContainer>
        <Droppable key={'0'} droppableId={`0`}>
          {(provided, snapshot) => (
            <KeywordSearchContainer
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              <FirstColProjectWrapper width={widthNumber}>
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
                          <WrapperMotionDiv layoutId={fragment._id}>
                            {' '}
                          </WrapperMotionDiv>

                          <FragmentTitleRowSmall>
                            <FragmentParSmall>
                              {fragment.title !==
                              fragment.excerpt.substring(0, 22) ? (
                                <>{fragment.title}</>
                              ) : (
                                <>{fragment.source}</>
                              )}
                            </FragmentParSmall>
                            <RelativeRightSvgWrapper>
                              <SendButtonVerySmall
                                variant='primaryEmpty'
                                onClick={() => openWindowHandler(fragment._id)}
                              >
                                <DotButton left='0px' />
                              </SendButtonVerySmall>
                            </RelativeRightSvgWrapper>
                          </FragmentTitleRowSmall>
                          {fragment.title !==
                            fragment.excerpt.substring(0, 22) && (
                            <FragmentParSmall>
                              {fragment.source}
                            </FragmentParSmall>
                          )}

                          <FragmentParSmall>
                            <FragmentB> {fragment.excerpt}</FragmentB>
                          </FragmentParSmall>
                          {fragment.description.substring(0, 12) !==
                            fragment.source.substring(0, 12) && (
                            <FragmentParSmall>
                              {fragment.description}
                            </FragmentParSmall>
                          )}
                          <FragmentParSmall>
                            {fragment.coordinates}
                          </FragmentParSmall>
                          <FragmentParSmall>
                            Aktualizacja: {fragment.updatedAt.substring(0, 10)}{' '}
                            o godzinie {fragment.updatedAt.substring(12, 16)}
                          </FragmentParSmall>
                          {(fragment.keywords.length > 1 ||
                            fragment.keywords[0] !== '') && (
                            <KeywordDivSimple>
                              {fragment.keywords
                                .filter(
                                  (keyword: string) => keyword !== keywordMain
                                )
                                .map((keyword: string) => (
                                  <KeywordB key={Math.random()}>
                                    {keyword} &nbsp;
                                  </KeywordB>
                                ))}
                            </KeywordDivSimple>
                          )}
                        </FragmentDivSmall>
                      )}
                    </Draggable>
                  ))}
              </FirstColProjectWrapper>

              {provided.placeholder}
            </KeywordSearchContainer>
          )}
        </Droppable>
      </KeywordColumnContainer>
    </>
  )
}
export default FirstColumnProject
