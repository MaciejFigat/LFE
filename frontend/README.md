## Structure - frontend
```
├── frontend
|  
|   ├── node_modules - installed packages
|   ├── public
│   │   ├── _redirects - route redirect for authentication api
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── src
│   │   ├── app - redux part of the app
│   │       ├── reduxHooks - reusable hooks - helps with TypeScript
│   │       ├── store - redux store
│   │   ├── components (some reusable components)
│   │   ├── features (redux, initial states for certain slices, async │   │       and synchronous actions)
│   │           ├──userSlice -                                          │   │              Governs app state for user actions. Includes async │   │              functions for auth, ie. fetching users, logging in, │   │              registering.
│   │   ├──hooks - reusable functions
│   │       ├──useRedirectListener - redirects to login when user is not │   │                                logged in
│   │       ├──useRedirectListenerLogged - similar redirect when user is │   │                                      logged in
│   │       ├──useScrollListener - listens for scrolling action
│   │ 
|   │   ├── screens - main views of the app, rendered in App.tsx
│   │   ├── animations (different variables for Framer Motion)
|   │   ├── styles -
|   │       ├── GlobalStyles - contains global variables like colors |   │               that are used throughout the app
|   │       ├── login.js - styling for login
|   │   ├── App.tsx
|   │   ├── index.tsx
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
├── README.md
```


### Styling roadmap
`styling for burger lines`

.burger - additional className to be responsive towards scroll events
in components/menu/Nav/nav.styled.js in TransitionWrapperMain

`styling menu navlinks`
in globalStyles and components/menu/Nav/nav.styled.js in TransitionWrapperMain

`styling header and nav svg icons - small`
components/SvgIcon/iconsSvg.styled.js

and components/menu/Nav/nav.styled.js in TransitionWrapperMain 


### `Structure explanation - Navigation`
├──FrontpageHeader (this header is rendered only in desktop view)
├──Nav.tsx (this component implements a custom hook that enables changing classess of certain components according to screen scrolling)
    ├── for example TransitionWrapper gets additional class active or hidden depending on direction of the scroll and the distance - it enables hiding and sliding it in view depending on scroll input
    also HeaderTitleDesktop is a title component that shows only when user is not at the top of the page ie. when header is out of the view
    ├──NavListDesktop- contains components that are only rendered in mobile view 

### `Styling assets - miscellaneous`  
    ├──utils.ts 
        ├──it exports a helper function that is a big switch statement which governs styling for different variant props for elements that require them ie. SectionCards
### `Styling InfoSection - miscellaneous v2`  
  ├──InfoSection 
        ├──InfoSection.styled.js - styles for the InfoSection
            ├──it uses handleSectionColor function which governs over its styles depending on the props passed through variant prop while rendering `<InfoSection/>` component, ie. variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
             ├──if you want to change styles for particular variants do so in the styles/utilsSection.ts 
        ├──InfoSection.styled.tsx - structure
            ├──it can receive variant props or it defaults to a regular one 
            ├──it expects certain data props ie.  topline: string, headline: string, subtitle: string,  img: any
            ├──buttonLabel ? it renders button : it does not (buttonLabel?: string)
             
            ├──if imgStart is present (imgStart?: boolean) img element at the start of the row if not it's at the end
 
  buttonLabel?: string

  
  
           

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### for development proxy in package.json in frontend is needed
"proxy": "http://127.0.0.1:5000",
proxy in frontend "proxy": "http://127.0.0.1:5000" in package.json, for making a request on 5000 port instead 3000 frontend is running on

### text highlight medium like 


### copy text to clipboard

navigator.clipboard.writeText 
writeText() - Writes text to the system clipboard, returning a Promise which is resolved once the text is fully copied into the clipboard.

<div class="tokenValue">Token Value to copy</div>
<button>Click</button>
const text =  document.getElementsByClassName(tokenValue)

button.addEventListener('click', event => {
 (async () => {
  await navigator.clipboard.writeText(text)
})()
})

### mvp highlight addon menu
1. npm install react-highlight-pop
2. import HighlightPop from 'react-highlight-pop'
    ├── I'll either need to write this one from the ground up or type it myself, for now its ts-ignored 
3. 

styling notes 

glassmorphed 

 background: rgba(60, 59, 61, 0.35);
  width: 120px;
  box-shadow: 0 8px 32px 0 rgba(60, 59, 61, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;


  AnimatedSavedItemWrapper - wraps simple view and editing view (AnimatedSavedItem) - passes the useState function to switch between them



  getResultsFiltered - thunk name for searchSkip

 
