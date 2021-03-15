# Locale Finder for AWS Lambda & API Gateway

## Summary

This project is a super small and lightweight codebase that serves one purpose, to find the user's location by pinging the server.
It works by taking the IP address from the request and querying it against a large, open-source & free database. From there it returns detailed location data.
For this app I'm only returning a small JSON object which just contains the user's country code. However more data could be returned.

## Setup

1. Clone repo and run `npm i`
1. ZIP the repo foler and upload it to AWS Lambda via CLI or web console.
2. Connect a HTTP API to the Lambda function from AWS API Gateway.

Using AWS Lambda and an HTTP API from API Gateway will provide a low cost, fast and scalable solution.
The HTTP API also returns the user's IP in a specific way, which this code is setup to process.
