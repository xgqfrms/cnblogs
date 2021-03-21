# cnblogs

https://cnblogs.xgqfrms.xyz

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