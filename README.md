# Tic Tac Game

## Introduction
This is a tic-tac game, implemented to practice REACT fundamentals.





## Components:
I will implement these components to build this program:
1. Box: this is a component, which we will have nine of that in the game. It could have a state with three possible values:
    X, O, or null. 
    Every click on this component will change the state. According to the which player turn is, the state will change between null and X or null and O.
    if a state is specified to this component, before, the state value will not change by clicking on it.
2. Header: It is a static component, which is just for demonstrating the title of the app. It will have a color flash when the game is started and finished.
3. Footer: It is a static component, which is just for demonstrating the programmer of the app. It will have a color flash when the game is started and finished.
4. RestartButton: This button will refresh the page on click.
5. App: which is the general component, wrapping all others. The general states are included in this component: currentPlayer, Players: There are two of this states for every player. This states will contain player name, score, sign, and color.




## Main Functionalities
1. Clicking Boxes:
    when user click a box, its onClick event will be triggered. The according to its current state, the click could be:
    <ul>
        <li>igonred</li>
        <li>lead to an X or O state</li>
        <li>the whoseTurn useState will be switched </li>
    </ul>
2. Every time a box is cliked after updating the whoseTurn and currentState of the box, the winner check must be done.





## Usestates:
1. whoseTurn: this useState saves if it is player I or player II turn. it will have any of these two values: "I" or "II". This will be defined in App component. 
2. currentState: this useState saves the status of each box. it could be "I", "II", or "none". it will be declared in Box component.
3. plyaerIScore and playerIIScore save the score of each player
4. gameCount, save the number of games played.
5. gameReset is a trigger state which is used to reset the boxes whenever user click Reset button
6. boxStates is in BoxSet component, and saves the currentState of all boxes
7. winner saves the winner player. during the game its value is null.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
