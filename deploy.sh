mkdir -p build
rm build/lambda.zip
cd src
zip -X -r ../build/lambda.zip *
cd ..
aws lambda update-function-code --function-name connected-lab-skill --zip-file fileb://build/lambda.zip
