# previsto.js

This library is a small library for using the Previsto Api on public websites. It is designed to be tiny and without any dependencies. It also only exposes methods that are suitable for the public APIKey:
* Create Contact
* Create agreement
* Request 2 factor token
* Search addresses

## Rate Limiting
Please bear in mind that Previsto has a [limitation on requests made to the API](https://docs.previsto.com/help/api/introduction-to-api#request-limit) - especially by the Public ApiKey. When testing your integration you might hit this limitation if you are not carefull and in effect be blocked for er period of time.
