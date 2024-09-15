# Next.js Dockerized App with CI/CD

![Docker Hub](https://img.shields.io/docker/pulls/user/app)  
![GitHub Registry](https://img.shields.io/badge/GHCR-available-blue)

This repository contains a **Next.js** application that is automatically built and pushed as a Docker image to **GitHub Container Registry (GHCR)** and **Docker Hub** via a GitHub Actions pipeline.

## Features

- **Next.js Application**: A server-side rendered React application framework optimized for both client-side and server-side rendering.
- **Multi-Stage Docker Build**: Optimized Dockerfile that separates the build and production phases, reducing the final image size and ensuring fast, reliable deployments.
- **Automated CI/CD Pipeline**: Automatically builds, tests, and pushes Docker images to Docker Hub and GHCR on every push to the `main` branch.
- **Multi-Tagging**: Images are tagged with both `latest` and commit-specific tags (e.g., `sha256`).

## How it Works

1. **Development**: Code is pushed to the repository.
2. **GitHub Actions Pipeline**:
   - Lints and runs tests on the application.
   - Builds the Docker image using a multi-stage build for production.
   - Pushes the image to both Docker Hub and GitHub Container Registry.
3. **Deployment**: The production-ready Docker image can be pulled and run in any containerized environment.

## Pull the Image

You can pull the latest image from Docker Hub or GHCR:

**From Docker Hub:**

```bash
docker pull mbabai/highstorm-next
```

**From GitHub Container Registry:**

```bash
docker pull ghcr.io/mohammedbabiker/highstorm-next:latest
```

## Running the Image Locally

To run the image locally, use the following command:

```bash
docker run -dp 3000:3000 ghcr.io/mohammedbabiker/highstorm-next:latest
```

This will start the application and expose it on `http://localhost:3000`.

## Environment Variables

Ensure you configure the necessary environment variables for production:

- `NEXT_PUBLIC_API_URL`: API endpoint for the application.
- `NODE_ENV`: Set to `production` in the Dockerfile to ensure the app runs in production mode.

## CI/CD Pipeline Details

- **Linting & Testing**: The pipeline first ensures code quality by running ESLint and the test suite.
- **Docker Build**: The Docker image is built using a multi-stage build, optimized for production use.
- **Pushing**: The image is automatically pushed to Docker Hub and GitHub Container Registry with multiple tags (e.g., `latest`, commit-specific SHA).

## Contributions

Feel free to fork this repository and contribute. Pull requests are welcome!
