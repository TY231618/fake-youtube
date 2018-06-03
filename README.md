# Fake YouTube App

A basic React app to display videos to a user given some search criteria using the YouTube api

## Quick Start Guide

The repository is written in [React](https://reactjs.org/) and [NPM](https://www.npmjs.com/) as the package manager.

**To start the app:**
- To install dependencies, run: `npm install`
- To run: `npm run start` (by default this starts on [localhost:8081](localhost:8081))

## Vision

My first React app, I just wanted to get used to creating components and having nested components to pass data to via props.  My vision was to create a simple version of YouTube where usesrs could type in some search criteria and on submit that data would be used to pull some videos from the api and then pass that data through a videoList component to a videoDetail component.

## What I learnt

* How to set up a simple React app
* Basic styling with [Materialize Css](https://materializecss.com/)
* Creating simple components and smart components
* Passing data via props
* Creating some search functionality and passing that data to the YouTube api
* Using [Lodash](https://lodash.com/) to debounce the search functionality as the search was updating on every key input
