rm -f lambda.zip
zip -j lambda.zip src/*
chmod 644 lambda.zip

aws lambda update-function-code --function-name mconnected-lab-skill --zip-file fileb://lambda.zip