import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
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
import { ButtonSmall } from '../Miscellaneous/Buttons/BigButton.styled'
import SvgIcon from '../Miscellaneous/SvgIcon/SvgIcon'
// import { ClayButtonWrapperSecondary } from '../../styles/misc.styled'
interface FirstColumnExportControlsProps {
  state: any[]
}

const FirstColumnExportControls: React.FC<FirstColumnExportControlsProps> = ({
  state,
}) => {
  const sortingKeywords = useAppSelector(
    (state) => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords
  const exportHandler = () => {
    if (keywordMain !== '') {
      Packer.toBlob(doc).then((blob) => {
        console.log(blob)
        saveAs(blob, `${keywordMain}.docx`)
        console.log('Document created successfully')
      })
    } else {
      window.alert('Wybierz projekt')
    }
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

  return (
    // <ClayButtonWrapperSecondary paddingProps='10px' marginProps='0rem'>

    <ButtonSmall
      variant='successEmpty'
      borderRadius='15px'
      onClick={exportHandler}
    >
      {' '}
      eksportuj &nbsp;
      <SvgIcon variant='export' toBottom noContent lowerPosition='2px' />
    </ButtonSmall>
    // </ClayButtonWrapperSecondary>
  )
}
export default FirstColumnExportControls
