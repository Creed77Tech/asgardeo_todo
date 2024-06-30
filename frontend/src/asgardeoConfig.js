const asgardeoConfig = {
    signInRedirectURL: "http://localhost:3000/",
    signOutRedirectURL: "http://localhost:3000/",
    clientID: "01nazvj522A7Ibb5Rk2NOOeSZmYa",
    baseUrl: "https://api.asgardeo.io/t/orgxg87f",
    scope: [ "openid","profile", "email" ],
    resourceServerURLs: ["https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/animetrix/movie-catalog-service/v1.0/categories", "https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/asgardeo-b2c-demo/accounts-management-api/endpoint-9090-803/v1.0/accounts"]
  };

export default asgardeoConfig;