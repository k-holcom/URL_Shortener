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
| POST | /api/v1/url | {"url": "www.risingphoenixwd.com", "string": "phnx.wd/UqReIX"} |
