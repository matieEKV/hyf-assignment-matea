import express, { request } from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here
//return all emails from users
app.get("/all-emails", async (req, res) => {
  const rows = await knexInstance.raw("SELECT email FROM users;");
  res.json(rows);
});

//1. /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE confirmed_at IS NULL;"
  );
  res.json(rows);
});

//2. /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%@gmail%';"
  );
  res.json(rows);
});

//3. /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE created_at LIKE '%2022%';"
  );
  res.json(rows);
});

//4. /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT last_name, COUNT(*) AS total FROM users WHERE last_name IS NOT NULL GROUP BY last_name ORDER BY last_name ASC;"
  );
  res.json(rows);
});

//5. /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const firstUser = await knexInstance.raw(
    "SELECT * FROM users ORDER BY id LIMIT 1;"
  );
  if (!firstUser) {
    return res.sendStatus(404);
  }
  res.json(firstUser);
});

//return all first and last names from users
app.get("/all-names", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT first_name, last_name FROM users;"
  );
  res.json(rows);
});

//return all users which have emails on yahoo
app.get("/yahoo-emails", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%yahoo%';"
  );
  res.json(rows);
});

//return styled html as response for user count
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT COUNT(*) as total FROM users;");
  // res.json(rows[0].total);
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>User Count</title>
        <body>
        <div style="text-align: center; border: 5px solid purple; margin-top: 10%;"><p style="font-weight: bold; font-size: 2rem;"><em>Your database contains:</em></p>
        <p style="font-size: 5rem; color: green; font-weight: bold;">${rows[0].total} users </p></div>
        </body>
        </html>`
  );
});

//add new user through postman
app.post("/users", async (req, res) => {
  console.log(req.body);
  const { first_name } = req.body;

  if (!first_name || first_name.length === 0) {
    return res.sendStatus(400);
  }

  await knexInstance("users").insert({ first_name });

  return res.status(201).json({ message: "User created" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
