# **NYC JOB PORTAL**

This web application is server side rendered and built with Preact X, React, Redux, Webpack, Prettier, Eslint, Babel, and Express. 

## **Installation**

Clone the repo locally
`git clone https://github.com/bklynate/nycjobportal.git` for https or `git clone git@github.com:bklynate/nycjobportal.git` for SSH

Ensure that `mongodb` is installed locally and started (macOs with homebrew):

`cd nycjobportal` and run `npm i`

```
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community
```

## **.ENV and Keys Setup**

##### Important Links:
[NYC Open Data: NYC Jobs Data Set](https://data.cityofnewyork.us/City-Government/NYC-Jobs/kpav-sd4t)
[Socrata Authentication](https://dev.socrata.com/docs/authentication.html)
[Socrata API Endpoints](https://dev.socrata.com/docs/endpoints.html)
[Google Developer Console](https://console.developers.google.com/)

To run locally, you'll need to setup API Keys for Google OAuth2 and NYC OpenData. Run the command `cp .env.example .env`. You should have a `.env` file in the root of your project with these values:

```
  GOOGLE_CLIENT_ID='<Your GOOGLE_CLIENT_ID>'
  GOOGLE_CLIENT_SECRET='<Your GOOGLE_CLIENT_SECRET>'
  COOKIE_KEY='<Your Cookie Key>' (Cookie Session Key Here)
  MONGODB_URI='mongodb:your_local_db'
  APIKEY='123' (NYCOpen Data Key Here)
  baseURL='http://localhost:5000'
```

Update the example env values with your own.

_For more information on generating Google API keys follow the following guide_: [Using OAuth 2.0 to Access Google APIs](https://support.google.com/googleapi/answer/6158849?hl=en&ref_topic=7013279)

## **Build Scripts**

### **After securing all of the necessary API keys**

Build a **dev** version of the application by running either:
- `npm run dev`
 **or**
- `npm run build:client:dev:watch` `npm run build:server:dev:watch` and  `npm run dev-server` **in 3 separate terminal shells** for a reactive dev experience. _(Due to the npm package @loadable-components, which I am using for code splitting, not supporting hot module reloading this was the next best thing I could come up with at the time)_


####  **BEFORE BUILDING A PRODUCTION BUILD LOCALLY**
Inside `config/webpack.server.js` you will need to uncomment the following lines:
``` 
// const Dotenv = require('dotenv-webpack');
... 
plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new Dotenv(),
]
```
Build a **production** version of the application by running `npm run prod`.

#### _**Don't forget to re-comment out those lines if you fork and decide to deploy this application to Heroku.**_

## **Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)
