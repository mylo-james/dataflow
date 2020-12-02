Steps to get started

1. Clone this repo

    ```url
    https://github.com/mylo-james/hogwarts-aa.git
    ```

2. Create a .env file and copy over the env-example file, make sure to input secret

    ```text
    PORT=5000
    DB_USERNAME=hogwarts_dev
    DB_PASSWORD=password
    DB_DATABASE=hogwarts
    DB_HOST=localhost
    JWT_SECRET=<<Insert Secret Here>>
    JWT_EXPIRES_IN=604800
    ```

3. Create a user in psql based off of the .env, give the user CREATEDB permissions

    ```bash
    psql && clear
    ```

    ```bash
    CREATE USER hogwarts_dev WITH PASSWORD 'password' CREATEDB;
    ```

    ```bash
    \q
    ```

4. Split terminals to have 3 terminals

    Run in first terminal

    ```bash
    npm install && npm run createDB && clear && npm start
    ```

    Run in third terminal

    ```bash
    cd client && npm install && npm start

    ```

5. Review the app's structure
