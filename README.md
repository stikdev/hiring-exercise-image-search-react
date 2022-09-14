## Task Preview

We’ll be taking 60-90 minutes to improve, fix, and style a UI prepared by one of our teammates. This is the React+TypeScript flavor of that UI. This is essentially a “search for images” UI that interacts with a public API, displays the search results, and displays your search history.

We’ve connected the UI entirely and will be asking you to show more than one page of results, apply a few CSS animations in the UI, and fix a bug.

We’ll be most interested in:
* Your ability to communicate with members of our team (some of whom don’t spend much time on the client-side of the codebase and maybe aren’t as familiar with more recent concepts like Flexbox or CSS Grid).
* Your thought process as we go through the exercise.
* The solutions we end up with.

The project will be given to you as a Git repository that you can run locally.

We know 60-90 minutes is a short amount of time, so we’ll see how far we can get. If we get through our three planned activities, that’s great. If we don’t, we’re confident you’ll be able to demonstrate your abilities within that amount of time. And of course, Google is allowed!

How’s that sound?!

## Getting Setup

1. Clone this repository
2. Install all dependencies
```
npm install
```
3. Start the development server
```
npm start
```
4. Navigate to [http://localhost:3000](http://localhost:3000) to get started.

More on development commands in "Developing this project" at the bottom of the README.
## The Task: The Search for Images!
Your assignment: The Search for Images!

*Note: We have three tasks specified. However, please feel free to add any UI or UX improvements if you feel so inspired.*

There are three UI elements on the screen (well, four if you count the cute wombat in the corner). The search bar makes calls to the Unsplash API to search for stock images. The results panel populates with the first page of results from the unsplash API. The search history displays a list of your past search terms. You may tackle these tasks in any order, and of course if you have any additional ideas on how to further improve the user experience and/or make the app more accessible, you are encouraged to do so!

- **Task 1:** We’ve gotten a couple bug reports surrounding the search history list that we’d like you to take a look at.
    * Bug report 1: If I double-click the search button, the search is repeated in the search history.
    * Bug report 2: I clicked the search button without typing anything into the input and now there’s a blank bullet point in the search history
- **Task 2:** More images!
    * Right now, we’re only able to load the first 10 images from a search, even if there may be more available. We’d really like to be able to see more!
    * Your job: Add a “Load more” button at the bottom of the list of images which, when clicked, will load an additional page of 10 images that are appended to the existing list.
    * The Unsplash API documentation exists here: [https://unsplash.com/documentation#search-photos](https://unsplash.com/documentation#search-photos)
    * Now that we have more images to look at, try making the search results display as a 2-column grid instead of as a single-column list.
- **Task 3:** Add some pizzazz
    * We’d like to have the Wombat scale up a little bit when you hover over it. Please add this functionality (and any other pizazz you would like).
    * In fact, here’s one more pizazz thing. Could you also add a drop shadow (of the color #663399) on hover as well?
## Developing this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
