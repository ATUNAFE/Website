# Setup Guide

## Clone the Git Repository

The first step is to clone the GitHub repository. Follow the instructions in [this guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) according to your operating system and GitHub setup.

## Dependencies

### Docker

Docker is required to run the project. Follow the appropriate installation instructions for your operating system:

- **Mac (macOS)**: [Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/#install-and-run-docker-desktop-on-mac)
- **Windows**: [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/#install-docker-desktop-on-windows)
- **Linux**: There are two installation options:
  - [Docker Engine](https://docs.docker.com/engine/install/#supported-platforms): Recommended if you prefer using the command line.
  - [Docker Desktop](https://docs.docker.com/desktop/install/linux-install/#generic-installation-steps): Recommended if you prefer a graphical interface.

## Running the Project

### Development Environment

Once all dependencies are installed, you can run the project in a development environment by opening a terminal in the project’s root directory (where the `Dockerfile` is located) and running the appropriate command:

- **Linux**
    ```bash
    bash run.sh
    ```

- **Windows/macOS**
    ```bash
    sh run.sh
    ```

After starting the application, open a browser and navigate to [localhost:8000](http://localhost:8000/) to view the website.
