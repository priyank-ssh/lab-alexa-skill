# Test your local Node.JS lambda function with lambda-local
# npm install -g lambda-local

lambda-local -l ../src/index.js -h handler -e intents/LaunchRequest.js
lambda-local -l ../src/index.js -h handler -e intents/ProtectiveGearLookupIntent.js
lambda-local -l ../src/index.js -h handler -e intents/PropertyLookupIntent.js
lambda-local -l ../src/index.js -h handler -e intents/ProtocolIntent.js
# lambda-local -l ../src/index.js -h handler -e intents/StatsIntent.js

# lambda-local -l ../src/index.js -h handler -e events/help.js
# lambda-local -l ../src/index.js -h handler -e events/stop.js
