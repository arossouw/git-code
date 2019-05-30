# Sand Calculator

An example demonstrating the basics of embedding an Elm app in a larger application.

## Setup

- [Install the Elm Platform](https://online.pragmaticstudio.com/courses/integrating-elm/steps/2)

## Running the Application

1. Install required packages:

	```
	elm-package install
	```

2. Compile the Elm file to a JavaScript file:

	```
	elm-make SandCalculator.elm --output=calculator.js
	```

3. Open `index.html`

4. Alternatively, you can use `elm-live` to automatically compile and reload the app:

	```
	elm-live SandCalculator.elm --output=calculator.js
	```

	Then browse to `http://localhost:8000/`
	
