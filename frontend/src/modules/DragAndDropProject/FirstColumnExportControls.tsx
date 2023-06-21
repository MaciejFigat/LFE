import React from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Header,
  PageBreak,
  ExternalHyperlink
} from 'docx'
import { saveAs } from 'file-saver'

import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { HorizontalWrapperGap } from '../../styles/misc.styled'
import {
  PDFDownloadLink,
  Page,
  View,
  Document as PdfDocument,
  Text,
  StyleSheet,
  Note
} from '@react-pdf/renderer'
import { ButtonVariants } from '../../consts'
import { ButtonSmall } from '../../components/Buttons/Buttons.styled'
import { FragmentStored } from '../../interfaces'

interface FirstColumnExportControlsProps {
  state: FragmentStored[][]
}

const FirstColumnExportControls: React.FC<FirstColumnExportControlsProps> = ({
  state
}) => {
  const sortingKeywords = useAppSelector(
    state => state.preference.sortingKeywords
  )

  const { keywordMain } = sortingKeywords
  const exportHandler = () => {
    if (keywordMain !== '') {
      Packer.toBlob(doc).then(blob => {
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
            bold: true
          }),
          new PageBreak(),
          new TextRun({
            text: `Fragmenty bez kategorii`,
            italics: true,
            bold: true
          })
        ]
      })
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
                      italics: true
                    })
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[0][i].docId
                  }/${state[0][i].query ?? ''}`
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true
                }),

                new TextRun({
                  text: ` ${state[0][i].excerpt}`
                })
              ]
            })
          ]
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
            bold: true
          }),
          new PageBreak()
        ]
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
                      italics: true
                    })
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[1][i].docId
                  }/${state[1][i].query ?? ''}`
                })
              ]
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true
                }),

                new TextRun({
                  text: ` ${state[1][i].excerpt}`
                })
              ]
            })
          ]
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
            bold: true
          }),
          new PageBreak()
        ]
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
                      italics: true
                    })
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    state[2][i].docId
                  }/${state[2][i].query ?? ''}`
                })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Cytowany fragment:`,
                  bold: true
                }),

                new TextRun({
                  text: ` ${state[2][i].excerpt}`
                })
              ]
            })
          ]
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
            children: []
          }),
          first: new Header({
            // The header on first page when the 'Different First Page' option is activated
            children: []
          }),
          even: new Header({
            // The header on even pages when the 'Different Odd & Even Pages' option is activated
            children: []
          })
        },

        children: buildParagraphTwo()
      }
    ]
  })

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 25
    },
    section: {
      margin: 15,
      padding: 10,
      flexGrow: 1
    },
    header: {
      fontSize: 22,
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    item: {
      fontSize: 12,
      marginBottom: 5,
      lineHeight: 1.2
    },
    source: {
      fontSize: 12,
      marginBottom: 5,
      color: '#d2672d'
    }
  })

  const MyDocument = () => (
    <PdfDocument>
      <Page size='A4' style={styles.page}>
        <Text style={styles.header}>PROJEKT {keywordMain?.toUpperCase()}</Text>

        <View style={styles.section}>
          <Text style={styles.header}>
            {state[1][0]?.keywordValue[0]?.labelOne ?? 'Pro'}
          </Text>
          {state[1].map(fragment => (
            <View key={fragment.excerpt}>
              <Text style={styles.source}>
                {fragment.source} {fragment.coordinates}
              </Text>
              <Text style={styles.item}>{fragment.excerpt}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>
            {state[2][0]?.keywordValue[0]?.labelTwo ?? 'Contra'}
          </Text>
          {state[2].map(fragment => (
            <View key={fragment.excerpt}>
              <Text style={styles.source}>
                {fragment.source} {fragment.coordinates}
              </Text>
              <Text style={styles.item}>{fragment.excerpt}</Text>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Fragmenty bez kategorii</Text>
          {state[0].map(fragment => (
            <View key={fragment.excerpt}>
              <Text style={styles.source}>
                {fragment.source} {fragment.coordinates}
              </Text>
              <Text style={styles.item}>{fragment.excerpt}</Text>
            </View>
          ))}
        </View>
      </Page>
    </PdfDocument>
  )
  return (
    <HorizontalWrapperGap>
      <ButtonSmall
        variant={
          keywordMain !== ''
            ? ButtonVariants.SUCCESS_EMPTY
            : ButtonVariants.DISABLED
        }
        onClick={exportHandler}
        disabled={keywordMain === ''}
      >
        {' '}
        eksport txt &nbsp;
        <SvgIcon variant='export' noContent lowerPosition='2px' />
      </ButtonSmall>
      <ButtonSmall
        variant={
          keywordMain !== ''
            ? ButtonVariants.INFO_EMPTY
            : ButtonVariants.DISABLED
        }
        disabled={keywordMain === ''}
      >
        {' '}
        <PDFDownloadLink
          document={<MyDocument />}
          fileName={`${keywordMain}.pdf`}
        >
          eksport pdf
        </PDFDownloadLink>{' '}
        &nbsp; <SvgIcon variant='export' noContent lowerPosition='2px' />
      </ButtonSmall>
    </HorizontalWrapperGap>
  )
}
export default FirstColumnExportControls
