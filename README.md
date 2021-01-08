# Steps to get started

1. Clone this repo

    ```url
    git clone https://github.com/mylo-james/dataflow.git && cd dataflow
    ```

2. Create a .env file **_in your backend_** and copy over the env-example file, make sure to input secret

    ```text
    PORT=5000
    DB_USERNAME=dataflow_dev
    DB_PASSWORD=password
    DB_DATABASE=dataflow
    DB_HOST=localhost
    JWT_SECRET=<<Insert Secret Here>>
    JWT_EXPIRES_IN=604800
    ```

3. Create a user in psql based off of the .env, give the user CREATEDB permissions

    ```bash
    psql && clear
    ```

    ```bash
    CREATE USER dataflow_dev WITH PASSWORD 'password' CREATEDB;
    ```

    ```bash
    \q
    ```

4. Split terminals to have 3 terminals

    Run in first terminal (make sure Postbird is closed)

    ```bash
    cd backend && npm install && npm run createDB && clear && npm start
    ```

    Run in third terminal

    ```bash
    cd frontend && npm install && npm start

    ```

5. Go to [the instructions](./instructions.md)
