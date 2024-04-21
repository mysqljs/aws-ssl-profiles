# AWS SSL Profiles

[**AWS RDS**](https://aws.amazon.com/rds/) Certificates Bundles.

## Install

```bash
npm install --save aws-ssl-profiles
```

---

## Usage

### [node-mysql](https://github.com/mysqljs/mysql) and [node-mysql2](https://github.com/sidorares/node-mysql2)

```js
const awsCaBundle = require('aws-ssl-profiles');

// mysql or mysql2 connection
const connection = mysql.createConnection({
  //...
  ssl: awsCaBundle,
});

// mysql or mysql2 connection pool
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
