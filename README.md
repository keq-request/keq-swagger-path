# keq-url-template

[![version](https://img.shields.io/npm/v/keq-url-template.svg?style=flat-square)](https://www.npmjs.com/package/keq-url-template)
[![downloads](https://img.shields.io/npm/dm/keq-url-template.svg?style=flat-square)](https://www.npmjs.com/package/keq-url-template)
[![license](https://img.shields.io/npm/l/keq-url-template.svg?style=flat-square)](https://www.npmjs.com/package/keq-url-template)
[![dependencies](https://img.shields.io/david/keq-request/keq-swagger-path.svg?style=flat-square)](https://www.npmjs.com/package/keq-url-template)
[![coveralls](https://img.shields.io/coveralls/github/keq-request/keq-swagger-path.svg?style=flat-square)](https://coveralls.io/github/keq-request/keq-swagger-path)



<!-- description -->
Convert swagger path to uri path.(eg. /user/{id} -> /user/:id),
according to the [RFC 6570 URI Template](https://datatracker.ietf.org/doc/rfc6570/)
<!-- description -->

## Usage

<!-- usage -->
```typescript
import { request } from 'keq'
import urlTemplate from 'keq-url-template'

request.use(urlTemplate())

// Will send request to 'www.example.com/user/1'
request
  .get('www.example.com/user/{id}')
  .params('id', 1)
  .end()
```
<!-- usage -->

<!-- addition -->
## Sponsor

Support code development on patron.

[![patron](https://c5.patreon.com/external/logo/become_a_patron_button@2x.png)](https://www.patreon.com/bePatron?u=22478507)
<!-- addition -->


## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
