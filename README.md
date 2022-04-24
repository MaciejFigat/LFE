## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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
