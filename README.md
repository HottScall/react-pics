<h1 align="center"> Pics App </h1>
<h3 align="center"> A search bar application which returns photos from an API </h3>

<h3 align="center"> Tech Stack </h3>
  <ul>
    <li>Language - Javascript</li>
    <li>Library - React</li>
    <li>API - Unsplash</li>
    <li>Css Framework - Bootstrap</li>
    <li>Linter - Eslint (in console)</li>
  </ul>
  
 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h3 align="center"> Learning Covered </h3>

Getting feedback from a User 
Fetching data from an API or server
Showing a list of records

Callback Event Handlers:

onClick - User clicks on something 
onChange - User changes text to an input 
onSubmit - User submits a form 

Flow of Controlled Element: 

User types input 
Callback gets invoked 
We call setState with the new value 
Component re-renders
Input is told what the value is (from state)

Ajax Requests 

React App -> Ajax Client —“send me pics of cars”—> Unsplash API —“here’s your car pictures”—> Ajax Client —> React App. 

Time Series Flow:

Component renders one time with no images 
onSearchSubmit method called
Request made to Unsplash
	*wait*
Request Complete 
Set image data on state of App component 
App component re-renders and shows images 


<h3 align="center">A two version implementation project</h3>

Version 1 - A user can type in a product (cars, bikes, plants etc) and the app will use an API to fetch photo’s of the specific search into a list of photo’s onto the app. 

Version 2 - The same application, but rather than returned as a list they will be tiled across the screen. Version 2 will be more on the styling and css side. 

<h3 align="center">Challenges</h3>

Needing to get a search term for the user
Making that search requests to make a request to an outside API and fetch data 
Take the fetched images and show them on the screen as a list 

<h3 align="center">Scripts</h3>


In the project directory, you can run:

npm start - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

npm test - Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

npm run build - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.  The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

npm run eject - **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.  Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.  Learn More - You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

Code Splitting - This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size - This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App - This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration - This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment - This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build - fails to minify. This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify 
