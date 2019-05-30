# Scoreboard

An example of subscribing to websocket messages.

## Setup

- [Install the Elm Platform](https://online.pragmaticstudio.com/courses/integrating-elm/steps/2)

## Running the Application

1. Install required Node libraries:

	```
	npm install
	```

2. Install required Elm packages:

	```
	elm-package install
	```

3. Compile the Elm file to a JavaScript file:

	```
	elm-make Scoreboard.elm --output=scoreboard.js
	```

4. Start the WebSocket server that broadcasts scores every second:

	```
	node server.js
	```

5. Open `index.html` to run the Elm app

6. Alternatively, you can use `elm-live` to automatically compile and reload the app:

	```
	elm-live Scoreboard.elm --open --output=scoreboard.js
	```

	Then browse to `http://localhost:8000/`
	
