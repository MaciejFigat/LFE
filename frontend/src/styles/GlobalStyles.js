import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  
  -webkit-tap-highlight-color: transparent;
  
}
html {
  font-size: 100%;

} 

body {
  
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
    overflow-wrap: break-word;
    background: var(--background1-main);
      // font-family: 'Playfair Display', serif;
      // font-family: 'Atkinson Hyperlegible', sans-serif;
    
      font-family: 'Quicksand', sans-serif; 
}

:root {
  
   --padding: 3rem;
   
   --gradient1-main: linear-gradient(
    355deg,
    hsl(114deg 74% 17%) 0%,
    hsl(122deg 73% 23%) 4%,
    hsl(129deg 70% 29%) 7%,
    hsl(137deg 69% 35%) 11%,
    hsl(144deg 66% 41%) 14%,
    hsl(151deg 64% 47%) 16%,
    hsl(159deg 62% 53%) 18%,
    hsl(166deg 60% 59%) 20%,
    hsl(174deg 59% 65%) 23%,
    hsl(181deg 56% 71%) 26%,
    hsl(188deg 54% 77%) 38%
  );
  --gradient2-main: linear-gradient(to bottom, #a4dbe4, #69e6de, #45eeb9, #6af07b, #a8eb12);

   --background1-main: #1E1E1F;
   --background2-main: #3C3B3D;
   --background3-main: #6D6C70;
   --background4-main: #A2A1A6;
   --background5-main: #CBC9CF;

   --secondary1: #264653;
   --secondary2: #2a9d8f;
   --secondary3: #e9c46a;
   --secondary4: #f4a261;
   --secondary5: #e76f51;

   --redblue1: #e63946;
   --redblue2: #f1faee;
   --redblue3: #a8dadc;
   --redblue4: #457b9d;
   --redblue5: #1d3557;

   --bluegreen1:#A4DBE4;
   --bluegreen2:#FA990E;
   --bluegreen3:#FECC47;
   --bluegreen4:#5B8D27;
   --bluegreen5:#114B0B;
   --bluegreen6:#006AC3;
   --bluegreen7:#AD123F;
   --bluegreen8:#ECA0C1;
   --bluegreen9:#A3BF89;
   --bluegreen10:#00C2E1;
   --bluegreen11:#FE7BFF;
   
   
   --pink1: #f7a14e;
     
  --orange1: #ca6702;
  --orange2: #ee9b00;
  --orange3: #fca311;

    --success1: #A1F8B4;
    // --success1: #008000;
    --success2: #C8FB91;
    // --success2: #38b000;
    --success3: #70e000;

    --warning1: rgb(200, 50, 70);
    
    --background-blue1: #ADD7F6;
    --background-blue2: #87BFFF;
    --background-blue3: #3F8EFC;
    --background-blue4: #2667FF;
    --background-blue5: #3B28CC;
    --background-blue6: #086788;
    --background-blue7: #7EBDC2;
    
    //! variants for semitransparent elements
 
    --background-opaque1: rgba( 109, 108, 112, 0.1 );
    --background-opaque2: rgba( 29, 53, 87, 0.4 );
    --background-opaque3: rgba( 109, 108, 112, 0.1 );
    --background-opaque4: rgba( 114, 93, 93, 0.29 );
    --background-opaque5: rgba(38, 70, 83, 0.9);
    --background-opaque6: rgba(60, 59, 61, 0.25);
    --background-opaque61: rgba(60, 59, 61, 0.35);
    --background-opaque7: rgba( 70, 52, 185, 0.12 );
    
    
    --background-neon1: #4634b9;
    --background-neon2: #d76140;
    --background-neon3: #ca34ae;
    --background-neon4: #e5d758;
    --background-neon5: #54bea8;
    --background-neon6: #DB3EB1;
    --background-neon7: #44D62C;
    --background-neon8: #FFAD00;
    --background-neon9: #E0E722;
    --background-neon10: #4D4DFF;
    --background-neon11: #C724B1;
    --background-neon12: #D22730;
    

    --background-secondary1: #264653;
    --background-secondary15: rgba(38, 70, 83, 0.9);
    --background-secondary2: #2a9d8f;
    --background-secondary3: #e9c46a;
    --background-secondary4: #f4a261;
    --background-secondary5: #e76f51;
    
    --background-tertiary1: #1d3557;
    --background-tertiary15:  rgba( 29, 53, 87, 0.4 );
    --background-tertiary2: #457b9d;
    --background-tertiary25: rgba(69, 123, 157, 1);
    --background-tertiary3: #a8dadc;
    --background-tertiary4: #f1faee;
    --background-tertiary5: #e63946;

    --background-quaternary1: #1d3557;
    --background-quaternary2: #457b9d;
    --background-quaternary3: #a8dadc;
    --background-quaternary4: #f1faee;
    --background-quaternary5: #e63946;

   
    .nav_link {
      display: flex;
      // display: none;
    // opacity: 0;
    // background:red;
    // padding-left: 0.5rem;
    // max-width: fit-content;
      // align-items: center;
      // justify-content: center;
      // color: var(--background-secondary1)
  
      // display: grid;
      // place-items: center;
      //! todo this caused the :after not to appear in <1020px
    //   @media (max-width: 1020px) {
    //     background: -webkit-linear-gradient(
    //       180deg,
    //       // ? var(--background1-main),
    //       // ? var(--background1-main)
    //       var(--background5-main),
    //        var(--background5-main)
    //     );
    //     -webkit-background-clip: text;
    //     -webkit-text-fill-color: transparent;
    //  }
    
    }
    .nav_link.activated {
          
      // color: var(--background-secondary1);
      
     
      
    }
    .nav_link:hover  {
     
       color: var(--background-secondary2);
       transition: 0.2s; 
    
    }
    a, a:link, a:visited, a:hover {
      text-decoration: none;
      // display: flex;
      // max-width: fit-content;
     
      // align-items: center;
      // justify-content: center;
      svg {
        // color: var(--background5-main); 
        // color: transparent; 
    
      }
    }
  .highlight{
    background: pink;
    color: black;
  }
    
    
}
::-webkit-scrollbar {
  width: 0.5em;
  // width: 0;
   
  
  
}

::-webkit-scrollbar-corner {
  // background: var(--background2-main);
  background: none;
}
::-webkit-scrollbar-thumb {
  background: var(--background-secondary2);

  @media (max-width: 1020px) {
    // background: var(--background2-main);
   
  }
  border-radius: 2px;
  
}
::-webkit-scrollbar-track {

  border-radius: 2px;

  
}

`

export { GlobalStyle }
