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

## MySQL

- `const mysql = require("mysql2")`
- `mysql.createPool` allows us to run multiple connections unlike `mysql.createConnection`.
  - Can run multiple queries simultaneously because each query requires a connection.
