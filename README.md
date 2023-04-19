# docker-pilot
Docker-Pilot is a Docker-based solution for managing and deploying containerized applications. It provides you with a basic script that helps you create and run a Node Js. Server withing seconds.

## Installation
To get started with Docker-Pilot, follow these steps:
1. Clone the repository:
```
    $ git clone https://github.com/harsh-haria/docker-pilot.git
```


2. Change directory to the Docker-Pilot repository:
```
    $ cd docker-pilot
```


3. Build the Docker image:
```
    $ docker build -t docker-pilot .
```
This will build a Docker image for Docker-Pilot with the configured settings.


4. Run Docker-Pilot container:
```
    $ docker run -d -p 8080:8080 docker-pilot
```
This will start a Docker container running Docker-Pilot, exposing the web interface on port 8080.


5. Access Docker-Pilot web interface:
Open a web browser and navigate to ``` http://localhost:8080 ``` to access the Docker-Pilot web interface.


## License
Docker-Pilot is open source software released under the MIT License.


###### You can access Docker documentation [here](https://docs.docker.com/).