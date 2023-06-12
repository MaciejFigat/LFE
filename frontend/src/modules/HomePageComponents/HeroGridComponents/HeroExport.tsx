import React from 'react'
import { useAppSelector } from '../../../app/reduxHooks'
import { saveAs } from 'file-saver'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Header,
  PageBreak,
  ExternalHyperlink
} from 'docx'
import { ButtonSmall } from '../../../components/ButtonsSend/BigButton.styled'
import { ClayButtonWrapperSecondary } from '../../../styles/misc.styled'
import SvgIcon from '../../../components/SvgIcon/SvgIcon'
interface HeroExportProps {}

const HeroExportMain: React.FC<HeroExportProps> = () => {
  const citations: any[] = useAppSelector(state => state.fragment.citations)

  const buildParagraphTwo = () => {
    let paragraphArray: Paragraph[] = [
      new Paragraph({
        children: [
          new TextRun({
            text: `Wybrane fragmenty`,
            bold: true
          }),
          new PageBreak()
        ]
      })
    ]
    for (let i = 0; i < citations.slice(1).length; i++) {
      paragraphArray.push(
        new Paragraph({
          children: [
            new Paragraph({
              children: [
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: `${citations[i].source} ${citations[i].coordinates}`,
                      italics: true
                    })
                  ],
                  link: `http://lexbis.netlify.app/search/result/${
                    citations[i].docId
                  }/${citations[i].query ?? ''}`
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
                  text: ` ${citations[i].excerpt}`
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
            children: []
          }),
          first: new Header({
            children: []
          }),
          even: new Header({
            children: []
          })
        },

        children: buildParagraphTwo()
      }
    ]
  })
  const exportHandler = () => {
    if (citations.length > 0) {
      Packer.toBlob(doc).then(blob => {
        console.log(blob)
        saveAs(blob, `zapisane.docx`)
      })
    } else {
      window.alert('Wybierz projekt')
    }
  }

  return (
    <>
      {citations.length > 1 ? (
        <ButtonSmall variant='successEmpty' onClick={exportHandler}>
          eksport &nbsp;
          <SvgIcon variant='export' toBottom noContent lowerPosition='2px' />
        </ButtonSmall>
      ) : (
        <ClayButtonWrapperSecondary
          $paddingProps='0.5rem 1rem'
          $marginProps='0rem'
        >
          Brak fragmentów
        </ClayButtonWrapperSecondary>
      )}
    </>
  )
}
export { HeroExportMain }
