# cnblogs

https://cnblogs.xgqfrms.xyz

https://cnblogs.xgqfrms.xyz/public/index.html

cnblogs backup: in case of lost posts form it again!


## Gatsby

```sh
$ npm i -g gatsby-cli

$ npm init gatsby
# or
$ gatsby new


$ cd websites

$ npm run develop
# http://localhost:8000

```

https://www.gatsbyjs.com/docs/quick-start/

https://www.gatsbyjs.com/docs/reference/gatsby-cli/

## env

https://support.gatsbyjs.com/hc/en-us/articles/360053096753-Managing-Environment-Variables-in-Gatsby-Cloud

```js
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}


```

## copy

```sh
$ cp -r ./website/public/* ./docs

```

```sh

$ chmod +x ./app.sh

```

## bug

```js

  "scripts": {
    "dev": "cd ./website && npm run start",
    "app": "cd ./website && npm run build",
    "copy": "cp -r ./website/public/* ./docs",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "dev": "./dev.sh",
    "app": "./app.sh",
    "copy": "./copy.sh",
    "deploy": "./deploy.sh"
  },

```

## dev

> symbol link bug

```sh
$ ./dev.sh

$ ./app.sh

$ ./copy.sh

```
