import { createGlobalStyle } from 'styled-components'
import { handleGlobalScheme } from './utilsGlobal'

const GlobalStyle = createGlobalStyle`
* {
  
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}
html {
  font-size: 100%;
  height: 100%;
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
    font-family: 'Open Sans', sans-serif;
 
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
  
  

  
  --secondary1: #264653;
  --secondary2: #2a9d8f;
  --secondary3: #e9c46a;
  --secondary4: #f4a261; 
  --secondary5: #e76f51;
  
 


  --background-blur1: ${(props) =>
    handleGlobalScheme(props.globalScheme).backgroundBlur1}
  --background-blur2: ${(props) =>
    handleGlobalScheme(props.globalScheme).backgroundBlur2}

    // * BACKGROUND GRADIENT 
  --background-gradient1: linear-gradient(
      120deg,
      var(--background-blur1) 0%,
      transparent 30%,
      transparent 70%,
      var(--background-blur1)
    );
  --background-gradient2: linear-gradient(
      120deg,
      var(--background-blur1) 0%,
      transparent 50%,
      transparent 80%,
      var(--background-blur1)
    );


  

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
  --boxShadowClay1: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowClay1}
  --boxShadowClay2: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowClay2}
  --boxShadowClay3: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowClay3}
  --boxShadowClay4: ${(props) =>
    handleGlobalScheme(props.globalScheme).boxShadowClay4}


  

  

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
    --warning2: ${(props) => handleGlobalScheme(props.globalScheme).warning1}

    --danger1: ${(props) => handleGlobalScheme(props.globalScheme).danger1}
    --danger2: ${(props) => handleGlobalScheme(props.globalScheme).danger1}
    
    --background-blue1: #ADD7F6;
    --background-blue2: #87BFFF;
    --background-blue3: #3F8EFC;
    --background-blue4: #2667FF;
    --background-blue5: #3B28CC;
    --background-blue6: #086788;
    --background-blue7: #7EBDC2;
    
    --border-radius0: 5px;
    --border-radius1: 10px;
    --border-radius2: 15px;
    --border-radius3: 20px;

    //! variants for semitransparent elements
    --background-opaque1: ${(props) =>
      handleGlobalScheme(props.globalScheme).backgroundOpaque1}
    --background-opaque2: ${(props) =>
      handleGlobalScheme(props.globalScheme).backgroundOpaque2}

  

    --background-quaternary1: #1d3557;
    --background-quaternary2: #457b9d;
    --background-quaternary3: #a8dadc;
    --background-quaternary4: #f1faee;
    --background-quaternary5: #e63946;

    --padding-verySmall: 6px 4px 6px 6px;
    --padding-small: 6px 6px 6px 8px;
    --padding-small-sides: 0px 6px 0px 10px;;
    --padding-medium: 8px 8px 8px 12px;
    --padding-medium-large: 12px 16px;
    --padding-big: 12px 12px 12px 20px;
    --padding-big-sides: 0px 12px 0px 20px;
    --padding-top-sides: 16px 16px 0px;
    
    
    --gap-verySmall: 4px;
    --gap-small: 6px;
    --gap-medium: 8px;
    --gap-big: 12px;
    --gap-big-14: 14px;
    --gap-veryBig: 16px;
    --gap-huge: 20px;
    
    --font-size-verySmall: 0.7rem;
    --font-size-small: 0.8rem;
    --font-size-small-plus: 0.85rem;
    --font-size-medium: 1rem;
    --font-size-medium-plus: 1.1rem;
    --font-size-big: 1.2rem;
    --font-size-bigger: 1.4rem;


   
    .nav_link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction:row;
      
      gap: 1rem;
      color: var(--background4-main);
      width: 100%;

      svg {
     
        font-size: 0.75rem;
        }
      @media screen and (max-width: 770px) {
     
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
      height: 26px;
   
    }
    .nav_link_desktop.activated {
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

  .highlightQuery{
    border-radius: 4px;
    color: var(--background-secondary2);
  }
  mark {
    background-color: transparent;
    color: var(--background-secondary1) !important;
  } 
  .dateFormat{
    input{
     max-width: fit-content;
    }
    border-radius: 4px;
    background-color: var(--background2-main);

  }
  .calendarFormat{
    background-color: var(--background2-main);
    color: var(--background4-main);
  }
 
  .highlightFrag0{
    color: var(--background-secondary1);
  }
  .highlightFrag1{ 
    color: var(--background-secondary2);
  }
  .highlightFrag2{ 
    color: var(--background-secondary3);
  }
  .highlightFrag3{ 
    color: var(--background-tertiary1);
  }
  .highlightFrag4{
    color: var(--background-tertiary2);
  }
  .highlightFrag5{
    color: var(--background-tertiary3);
  }
  

}
::-webkit-scrollbar {
  width: 0.3em;
  @media screen and (max-width: 1020px) {
          width: 0em;
  }
}

::-webkit-scrollbar-corner {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: var(--background-blur2);

  border-radius: 2px;
  
}
::-webkit-scrollbar-track {

  border-radius: 2px;

  
}


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
  -webkit-text-fill-color: var(--background4-main);
  
  transition: background-color 5000s !important;
  -webkit-text-fill-color: var(--background4-main) !important;
 


}

//* gets rid of the X cancel button in search inputs, can't change the color or anyting else actually
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }


`

export { GlobalStyle }
