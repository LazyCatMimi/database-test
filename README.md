How to run both backend and frontend:
1. go to /backend
2. write `node index.js` in terminal

3. go to frontend
4. do `npm start` like usual

Todo for team
1. go to `/backend`
2. create `.env` file in `/backend` and paste mongo uri

How to Start coding:
1. Create a `somethingRoutes.js` (example name)  in `/routes` folder
2. in `somethingRoutes.js`, make a `somethingRoutes` function, write the routes, and export it (`export default somethingRoutes`)
3. import the new `somethingRoutes` routes function into `index.js` in the main backend folder
4. Use the new `somethingRoutes` function in `index.js` and pass app and client thru it: `exampleRoutes(app, client);`

front end:<br>
* useEffect & fetch() to get data, as seen in `/src/app.js`
* also import `BACKEND_ADDRESS` and use that address to fetch things

backend:<br>
* you will mostly be editing `index.js` and some more js files in `/routes` folder

other notes:
* you need to end the backend process and start it up again every time after you made a change. I'll figure how to make nodemon work so it will do it automatically a bit later! 

--------------------------------------------------------
Backend Installation notes<br>
backend todo
* `npm init -y`
* create `index.js`
* create `routes` files and folder 

backend install
* cors
* express
* mongodb
* nodemon





 