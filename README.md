# Delivery-API

This repository contains the backend code for a food delivery application. This application has been developed for a development event organized by [programación en español Comunity](https://www.twitch.tv/programacion_en_esp)

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
   EMAIL_NODEMAILER=
   PASS_NODEMAILER=
   ```

4. Execute development server

   ```shell
   npm run dev
   ```

5. If application is working, you can see the message "Server running on port: ${PORT} 😎" on console.
