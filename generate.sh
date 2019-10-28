#!/bin/bash -e

docker pull  openapitools/openapi-generator-cli

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i https://sensibo.github.io/sensibo.openapi.yaml \
  --config /local/generator-config.json \
  --skip-validate-spec \
  -g typescript-fetch \
  -o /local

