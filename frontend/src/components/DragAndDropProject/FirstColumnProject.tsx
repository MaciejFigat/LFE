import React from 'react'
import {
  FragmentB,
  FragmentDivSmall,
  FragmentParSmall,
  KeywordB,
  KeywordColumnContainer,
  KeywordDivSimple,
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
  SymbolRun,
} from 'docx'
import { saveAs } from 'file-saver'
// import * as fs from 'fs'
import SelectMainKeyword from '../KeywordSearchPanel/DropdownSelect/SelectMainKeyword'

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

  const testHandler = () => {
    Packer.toBlob(doc).then((blob) => {
      console.log(blob)
      saveAs(blob, 'example.docx')
      console.log('Document created successfully')
    })
    // console.log(state.flat()[0].title)
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
          }),
        ],
      }),
    ]
    for (let i = 0; i < state[0].length; i++) {
      paragraphArray.push(
        new Paragraph({
          // children: [new TextRun(`${keywordMain}`)],
          // children: [new TextRun(`${state[0][i].title}`)],
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Tytuł:`,
                  bold: true,
                }),
                // new PageBreak(),
                new TextRun({
                  text: ` ${state[0][i].title}`,
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
                  text: ` ${state[0][i].excerpt}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Źródło: ${state[0][i].source}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Sygnatura: ${state[0][i].coordinates}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
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
          }),
          new PageBreak(),
        ],
      })
    )
    for (let i = 0; i < state[1].length; i++) {
      paragraphArray.push(
        new Paragraph({
          // children: [new TextRun(`${keywordMain}`)],
          // children: [new TextRun(`${state[0][i].title}`)],
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Tytuł:`,
                  bold: true,
                }),
                // new PageBreak(),
                new TextRun({
                  text: ` ${state[0][i].title}`,
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
                  text: ` ${state[0][i].excerpt}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Źródło: ${state[0][i].source}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Sygnatura: ${state[0][i].coordinates}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
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
                new TextRun({
                  text: `Tytuł:`,
                  bold: true,
                }),
                // new PageBreak(),
                new TextRun({
                  text: ` ${state[0][i].title}`,
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
                  text: ` ${state[0][i].excerpt}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Źródło: ${state[0][i].source}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Sygnatura: ${state[0][i].coordinates}`,
                  italics: true,
                }),
              ],
              bullet: {
                level: 0,
              },
            }),
          ],
        })
      )
    }

    return paragraphArray
  }

  const doc = new Document({
    // sections: [
    //   {
    //     // headers: {
    //     //   default: new Header({
    //     //     children: [new Paragraph(`Nazwa projektu: ${keywordMain}`)],
    //     //   }),
    //     // },
    //     headers: {
    //       default: new Header({
    //         children: [new Paragraph('Header text')],
    //       }),
    //     },
    //     properties: {},

    //   },
    // ],
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
    // sections: [
    //   {

    //     children: buildParagraphTwo(),
    //   },
    // ],
  })

  return (
    <KeywordColumnContainer>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <KeywordSearchContainer
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            <SelectMainKeyword />

            <button onClick={testHandler}>Save Project as docX</button>

            {/* //todo DocX part START */}

            {/* //todo DocX part END */}

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
                      <FragmentParSmall>
                        <FragmentB>T:</FragmentB> {fragment.title}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>E:</FragmentB> {fragment.excerpt}
                      </FragmentParSmall>
                      <FragmentParSmall>
                        <FragmentB>D:</FragmentB> {fragment.description}
                      </FragmentParSmall>

                      <KeywordDivSimple>
                        <FragmentB>Keywords:&nbsp;</FragmentB>
                        {fragment.keywords.map((keyword: string) => (
                          <KeywordB key={Math.random()}>
                            {keyword} &nbsp;
                          </KeywordB>
                        ))}
                      </KeywordDivSimple>
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
