## Husky + prettier + eslint 
**Steps to follow**

 1. make any working directory xyz and `cd xyz`
 2. Now initialise git repository using `git init`
 3. Install prettier `npm install --save-dev --save-exact prettier`
 4. Install husky and lint-staged using `npx mrm lint-staged`
 5. Install Eslint
	- Install eslint package globally from NPM using command 
	`npm install -g eslint`
	- To initialize eslint run command 
	`eslint -- --init`
	- now follow the step
	    - To check syntax, find problems, and enforce code style
	    - CommonJS (require/exports)
	    - None of these 
	    - Typescript No
	    - Node
	    - Use a popular style guide
	    - Javascript
	    - Airbnb: https://github.com/airbnb/javascript 
	- make sure that  your local eslint package version match to global one
  
  add the following line on your package.json if present ignore
  	
    "lint-staged": {
		"*.{js,css,md}": [
			"prettier --write",
			"eslint --fix"
			]
		}
adjust the order of prettier and eslint acc. to your need 


     

 
 

 
