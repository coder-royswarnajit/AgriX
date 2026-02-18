# Agri X - Digital Farmer Portal

Agri X - Digital farmer portal using MERN stack

### Tech Stack

## Features of Agri X

Digital profile of farmers: Every farmer can register their self on Agri X after that they get a unique farmer id. Farmer id help farmers to get all information of them like farm information, eligible schemes, scheme application history, billing history, loan history, insurance history.

1. We verify the farmer using adhar card and mobile otp system.
2. We give a unique ID(Farmer ID) to every farmer that is registered.Every farmer gets a SMS with their farmer id when they register.
3. Every farmer gets a notification when a new scheme is applied by the Admin on their whatsapp.
4. We have a crop recommendation system for farmer.
5. We have a disease detection system for farmer based on leaves.
6. We have a chatbot system for farmer.
7. We have a billing system for farmer,Admin and trader.
8. We have a APMC system for Admin.
9. We have a land management system for Admin.
10. We have a scheme management system for Admin.
11. We have a dashboard for Admin.
12. We have a expert talk system for farmer.

### Dependencies

- [Axios](https://axios-http.com/) for HTTP requests.
- [React](https://react.dev/) for building user interfaces.
- [Node.js](https://nodejs.org/) for server-side runtime.
- [Express](https://expressjs.com/) for server framework.
- [MongoDB](https://www.mongodb.com/) for database.
- [Socket.io](https://socket.io/) for real-time communication.
- [Twilio](https://www.twilio.com/) for SMS services.
- [Firebase](https://firebase.google.com/) for authentication.

## 🛠️ Installation Steps

1. Clone the repository

```sh
git clone https://github.com/coder-royswarnajit/AgriX
cd AgriX
```

1. Install dependencies

```sh
cd client
npm install
```

For server setup, you need to add your MongoDB database URL to .env file.

```sh
cd server
npm install
```

1. Run the application

```sh
# Run Client
cd client
npm start

# Run Server
cd server
npm start
```

## 📸 Screenshots

### Interface design of farmer portal

#### Farmer's registration form

![FRF](https://user-images.githubusercontent.com/83646676/227986741-f460e2a3-27ec-4a75-96f3-de0b5e4babd3.png)

#### Farmer's profile page

![FPP](https://user-images.githubusercontent.com/83646676/227987187-29cc2ca0-8526-45dd-bb5e-085bd5932287.png)

#### APMC pricing

![APMC](https://user-images.githubusercontent.com/83646676/227987902-e30ed926-316c-4a10-90c5-65f7f5bbd97c.png)

#### Dashboard to analysis category wise registered farmers

![dacwrf](https://user-images.githubusercontent.com/83646676/227988066-48f01abe-9ddc-4ad9-8c24-87fbfd22fc5d.png)

#### Find farmer functionality

![FFf](https://user-images.githubusercontent.com/83646676/227988262-3f58415e-3628-4559-8146-cea0f4eeee58.png)

#### Analysis dashboard for particular scheme

![adfps](https://user-images.githubusercontent.com/83646676/227989156-eaf1e61a-bb40-4dbf-9590-ac39c10ce2b7.png)

#### District wise soil analysis

![DWSA](https://user-images.githubusercontent.com/83646676/227989307-62233f61-dea6-4766-baa7-902c2d74a4c2.png)

#### Trader side digital bill generator

![TSDBG](https://user-images.githubusercontent.com/83646676/227990534-78b3f3ce-5795-4f1b-a3c9-02c9de0826b7.png)
