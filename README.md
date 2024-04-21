# AWS SSL Profiles

[**AWS RDS**](https://aws.amazon.com/rds/) Certificates Bundles.

## Install

```bash
npm install --save aws-ssl-profiles
```

---

## Usage

### [node-mysql](https://github.com/mysqljs/mysql)

```js
const mysql = require('mysql');
const awsCaBundle = require('aws-ssl-profiles');

// mysql connection
const connection = mysql.createConnection({
  //...
  ssl: awsCaBundle,
});

// mysql connection pool
const pool = mysql.createPool({
  //...
  ssl: awsCaBundle,
});
```

### [node-mysql2](https://github.com/sidorares/node-mysql2)

```js
const mysql = require('mysql2');
const awsCaBundle = require('aws-ssl-profiles');

// mysql2 connection
const connection = mysql.createConnection({
  //...
  ssl: awsCaBundle,
});

// mysql2 connection pool
const pool = mysql.createPool({
  //...
  ssl: awsCaBundle,
});
```

### [node-postgres](https://github.com/brianc/node-postgres)

```js
const pg = require('pg');
const awsCaBundle = require('aws-ssl-profiles');

// node-postgres connection
const client = new pg.Client({
  // ...
  ssl: awsCaBundle,
});

// node-postgres connection pool
const pool = new pg.Pool({
  // ...
  ssl: awsCaBundle,
});
```

### Custom `ssl` options

Using **AWS SSL Profiles** with custom `ssl` options:

```js
{
  // ...
  ssl: {
    ...awsCaBundle,
    rejectUnauthorized: true,
    // ...
  }
}
```

```js
{
  // ...
  ssl: {
    ca: awsCaBundle.ca,
    rejectUnauthorized: true,
    // ...
  }
}
```

---

## License

**AWS SSL Profiles** is under the [**MIT License**](./LICENSE).

---

## Security

Please check the [**SECURITY.md**](./SECURITY.md).

---

## Contributing

Please check the [**CONTRIBUTING.md**](./CONTRIBUTING.md) for instructions.

---

## Acknowledgements

[**Contributors**.](https://github.com/mysqljs/aws-ssl-profiles/graphs/contributors)
