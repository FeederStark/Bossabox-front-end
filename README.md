This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

First, you will need to clone/download this [api](https://gitlab.com/bossabox/challenge-fake-api/tree/master).
Then, you must run `npm install` and `npx json-server db.json`. The api will be running on `http://localhost:3000`.

## Starting app

Clone/download this repository and run `yarn install`.
After running your api on port 3000 you run `yarn start`.

## Functionalities

This is a simple one-page-application to manage tools with their respective names, links, descriptions and tags.
First, the api will fetch the data from the api and show them in cards, and you can either add a new tool, remove, navigate to the tool's link or tools by specific title/tags.

### Add new tool

To add a new tool all you need to do is to click in the Add button and a modal will prompt.
Then, you type the info and click add Tool. To cancel your action you can just click outside the modal and it will close.

### Removing a tool

To remove a tool you have to click the 'X remove' button on the upper right corner of the card and a modal will prompt.
Then, you must confirm your action clicking in the 'Yes, remove' button. To cancel your action you can either click outside the modal or in the 'Cancel' button to close the modal.

### Fetching data

All the tools will be fetched when you start the application, but if you want to look for tools in particular you can just type their title/tags in the search field and you will be dinamically fetching only these tools.
If you mark the 'search in tags only' input you will only be matching your search by the tags.

## Tools used

This is a list of the tools used to make this application and their reason.

- styled-components. This is used to style most of the application components.
- prop-types. Way of making runtime assertions about what type of data a React component requires in order to render properly.
- axios. We use axios to make the api calls.
- react-modal. Way of creating the modals.
- redux and react-redux. To use a global store and make the flux of data flow better.
- redux-saga. To make asynchronous calls.
- eslint. Eslint is used to make the code have a solid pattern.
- editorconfig. Editorconfig also helps with having a solid pattern between the devs.
- react-toastify. This is used to prompt successfull/error messages to the user after inserting/removing data.
