import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: end center;
  overflow: hidden;
  position: relative;
  background: #5f4a8b;
  .home-bar {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 1.2rem;
    z-index: 30;
    &__icons {
      display: flex;
      i:first-of-type {
        padding-right: 0.8rem;
      }
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 330px;
    place-items: center center;
    margin-bottom: 2rem;
    padding: 1rem;
    gap: 1.5rem;
    background: rgba($color: #000, $alpha: 0.1);
    border-radius: 15px;
  }
  .app-icon {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__bg {
      height: 5rem;
      /* width: 5rem; */
      width: 100%;
      border-radius: 8px;
      display: grid;
      place-items: center center;
      cursor: pointer;
      background: #e69a8d;
    }
    &__name {
      margin-top: 0.5rem;
      color: white;
      font-size: 1.1rem;
    }
  }

  .app-opened {
    height: 100%;
    width: 100%;
    position: absolute;
    padding: 3rem;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 8px;
    background: #e69a8d;
    .content-wrapper {
      height: 100%;
    }
  }

  .close-bar {
    width: 35%;
    height: 3px;
    border-radius: 100px;
    position: absolute;
    top: 97.5%;
    z-index: 20;
    background: #272727;
  }
`
