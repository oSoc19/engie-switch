# Switch Backend
REST API written in [Node.js](https://nodejs.org/en/about/) using the [Express.js](https://expressjs.com/) server and [MongoDB](https://www.mongodb.com/) database.

External services used are:
- [mLab](https://mlab.com/) for MongoDB database hosting
- [Tinify](https://tinypng.com/developers) to crop image to the *interesting* part and compress to reduce size
- [Google API](https://cloud.google.com/products/ai/) to train machine learning model and make predictions based on it

## Config
Create `.env` file in the `switch_backend` folder with this content:
```sh
DB_URL="mongodb://user:password@server"
TINIFY_API_KEY="key_from_account"
JWT_SECRET="random_secret_for_sessions"
```

Set environment variable `GOOGLE_APPLICATION_CREDENTIALS` to user credentials json file:
```sh
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials.json"
```

In production, you should disable CORS to enforce security in `config.js`:
```js
CORS_ENABLED: false,
```

## First Steps

To install modules using npm:
```sh
npm install
```

You can then start your backend.
```sh
npm start
```

And access using your browser.
```
http://localhost:3000/
```

## Usage

Detailed information about how to use this API can be found in our [wiki](https://github.com/oSoc19/engie-switch/wiki/API-Documentation).

You can find more informations about what routes are doing in the [route folder](https://github.com/oSoc19/engie-switch/tree/master/switch_backend/src/routes).
