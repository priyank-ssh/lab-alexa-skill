# Test your local Node.JS lambda function with lambda-local
# Install from https://www.npmjs.com/package/lambda-local

lambda-local -l ../src/index.js -h handler -e intents/LaunchRequest.js
# lambda-local -l ../src/index.js -h handler -e intents/AdmitSwearIntent.js
# lambda-local -l ../src/index.js -h handler -e intents/RecapIntent.js
# lambda-local -l ../src/index.js -h handler -e intents/StatsIntent.js

# lambda-local -l ../src/index.js -h handler -e events/help.js
# lambda-local -l ../src/index.js -h handler -e events/stop.js
