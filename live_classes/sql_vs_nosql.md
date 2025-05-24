
# SQL vs NO-SQL

**SQL**: SQL databases store data in tables consisting of rows and columns, similar to spreadsheets.
They are designed to handle structured data with support for constraints and data integrity
When new data is added, it typically grows vertically as new rows are inserted.

key points

- `constraints`: Rules for data defination likes primary key , foreign key , not null etc ensure data valid
- `data integrity`: maintained through constraints and transactions to prevent invalid or inconsistent data.
- `vertical growth`: Adding records means adding rows (not columns)

**NoSQL**: NoSQL databases store data in a document-based, schemaless format, typically using BSON (Binary JSON). Data is represented as key-value pairs, making these databases well-suited for unstructured or semi-structured data.

They are designed to handle frequent and dynamic data changes, making them ideal for scenarios like analytics, social media posts, and real-time applications.

When new data is added, NoSQL databases typically grow horizontally—by adding more documents or nodes, rather than modifying the structure.

Key points: 

- `Schemaless`: No fixed schema; documents can have different fields.
- `Horizontal Growth`: New data means adding more documents (not fields/columns).
- `ideal Use Cases`:  Unpredictable or fast-changing data like user-generated content, logs, etc.


### Real World Application use both type of database according to their usecase 

#### Example 1 : Flipkart

*SQL uses*: Used when data is highly structured and relationships between entities are important.
 - Categories have a well-defined structure: id, name, parent_category_id, etc.
 - Easy to represent with foreign keys (e.g., subcategories reference parent categories).

 *No SQL*: Used for flexible, high-volume, and fast access data, often with denormalized structures.
- Each product can have varying attributes depending on category (e.g., phones have battery capacity; clothes have size, color).
- Storing in a document format (like in MongoDB) allows flexible schema per product.

#### Example2: Netflix hybrid Architecture;

*sql uses*: netflix use sql to store metadata management (eg: movie title, genre) , biling and subscriptions and user account and profiles

*nosql uses*: netflix use no sql to store user activity logs, playback event, recommendations , device and session managment

#### Example3: Uber’s Hybrid Data Architecture

*SQL uses*: Uber uses SQL databases (like MySQL or PostgreSQL) to store structured and relational data such as user account , ride history , driver profiles  , static relational data

*NoSQL uses*: Uber uses NoSQL databases (like Apache Cassandra) for storing data like trip state managment (live updates) , user-trip interactions(realtime locations, status)


### why we use SQL and NoSQl

`SQL`: We use SQL databases to efficiently handle structured and relational data, where the schema is well-defined and data consistency is critical (e.g., user accounts, transactions, relationships between tables).
`NoSQL`: We use NoSQL databases to handle unstructured or semi-structured data, non-relational data models, and highly dynamic or large-scale data that changes frequently. NoSQL is ideal for use cases requiring flexibility, horizontal scalability, and fast read/write performance.

### What is CAP Theorem?

CAP Theorem is a principle in distributed systems that says:
    A distributed system can only guarantee two out of these three things at the same time:

- `C — Consistency`: Every user sees the same data no matter which server they connect to.
eg: You book a cab, and your friend no longer sees that cab as available — because the system has updated everywhere at the same time.

- `A — Availability`: The system always responds, even if it can’t give the most up-to-date data.
eg: You always get a ride request response—even if the data might be slightly outdated.

- ` P — Partition Tolerance`: The system keeps working even if there's a network issue or some servers can’t talk to each other.
eg: If two Uber servers in different cities can’t communicate, both still handle local requests.

