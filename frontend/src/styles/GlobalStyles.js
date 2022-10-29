import { createGlobalStyle } from 'styled-components'
import { handleGlobalScheme } from './utilsGlobal'

const GlobalStyle = createGlobalStyle`
* {
  
  -webkit-tap-highlight-color: transparent;
  
}
html {
  font-size: 100%;
  height: 100%;
  box-sizing: border-box;
} 

body {
    position:relative;
    min-height: 100%;
    color: var(--background4-main);
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
    overflow-wrap: break-word;
    background: var(--background1-main);
      // font-family: 'Playfair Display', serif;
      // font-family: 'Atkinson Hyperlegible', sans-serif;
      font-family: 'Open Sans', sans-serif;
    // font-family: 'Quicksand', sans-serif; 
}

:root {
  --padding: 3rem;
 
  
  --background1-main: ${(props) =>
    handleGlobalScheme(props.globalScheme).background1Main} 
  --background2-main: ${(props) =>
    handleGlobalScheme(props.globalScheme).background2Main} 
  --background3-main: ${(props) =>
    handleGlobalScheme(props.globalScheme).background3Main} 
  --background4-main: ${(props) =>
    handleGlobalScheme(props.globalScheme).background4Main} 
  --background5-main: ${(props) =>
    handleGlobalScheme(props.globalScheme).background5Main} 
  

  --background-secondary1: ${(props) =>
    handleGlobalScheme(props.globalScheme).background1Secondary} 
  --background-secondary2: ${(props) =>
    handleGlobalScheme(props.globalScheme).background2Secondary} 
  --background-secondary3: ${(props) =>
    handleGlobalScheme(props.globalScheme).background3Secondary} 
  --background-secondary4: ${(props) =>
    handleGlobalScheme(props.globalScheme).background4Secondary} 
  --background-secondary5: ${(props) =>
    handleGlobalScheme(props.globalScheme).background5Secondary} 
  
  --background-tertiary1: ${(props) =>
    handleGlobalScheme(props.globalScheme).background1Tertiary}
  --background-tertiary2: ${(props) =>
    handleGlobalScheme(props.globalScheme).background2Tertiary}
  --background-tertiary3: ${(props) =>
    handleGlobalScheme(props.globalScheme).background3Tertiary}
  --background-tertiary4: ${(props) =>
    handleGlobalScheme(props.globalScheme).background4Tertiary}
  --background-tertiary5: ${(props) =>
    handleGlobalScheme(props.globalScheme).background5Tertiary}
  --background-tertiary6: ${(props) =>
    handleGlobalScheme(props.globalScheme).background6Tertiary}
  --background-tertiary7: ${(props) =>
    handleGlobalScheme(props.globalScheme).background7Tertiary}
  
  

    
  // --background-tertiary15:  rgba( 29, 53, 87, 0.4 );
  // --background-tertiary25: rgba(69, 123, 157, 1);
  
  --secondary1: #264653;
  --secondary2: #2a9d8f;
  --secondary3: #e9c46a;
  --secondary4: #f4a261; 
  --secondary5: #e76f51;
 
  --background-blur1: ${(props) =>
    handleGlobalScheme(props.globalScheme).backgroundBlur1}
  --background-blur2: ${(props) =>
    handleGlobalScheme(props.globalScheme).backgroundBlur2}
  // --background-blur11: rgba(60, 59, 61, 0.85);
  // --background-blur21: rgba(42, 157, 143, 0.75);



  --boxShadow1: ${(props) => handleGlobalScheme(props.globalScheme).boxShadow1}
  --boxShadow2: ${(props) => handleGlobalScheme(props.globalScheme).boxShadow2}
  --boxShadow3: ${(props) => handleGlobalScheme(props.globalScheme).boxShadow3}
  --boxShadow4: ${(props) => handleGlobalScheme(props.globalScheme).boxShadow4}
  --boxShadow5: ${(props) => handleGlobalScheme(props.globalScheme).boxShadow5}

  --boxShadowInset1: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowInset1}
  --boxShadowInset2: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowInset2}
  --boxShadowInset3: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowInset3}
  --boxShadowInset4: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowInset4}
  --boxShadowInset5: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowInset5}
  --boxShadowNone: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowNone}


  // --boxShadowNone: inset 0px 0px 0px #161617, inset 0px 0px 0px #262627, 0px 0px 0px #d2d1ce, 0px 0px 0px #fffffe;



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
   
       
  --orange1: #ca6702;
  --orange2: #ee9b00;
  --orange3: #fca311;

    --success1: ${(props) => handleGlobalScheme(props.globalScheme).success1}
   
    --success2: ${(props) => handleGlobalScheme(props.globalScheme).success2}

    --success3: #70e000;

    --warning1: ${(props) => handleGlobalScheme(props.globalScheme).warning1}

    --danger1: ${(props) => handleGlobalScheme(props.globalScheme).danger1}
    
    --background-blue1: #ADD7F6;
    --background-blue2: #87BFFF;
    --background-blue3: #3F8EFC;
    --background-blue4: #2667FF;
    --background-blue5: #3B28CC;
    --background-blue6: #086788;
    --background-blue7: #7EBDC2;
    
    //! variants for semitransparent elements
    --background-opaque1: ${(props) =>
      handleGlobalScheme(props.globalScheme).backgroundOpaque1}
    --background-opaque2: ${(props) =>
      handleGlobalScheme(props.globalScheme).backgroundOpaque2}
    // --background-opaque3: rgba( 109, 108, 112, 0.1 );
    // --background-opaque4: rgba( 114, 93, 93, 0.29 );
    // --background-opaque5: rgba(38, 70, 83, 0.9);
    // --background-opaque6: rgba(60, 59, 61, 0.25);
    // --background-opaque61: rgba(60, 59, 61, 0.35);
    // --background-opaque7: rgba( 70, 52, 185, 0.12 );
   
    
    // --background-neon1: #4634b9;
    // --background-neon2: #d76140;
    // --background-neon3: #ca34ae;
    // --background-neon4: #e5d758;
    // --background-neon5: #54bea8;
    // --background-neon6: #DB3EB1;
    // --background-neon7: #44D62C;
    // --background-neon8: #FFAD00;
    // --background-neon9: #E0E722;
    // --background-neon10: #4D4DFF;
    // --background-neon11: #C724B1;
    // --background-neon12: #D22730;
   
  

    --background-quaternary1: #1d3557;
    --background-quaternary2: #457b9d;
    --background-quaternary3: #a8dadc;
    --background-quaternary4: #f1faee;
    --background-quaternary5: #e63946;

   
    .nav_link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 1rem;
      color: var(--background4-main);
      width: 100%;
      // height: 16px;
      svg {
     
        font-size: 0.75rem;
        }
      @media screen and (max-width: 770px) {
        // font-size: 0.75rem;
        // svg{
        //   font-size: 0.75rem;
        // }
      }
    }
    .nav_link_desktop{
      color: var(--background4-main);
      display: flex; 
      gap: 1rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      color: var(--background4-main);
      width: 100%;
      // gap: 0.5rem;
      // height: fit-content;
      height: 26px;
   
    }
    .nav_link_desktop.activated {
      // color: var(--background5-main);
      color: var(--background-secondary1); 
    svg {
      color: var(--background-secondary1); 
    }
    }

    .nav_link.activated {
      color: var(--background-secondary1); 
      svg {
        color: var(--background-secondary1); 
      }  
    }
    .nav_link:hover  {
      color: var(--background5-main);
       transition: 0.2s; 
    
    }
    a, a:link, a:visited, a:hover {
      text-decoration: none;
    
    }
  .highlight{
    // color: var(--background-neon4);
    // color: var(--background-secondary2);
    // background: red;
  }
  .highlightQuery{
    border-radius: 4px;
    // background: var(--background3-main);
    // background: red;
    color: var(--background-secondary2);
  }
  mark {
    background-color: transparent;
    color: var(--background-secondary1) !important;
  } 
  .dateFormat{
    input{
      // display: grid;
      // place-items: center;
      max-width: fit-content;
    }
    border-radius: 4px;
    // color: var(--background4-main);
    background-color: var(--background2-main);
    border: 1px solid var(--background5-main);
    &:active{
      border: 1px solid var(--background2-main);
    }
  }
  .calendarFormat{
    background-color: var(--background2-main);
    color: var(--background4-main);
  }
 
  .highlightFrag0{
    // background-color: var(--background-blur1);
    color: var(--background-secondary1);
  }
  .highlightFrag1{ 
    // background-color: var(--background3-main);
    color: var(--background-secondary2);
  }
  .highlightFrag2{ 
    // background-color: var(--background3-main);
    color: var(--background-secondary3);
  }
  .highlightFrag3{ 
    // background-color: var(--background3-main);
    color: var(--background-tertiary1);
  }
  .highlightFrag4{
    // background-color: var(--background3-main);
    color: var(--background-tertiary2);
  }
  .highlightFrag5{
    // background-color: var(--background3-main);
    color: var(--background-tertiary3);
  }
  

}
::-webkit-scrollbar {
  width: 0.3em;
  // width: 0;
   
  
  
}

::-webkit-scrollbar-corner {
  // background: var(--background2-main);
  background: none;
}
::-webkit-scrollbar-thumb {
  // background: var(--background-secondary2);
  background: var(--background2-main);

  @media (max-width: 1020px) {
    // background: var(--background2-main);
   
  }
  border-radius: 2px;
  
}
::-webkit-scrollbar-track {

  border-radius: 2px;

  
}

// font-size: 1rem; //*it doesn't work at all

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  background: var(--background1-main) !important;
  border: 1px solid var(--background-blur2);
  box-shadow: var(--boxShadowInset1);
  -webkit-text-fill-color: var(--background4-main);
  
  transition: background-color 5000s !important;
  -webkit-text-fill-color: var(--background4-main) !important;
 


}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
 
}
//* gets rid of the X cancel button in search inputs, can't change the color or anyting else actually
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }


`

export { GlobalStyle }
