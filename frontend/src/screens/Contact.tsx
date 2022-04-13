import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import HighlightPopMenu from '../components/HighlightPopRemake/HighlightPopMenu'
import FragmentsColumn from '../components/FragmentsColumn/FragmentsColumn'
import ResizableDiv from '../components/ResizableDiv/ResizableDiv'
import SideMenuResizable from '../components/SideMenu/SideMenuResizable'

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
      <SideMenuResizable
        mainData={
          <>
            <HighlightPopMenu>
              <h1>Hello Testing</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                eligendi, saepe ea unde doloremque obcaecati libero? In iusto,
                assumenda fugiat nam accusamus consectetur soluta, libero labore
                nobis aspernatur dolor iure nostrum a provident officia autem
                iste necessitatibus deserunt vero nihil, minima debitis tempora
                odio tempore. Odio ipsum nesciunt, eum vero voluptatum dolor
                sunt ad necessitatibus! Vero molestiae illum quo illo molestias
                deleniti quaerat beatae quod culpa? Inventore reiciendis dolor,
                fugiat praesentium qui officiis ratione quisquam delectus quidem
                cupiditate, consequatur ipsum rem? Aperiam voluptatum labore,
                ullam architecto id magnam voluptatem provident corrupti
                inventore aliquid adipisci, iste qui nam laudantium atque velit
                mollitia deleniti accusamus libero ab placeat deserunt facere
                vel. Omnis saepe velit officiis? Temporibus, sequi. Quae debitis
                iure aperiam quas quia molestiae modi voluptatum nostrum
                tempora, ex sunt omnis. Saepe quaerat, id beatae dicta
                distinctio inventore provident voluptas eum natus nemo non
                expedita consequuntur, quos debitis veritatis delectus iste quam
                unde ad esse tempora? Debitis commodi hic facilis provident est
                rem ex sapiente. Neque, natus, quia accusantium id alias
                aspernatur obcaecati dolor omnis adipisci porro doloremque
                pariatur vero at placeat ratione dicta esse perferendis eius?
                Consequuntur consequatur in accusantium inventore magnam minima
                unde neque fugiat placeat quae, repellendus ratione
                voluptatibus?
              </p>
              <ResizableDiv />
              <h2>Lorem ipsum dolor sit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem totam nisi animi quisquam soluta molestias maiores
                tenetur, cupiditate natus. Quae reiciendis dolores modi maiores
                eligendi ipsa odit dicta, similique repudiandae, nesciunt
                provident deserunt qui. Nisi labore modi debitis reprehenderit
                quae autem laborum asperiores, perferendis soluta cupiditate
                incidunt laboriosam distinctio magni neque ipsam eum animi
                consectetur dignissimos nostrum tenetur unde pariatur repellat
                quibusdam. Magni porro quibusdam accusantium ullam architecto
                nemo aperiam nostrum esse laudantium. Molestias tenetur libero a
                ut eveniet in tempore perferendis, sit voluptates facilis. Minus
                natus vero ut dolore, laboriosam ratione ipsa facilis sequi quae
                quo quas omnis! Eveniet incidunt nisi inventore a facere
                molestias minima at, mollitia doloribus saepe quaerat et,
                aliquid ab! Et, impedit dolorem necessitatibus saepe illum
                exercitationem magnam pariatur quis debitis ipsa obcaecati neque
                expedita repudiandae quia explicabo, nostrum nemo error quos,
                facilis eius. Odit impedit eum delectus reiciendis voluptatibus
                ipsa, consequatur itaque aut vero quae rem quis placeat nulla
                corrupti atque laborum dolores accusantium, obcaecati facilis
                maiores. Nemo voluptatibus adipisci quibusdam similique sunt,
                sed dolor? Placeat, deleniti autem, adipisci doloremque
                perspiciatis quos corrupti eius temporibus totam iste voluptas
                illo odit fugit cumque maxime dolore esse omnis excepturi
                assumenda distinctio, saepe nemo soluta! Quibusdam, enim.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae labore aspernatur quibusdam veritatis debitis
                eligendi totam aliquam molestiae soluta vero? Dolorem, sequi
                ipsum sed incidunt eaque atque animi veritatis, dolor commodi
                maiores ex. Architecto, repudiandae. Doloremque, quas corrupti
                nobis consequuntur rerum, dolore repudiandae placeat architecto
                numquam, a fugiat quis suscipit laborum cupiditate alias
                veritatis esse sit soluta? Consequatur, at tenetur. Vel nisi
                iure sint ab a laborum non molestias est cumque labore
                laboriosam minus, iste veritatis fugit provident asperiores eum
                dolore quaerat officia nemo corporis natus necessitatibus
                aspernatur beatae. Quam, dolor! Neque quisquam, qui vero
                repellat sapiente totam iure laboriosam consectetur non
                delectus! Magnam voluptas iusto, laboriosam ipsum nam quas
                voluptatibus labore id amet mollitia, tempora ipsa debitis
                dolore modi expedita consectetur repellendus deserunt
                temporibus! Rerum nulla repellendus quidem nihil eos maiores,
                officia facere atque laudantium vel. Consequuntur,
                exercitationem, cupiditate sunt nostrum optio aut magni laborum
                quisquam debitis hic quas nisi omnis molestias? Amet dicta nobis
                sapiente. Quasi, autem tempore rem facilis vel cupiditate hic
                nemo harum corrupti expedita accusamus, itaque ratione commodi.
                Et repellendus corporis ipsum. Quas sit id nihil facilis earum
                quam veritatis. Provident molestiae nostrum possimus cupiditate,
                officia at dolorum pariatur quasi praesentium. Maiores id
                corporis necessitatibus.
              </p>
            </HighlightPopMenu>
          </>
        }
      >
        <FragmentsColumn />
      </SideMenuResizable>
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
