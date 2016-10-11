# Serverless landingpage backend

Serverless service which gives you the ability to store E-Mail addresses.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-landingpage-backend` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-landingpage-backend`
3. Run `npm install`
4. Deploy with `serverless deploy`

## How to use

Simply perform a POST request against the exposed endpoint:

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/email --data '{ "address": "john.doe@example.com" }'
```

## AWS services used

- Lambda
- API Gateway
- DynamoDB
