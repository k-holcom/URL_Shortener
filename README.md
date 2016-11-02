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

For the database to work, please create a .env file with the following information. NOTE: You will have to fill in the information that fits your information. This is currently being used on a mysql database with a default port of 3306.

    DB_NAME=
    DB_USER=
    DB_PASS=
    DB_HOST=
    DB_SCHEMA=mysql
    DB_PORT=3306

    DEBUG=false

##Endpoints
The Shortened URL is only shown by the part that would show up after phnx.wd/.

| METHOD | ENDPOINT | OUTPUT |
| :----: | :------: | :----: |
| POST(create) | /api/v1/url | {"url": "www.risingphoenixwd.com", "short": ia22aPd"} |
| GET | /api/v1/urls | {"id": 1, "url": "www.facebook.com", "short": umbfPO", "createdAt": "2016-10-26T19:37:09.000Z", "updatedAt": "2016-10-28T18:57:15.000Z"},{"id": 2, "url": "www.google.com", "short": QAtxn9", "createdAt": "2016-10-26T19:37:35.000Z", "updatedAt": "2016-10-26T19:37:35.000Z"},{"id": 4, "url": "www.risingphoenixwd.com", "short": ia22aP", "createdAt": "2016-10-28T19:01:09.000Z", "updatedAt": "2016-10-28T19:01:09.000Z"} |
| GET | /api/v1/urls/:id | {"id": 1, "url": "www.facebook.com", "short": umbfPO", "createdAt": "2016-10-26T19:37:09.000Z", "updatedAt": "2016-10-28T18:57:15.000Z"} |
| POST(update) | /api/v1/urls/:id | {"id": 1, "url": "www.facebook.com", "string": "UqReIX"} |
| DELETE | /api/v1/urls/:id |  |

##User Routes
| METHOD | ROUTE | OUTCOME |
| :----: | :------: | :----: |
| GET | /go/:short | Sends the user to the URL associated with it in the database. |

##Usage

In order to use the debugging feature, in your .env file, change the value of DEBUG=false to DEBUG=true. This will turn on debugging and output the console message to the console and not into the .log file.

When the debugging is turned off and the messages are output to a .log file, they should look like so:

    2016-11-02T17:51:03.385Z => Shortened URL for www.yahoo.com will be: phnx.wd/YnpIvI
    2016-11-02T17:53:13.800Z => Started Successfully!
    2016-11-02T17:53:29.524Z => Shortened URL for www.yahoo.com will be: phnx.wd/CiFbhi
    2016-11-02T17:53:29.540Z => Shortened URL Added
    2016-11-02T18:06:42.839Z => Shortened URL for www.testing.com will be: phnx.wd/4tfhww
    2016-11-02T18:06:42.846Z => Shortened URL Added

##Code-Styling
For this API, I try to follow the AirBnb style guide. This ensures that all files and users use the same code formatting. It also is a guide to help keep things in order and keep everyone on the same page.

For more information, please visit their github repository at https://github.com/airbnb/javascript.
