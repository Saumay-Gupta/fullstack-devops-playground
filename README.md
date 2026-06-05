# Full Stack Deployment Playground

A simple full-stack application built to learn and practice modern deployment workflows using Docker, Nginx, and AWS EC2.

## Tech Stack

* React (Vite)
* Express.js
* MongoDB Atlas
* Docker
* Docker Compose
* Nginx
* AWS EC2

## Architecture

```text
Browser
   ↓
Nginx
 ├── Frontend (React)
 └── Backend (Express)
         ↓
    MongoDB Atlas
```

## Features

* Enter and submit a name
* Save data to MongoDB Atlas
* Dockerized frontend and backend
* Nginx reverse proxy configuration
* Deployed on AWS EC2

## Run Locally

```bash
docker compose up --build
```

Application will be available at:

```text
http://localhost
```

## Environment Variables

Create a `backend/.env` file:

```env
MONGO_DB=<your_mongodb_connection_string>
```

## Learning Objectives

This project was created to gain hands-on experience with:

* Docker & Docker Compose
* Nginx Reverse Proxy
* AWS EC2 Deployment
* MongoDB Atlas Integration
* Full-Stack Application Deployment

## Author

**Saumay Gupta**
