# keq-swagger-path

[![version](https://img.shields.io/npm/v/keq-swagger-path.svg?style=flat-square)](https://www.npmjs.com/package/keq-swagger-path)
[![downloads](https://img.shields.io/npm/dm/keq-swagger-path.svg?style=flat-square)](https://www.npmjs.com/package/keq-swagger-path)
[![license](https://img.shields.io/npm/l/keq-swagger-path.svg?style=flat-square)](https://www.npmjs.com/package/keq-swagger-path)
[![dependencies](https://img.shields.io/david/keq-request/keq-swagger-path.svg?style=flat-square)](https://www.npmjs.com/package/keq-swagger-path)
[![coveralls](https://img.shields.io/coveralls/github/keq-request/keq-swagger-path.svg?style=flat-square)](https://coveralls.io/github/keq-request/keq-swagger-path)



<!-- description -->
Convert swagger path to uri path.(eg. /user/{id} -> /user/:id)
<!-- description -->

## Usage

<!-- usage -->
```typescript
import { request } from 'keq'
import swaggerPath from 'keq-swagger-path'

request.use(swaggerPath())

// Will send request to 'www.example.com/user/1'
request
  .get('www.example.com/user/{id}')
  .params('id', 1)
  .end()
```
<!-- usage -->

<!-- addition --><!-- addition -->

## Sponsor

Support code development on patron.

[![patron](https://c5.patreon.com/external/logo/become_a_patron_button@2x.png)](https://www.patreon.com/bePatron?u=22478507)

## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
