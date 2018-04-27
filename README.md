# Dead Presidents

**MongoDB and IBM Watson**
In order to access MongoDB and IBM Watson you will need to configure the config/token.js file with this structure:

`{  
  creds: {  
    mongodb: {  
      host: 'localhost',  
      port: '27017',  
      db: 'dead-presidents'  
    },  
    ibm: {  
      username: 'your_username',  
      password: 'your_password'  
    }  
  }  
}`

**setup**: `npm install`
