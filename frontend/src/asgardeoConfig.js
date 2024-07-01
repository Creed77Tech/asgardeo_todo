// require('dotenv').config() 

const asgardeoConfig = {
    signInRedirectURL: "https://asgardeo-todo-gji2.vercel.app/",
    signOutRedirectURL: "https://asgardeo-todo-gji2.vercel.app/",
    clientID: process.env.REACT_APP_CLIENT_ID,
    baseUrl: process.env.REACT_APP_BASE_URL,
    scope: [ "openid","profile", "email" ],
    resourceServerURLs: ["https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/animetrix/movie-catalog-service/v1.0/categories", "https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/asgardeo-b2c-demo/accounts-management-api/endpoint-9090-803/v1.0/accounts"]
  };

export default asgardeoConfig;
