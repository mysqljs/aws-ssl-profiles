# AWS SSL Profiles

[**AWS RDS**](https://aws.amazon.com/rds/) Certificates Bundles.

## Install

```bash
npm install --save aws-ssl-profiles
```

---

## Usage

```js
const awsCaBundle = require('aws-ssl-profiles');

// mysql or mysql2 connection
const connection = mysql.createConnection({
  //...
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
