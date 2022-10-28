# SQL (Storing Data in Databases)

## Objectives

- Different kinds of databases (SQL vs NoSQL)
- Using SQL in a Node.js App

## Choosing a Database

- Goal: Store Data and Make it Easily Accessible
- Use a Database
  - Quicker Access than with a File

## SQL

- SQL Database
  - Data Schema
  - Data Relations (Tables are connected)
    - One-to-One
    - One-to-Many
    - Many-to-Many
  - Tables with fields/columns
  - E.g., MySQL

## NoSQL

- Does not have a schema
- No structure required
- No data relations
- Store documents (objects) inside collections
  - {name: 'Max', age: 29}
- NoSQL Database e.g., MongoDB

## Horizontal Scaling vs Vertical Scaling

|                 Horizontal Scaling                 |          Vertical Scaling          |
| :------------------------------------------------: | :--------------------------------: |
| Add More Servers (and merge Data into one Database | Improve Server Capacity / Hardware |

## SQL vs NoSQL

|                                      SQL                                       |                        NoSQL                         |
| :----------------------------------------------------------------------------: | :--------------------------------------------------: |
|                               Data uses Schemas                                |                     Schema-less                      |
|                                   Relations                                    |              No (or very few) Relations              |
|                   Data is distributed across multiple tables                   | Data is typically merged/nested in a few collections |
| Horizontal Scaling is difficult / impossible <br> Vertical scaling is possible |   Both horizontal and vertical scaling is possible   |
|    Limitations for lots of (thousands) read <br> & write queries per second    |  Great performance for mass read & write requests.   |

---

## MySQL

- `const mysql = require("mysql2")`
- `mysql.createPool` allows us to run multiple connections unlike `mysql.createConnection`.
  - Can run multiple queries simultaneously because each query requires a connection.

---

### `mysql.createConnection`

- When you create a connection with mysql.createConnection, you only have one connection and it lasts until you close it OR connection closed by MySQL.
- A single connection is blocking.
- While executing one query, it cannot execute others. hence, your application will not perform good.

### `mysql.createPool`

- mysql.createPool is a place where connections get stored.
- When you request a connection from a pool,you will receive a connection that is not currently being used, or a new connection.
- If you're already at the connection limit, it will wait until a connection is available before it continues.
- A pool while one connection is busy running a query, others can be used to execute subsequent queries.
- Hence, your application will perform good.

```js
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "password",
});

module.exports = pool.promise();
```

- Inside the class to call `db.execute`

```js
  save() {
    return db.execute(
      "INSERT INTO products (title, price, imageUrl, description) VALUES (?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }
```

- Use `pool.promise()` to return a promise when calling `mysql.createPool`.

