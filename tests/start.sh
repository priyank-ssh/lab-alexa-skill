# Test your local Node.JS lambda function with lambda-local
# npm install -g lambda-local

lambda-local -l ../src/index.js -h handler -e intents/LaunchRequest.js
lambda-local -l ../src/index.js -h handler -e intents/ProtectiveGearLookupIntent.js
lambda-local -l ../src/index.js -h handler -e intents/PropertyLookupIntent.js
lambda-local -l ../src/index.js -h handler -e intents/HazardLookupIntent.js
lambda-local -l ../src/index.js -h handler -e intents/AddProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/AddTwoProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/AddDupProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/RemoveProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/ListProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/ListNullProductIntent.js
lambda-local -l ../src/index.js -h handler -e intents/YesIntent.js

# lambda-local -l ../src/index.js -h handler -e events/help.js
# lambda-local -l ../src/index.js -h handler -e events/stop.js
