import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LayoutCards = styled.div`
  /* width: 100%; */
  width: 100%;
  /* height: 100%; */
  height: 500px;
  padding: 3rem;
  display: grid;
  /* grid-template-rows: 50px; */
  /* grid-auto-rows: 100px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-template-rows: repeat(2, 1fr);
  /* display: flex; */
  /* flex-direction: column; */
  gap: 1.5rem;
  background: #ff471a;

  .dim-layer {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: black;
    opacity: 0;
    pointer-events: none;
  }
  .opened-card {
    border-radius: 15px;
    cursor: pointer;
    height: calc(100% - 10rem);
    width: 40rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;

    div {
      background: white;
      height: 100%;
      width: 100%;
      margin: 0 1rem;
      border-radius: 15px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  .card {
    background: white;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:nth-child(1) {
      grid-column: 1 / span 2;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 3;
      grid-row: 1;
    }
    &:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
    }
    &:nth-child(4) {
      grid-column: 2 / span 2;
      grid-row: 2;
    }
  }
  .cards-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 33rem;
    max-width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
