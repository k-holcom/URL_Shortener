#URL_Shortener

##Installation
To install URL_Shortener, you must first clone the latest version of the API. To do this you must use the following:

    git clone https://github.com/k-holcom/URL_Shortener.git

After the code has been cloned onto your system, in the command terminal, use the following command:

    npm install

Finally, to start up the server, use the command:

    node ./src/server.js

If you would like, you may globally install nodemon so you do not have to keep manually restarting your server. To do this run:

    npm i -g nodemon

And once this has been installed, run the command:

    nodemon src/server.js

##Endpoints
| METHOD | ENDPOINT | OUTPUT |
| :----: | :------: | :----: |
| POST(create) | /api/v1/url | {"url": "www.risingphoenixwd.com", "string": "phnx.wd/UqReIX"} |
| GET | /api/v1/urls | {"id": 1, "url": "www.facebook.com", "short": "phnx.wd/umbfPO", "createdAt": "2016-10-26T19:37:09.000Z", "updatedAt": "2016-10-28T18:57:15.000Z"},{"id": 2, "url": "www.google.com", "short": "phnx.wd/QAtxn9", "createdAt": "2016-10-26T19:37:35.000Z", "updatedAt": "2016-10-26T19:37:35.000Z"},{"id": 4, "url": "www.risingphoenixwd.com", "short": "phnx.wd/ia22aP", "createdAt": "2016-10-28T19:01:09.000Z", "updatedAt": "2016-10-28T19:01:09.000Z"} |
| GET | /api/v1/urls/:id | {"id": 1, "url": "www.facebook.com", "short": "phnx.wd/umbfPO", "createdAt": "2016-10-26T19:37:09.000Z", "updatedAt": "2016-10-28T18:57:15.000Z"} |
| POST(update) | /api/v1/urls/:id | {"id": 1, "url": "www.facebook.com", "string": "phnx.wd/UqReIX"} |
| DELETE | /api/v1/urls/:id |  |
