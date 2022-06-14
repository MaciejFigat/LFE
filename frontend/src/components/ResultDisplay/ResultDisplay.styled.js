import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  display: flex;
  background: var(--background2-main);
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  color: var(--background5-main);
  @media (max-width: 880px) {
    padding-top: 1rem;
  }
`

export const ArticleTitle = styled.h2`
  font-size: 3.4rem;
  line-height: 1.2;
  //todo
  color: var(--background5-main);
  letter-spacing: -0.075rem;
  text-align: center;
  width: 80%;
  margin: 0rem auto 0.5rem;
  font-weight: 800;

  color: var(--background3-main);
  @media (max-width: 880px) {
    font-size: 2.4rem;
    padding: 1.5rem;
    margin: 0;
  }
`
export const ArticleTopline = styled.h4`
  letter-spacing: 0.75px;
  margin: 1rem;
  margin-bottom: 2rem;
`
export const ArticleSection = styled.div`
  padding: var(--padding);
  padding-bottom: 0;
  font-size: 1.3rem;
  line-height: 1.9;
  @media (max-width: 880px) {
    padding: 1rem;
    padding-bottom: 0;
    /* margin-top: 1rem; */
  }
`
export const ArticleParagraph = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  padding: 1rem;
  padding-bottom: 0;
  font-weight: 500;
`
export const ArticleParagraphFragment = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  background: lime;
  padding: 1rem;
  padding-bottom: 0;
  font-weight: 500;
`
