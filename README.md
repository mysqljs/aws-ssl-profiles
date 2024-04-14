# AWS SSL Profiles

AWS RDS Certificates Bundles

## Install

```bash
npm install aws-ssl-profiles
```

## Usage

```js
const awsCaBundle = require('aws-ssl-profiles');

// mysql or mysql2 connection
const connection = mysql.createConnection({
  //...
  ssl: awsCaBundle,
});
```
