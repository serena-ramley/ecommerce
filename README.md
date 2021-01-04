<img src="https://github.com/serena-ramley/ecommerce/blob/master/app-preview.png" width="1000px" />


## Notable Features

#### 1. Locally sourced images

      (see src/components/directory/directory.component.jsx and src/components/menu-item/menu-item.component.jsx)
#### 2. Styling with scss for organized subcategory styling

      (see src/components/menu-item/menu-item.styles.scss)
#### 3. Routing with React-Router-Dom to achieve browser navigation as a Single-Page-Application

      (see App.js)
#### 4. Using Switch to render only one component at a time

      (see App.js)
#### 5. Hover "grow" effects without overflow

      (see src/components/menu-item/menu-item.styles.scss)
#### 6. withRouter, onClick and the use of "match" from props to navigate pages 

      (see src/components/directory/directory.component.jsx and src/components/menu-item/menu-item.component.jsx)
#### 7. svg Logo import

      (see src/components/header/header.component.jsx)

#### 8. Removed default text decoration from Links

      (see App.css)

#### 9. Form handles

      (see src/components/sign-in/sign-in.component.jsx)

#### 10. Firebase Authentication

      (see src/components/sign-in/sign-in.component.jsx,  src/components/sign-up/sign-up.component.jsx and src/firebase/firebase.utils.js)

#### 11. Ternerary Operator

      (see src\components\header\header.component.jsx)

#### 12. Redux

      (see src\redux\root-reducer, src\redux\cart and src\components\cart-icon\cart-icon.component.jsx for variables that can't be passed in a parent-child component relationship as several components access these variables)

#### 11. Redux Connect and mapDispatchToProps

      (see src\components\cart-icon\cart-icon.component.jsx - this style is replaced with Hooks in projects using React v16+)

#### 11. Redux Actions with a type and payload

      (see src\redux\cart\cart.actions.js)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
