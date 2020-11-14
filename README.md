# social-media-graphql

## Description

This project was built just to practice GraphQL. The client is a CRA(create-react-app) application with Apollo. The server was built using Node js, Apollo Server and Mongo DB. 
This project uses CSS modules for the styling.

## Folder structure

    root
      ├── server
      │   └── src
      │       ├── api
      │       │    └── index.js
      │       ├── graphql
      │       │    ├── resolvers
      │       │    └── typeDefs.js
      │       └── utils
      │
      ├── client
      │   ├── public
      │   └── src
      │       ├── components
      │       ├── hooks
      │       ├── pages
      │       ├── constants
      │       ├── utils
      │       └── index.js
      │
      └── README.md

## Stack

### Server

    - Node JS
    - Apollo
    - Mongoose

### Frontend

    - React
    - CSS Modules

## How to start

### Clone

You can clone the repo using this url: https://github.com/Safro94/social-media-graphql.git

```
git clone https://github.com/Safro94/social-media-graphql.git
```

### Install dependencies

Go to the client folder

```
cd social-media-graphql/client
```

Run

```
npm install
```

Go to the server folder

```
cd social-media-graphql/server
```

Run

```
npm install
```

To run both projects at the same time, go to the server folder and run
```
npm run dev
```

the server should be running on http://localhost:5000 and the client http://localhost:3000
