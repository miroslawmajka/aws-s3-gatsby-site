# AWS S3 Gatsby Site

Simple Gatsby site that consumes the Apollo API from the https://github.com/miroslawmajka/aws-lambda-apollo-api repository.

## Setup

1. Setup the `.env` file:

```bash
cp template.env .env
```

2. Modify the `GATSBY_APOLLO_URL` variable to point to a deployed GraphQL API.

3. Install dependencies and run site locally:

```bash
npm install
npm start
```

## AWS Deployment

1. Run deployment to AWS:

```bash
npm run deploy
```

2. Navigate to the site at http://miroslawmajka-gatsby-site.s3-website-eu-west-1.amazonaws.com/.

3. Run clean up the AWS application stack run:

```bash
npm run remove
```
