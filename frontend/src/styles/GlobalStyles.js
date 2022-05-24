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
  
   --padding: 2rem;
   
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

    --background-secondary1: #264653;
    --background-secondary15: rgba(38, 70, 83, 0.9);
    --background-secondary2: #2a9d8f;
    --background-secondary3: #e9c46a;
    --background-secondary4: #f4a261;
    --background-secondary5: #e76f51;
    
    --background-tertiary1: #1d3557;
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
      align-items: center;
      @media (max-width: 1020px) {
        background: -webkit-linear-gradient(
          180deg,
          // ? var(--background1-main),
          // ? var(--background1-main)
          var(--background5-main),
           var(--background5-main)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
     }
    
    }
    .nav_link.activated {
          
      color: var(--background4-main);
      
     
      
    }
    .nav_link:hover  {
       color: var(--background4-main);
       transition: 0.3s; 
    
    }
    a, a:link, a:visited, a:hover {
      text-decoration: none;
     
    }
  
    
    
}
::-webkit-scrollbar {
  width: 0.5em;

    var(--background3-main),
   
  
  
}

::-webkit-scrollbar-thumb {
  background: var(--background1-main);
  @media (max-width: 1020px) {
    background: var(--background1-main);
   
  }
  border-radius: 2px;
  
}
::-webkit-scrollbar-track {

  border-radius: 2px;

  
}

`

export { GlobalStyle }
