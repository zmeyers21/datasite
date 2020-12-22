# Datasite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Cloning repo and installing dependencies

 - Run the command `git clone https://github.com/zmeyers21/datasite.git` to get started
 - Run `npm i` to install the needed dependencies
 
## Navigating the application

 - To view the User Store, click on the `Users` tab on the nav bar
 - You should see a list of registered users on the left of the screen
 - You have the option to either remove a specific user, view the user details, or there is an `Add User` button on the bottom
 - The `Remove` button will simply remove the user from the store
 - `Details` should open the `User Details` panel to the right, where you can view the user details, or remove the user
 - Removing the user through the details panel should also propogate the update to the registered users list on the left
 - To add a user, simply click the `Add User` button on the bottom left. This should open the `Add User` panel on the left with a simple button labeled `Create Dummy User`
 - This button just generates a user with a random `Id` value, and adds it to the list on the left

## Development server

Run `ng serve` for a dev server, and navigate to `http://localhost:4200/`. Or, alternatively, run `npm run open` and a browser should open for you.

## Running unit tests

Run `npm run test-once` to execute the unit tests via [Karma](https://karma-runner.github.io).
