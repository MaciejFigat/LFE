import styled from 'styled-components'

export const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
export const ArticleWrapper = styled.div`
  display: flex;
  max-width: 1080px;
  background: var(--background1-main);
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  color: var(--background4-main);

  @media (max-width: 880px) {
    padding-top: 1rem;
  }
`

export const ArticleTitle = styled.h2`
  font-size: 2.4rem;
  line-height: 1;
  color: var(--background4-main);
  letter-spacing: -0.075rem;
  text-align: center;
  width: 80%;
  margin: 0rem auto 0.5rem;
  font-weight: 800;
  @media (max-width: 880px) {
    font-size: 2rem;
    padding: 1.5rem;
    margin: 0;
  }
`
export const ArticleTopline = styled.h4`
  letter-spacing: 0.25px;
  font-size: 1.2rem;
  margin: 0.75rem;
`
export const ArticleSection = styled.div`
  padding: var(--padding);
  padding-bottom: 0;

  @media (max-width: 880px) {
    padding: 1rem;
    padding-bottom: 0;
  }
`
export const ArticleParagraph = styled.div`
  font-size: 1.3rem;
  line-height: 1.3;
  padding-top: 1rem;

  max-width: 47rem;
  font-weight: 500;

  text-align: left;
`
export const ArticleParagraphFragment = styled(ArticleParagraph)`
  color: var(--background-secondary3);
`
