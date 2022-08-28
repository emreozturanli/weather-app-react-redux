# INSTRUCTIONS

### Below is the live demo link
[See the page](https://weather-app-react-redux.vercel.app/)

You can use 3dcce698f1438a6eb1e6c2f7e6644448  as the API Key.

<hr/>

Run below commands after downloading or cloning the repository to see how the app works with Docker.

Create a docker image by using the docker build command:
### `docker build -f Dockerfile.dev -t weather-app .`

Create a docker container by running:
### `docker run -d -it --rm -p 3000:3000 --name weather-app weather-app`

Verify whether the container has been created successfully by running:
### `docker container ps`

Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the dockerized react app.

<hr/>

Or run below code to install dependencies and run the react app.
### `npm install`
### `npm start`