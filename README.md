# Delivery-API

## Mount local environment

### System requirements

- NPM 8.11.0
- MongoDB 6.0.1 Comunity

### Getting started

1. Clone the respository.

    ```shell
    git clone https://github.com/ArmandoTech/delivery-api.git
    cd delivery-api
    ```

2. Install all dependencies with NPM.

    ```shell
    npm install
    ```

3. Create .env file at respository root and add this params in it:
    ```shell
    PORT=
    MONGODB_URI=
    ```

4. Execute development server

    ```shell
    npm run dev
    ```

5. If application is working, you can see the message "Server running on port: ${PORT} 😎" on console.