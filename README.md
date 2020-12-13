# Todo App

<img src="./screenshots/desktop.png" style="height:500px"/>
<img src="./screenshots/add-todo-modal.png" style="height:150px"/>
<img src="./screenshots/mobile.png" style="height:300px"/>


## Features
- Use Flex layout to implement responsive for mobile and desktop,;
- Use Scss for styling;
- Use React-Calendar for calendar, React-Bootstrap for modals and forms, React-Icons for icons;
- Use Redux store to state management;
- Use Axios to handle HTTP requests;
- Use json-server to server a mock API;
- Mock API offers:
  - GET Todo list
  - GET Todo status list : Todo/Completed/Postponed/Undone
  - GET Todo category list : Work/Love/Other/Entertainment/Life
  - POST todo
  - PUT todo
  - Delete todo
- Integrate with [https://openweathermap.org/](https://openweathermap.org/) API to display current weather on your location;

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode <b style="color:green;">with</b> mock API.<br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.<br />
The app will consume the mock API at [http://localhost:3000](http://localhost:3000)<br />



### `npm start`

Runs the app in the development mode <b style="color:red;">without</b> mock API.<br />
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

