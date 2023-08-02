# :white_square_button: ~~Square~~ Shikaku Tech repo! :white_square_button:

This repo is a MVP / prototype (_with a whole lot of assumptions_) of [Square's Staff website](https://squareup.com/us/en/staff?country_redirection=true). The goal is to showcase the connection between a Next JS 13.x app (using the app router), type safe models, and Contentful as a CMS.

Currently live at https://shikaku-tech.vercel.app/

## Tech stack

- Next JS 13, using the shiny new app router
- Contentful as CMS
- TypeScript with a handy script to generate types from Contentful
- CSS Modules for (uh) CSS
- Vercel for deployments

## Prerequisites

- Have a Contentful account setup with some content models and some content setup

## How to run it locally

- Create a `.env.local` that resembles the `.env.example` except with the actual values of the API keys from Contentful (created under Settings -> API Key). The `CONTENTFUL_PREVIEW_SECRET` key can be whatever you like and will only be used if you want to setup preview URLs.
- Run `npm i` to install all dependencies
- After having setup Content Models and Contents in Contentful, run `npm run types:contentful` to generate TypeScript types (those will be created at `/src/contentful/types`)
- Adjust the helper functions to fetch Contentful data based off your own Content Models (e.g. `blogPosts.ts` and `heroSection.ts`)
- Finally, run `npm run dev` and visit `localhost:3000`

## (Optional) Deployment: How to connect Contentful webhook with Vercel for auto-deployments

- In your project's Vercel page, go to Settings -> Git -> Deploy Hooks
- Create a new deploy hook and name it anything you'd like
- Copy the URL that has been generated
- In your Contentful space, go to Settings -> Webhooks
- Create a new webhook and paste Vercel's Deploy Hook URL into the URL field

## (Optional) Deployment: Connecting preview URLs with draftMode from Next JS

- In your Contentful space, go to Settings -> Content Preview
- Create a Preview Platform and link it with the desired Content Models
- In the Preview URL field, add the following URL:

`https://YOUR_DEPLOYED_APP_URL/api/draft?previewSecret=CONTENTFUL_PREVIEW_SECRET&redirect=DESIRED_PATH_FOR_REDIRECT`

For example, for the blog post preview of the deployed example of this repo it would be

`https://shikaku-tech.vercel.app/api/draft?previewSecret=CONTENTFUL_PREVIEW_SECRET&redirect=/blog/{entry.fields.slug}`, where `CONTENTFUL_PREVIEW_SECRET` is the same as the value in you `.env.local`.
