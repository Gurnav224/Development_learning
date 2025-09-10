-- Active: 1757307828543@@127.0.0.1@3306

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100)
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(200),
    created_on DATE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    content VARCHAR(255),
    FOREIGN KEY (post_id) REFERENCES posts (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    FOREIGN KEY (post_id) REFERENCES posts (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- users (10)
INSERT INTO
    users (id, name, city)
VALUES (1, 'Ananya', 'Delhi'),
    (2, 'Bharat', 'Mumbai'),
    (3, 'Chitra', 'Bengaluru'),
    (4, 'Dev', 'Kolkata'),
    (5, 'Esha', 'Pune'),
    (6, 'Farhan', 'Hyderabad'),
    (7, 'Gauri', 'Chennai'),
    (8, 'Harsh', 'Noida'),
    (9, 'Iqbal', 'Jaipur'),
    (10, 'Jaya', 'Ahmedabad');

-- posts (12)  -- user 6 (Farhan) has no posts
INSERT INTO
    posts (
        id,
        user_id,
        title,
        created_on
    )
VALUES (
        1,
        1,
        'Hello World',
        '2025-08-01'
    ),
    (
        2,
        1,
        'Learning SQL',
        '2025-08-02'
    ),
    (
        3,
        2,
        'Travel Pics',
        '2025-08-02'
    ),
    (
        4,
        3,
        'Food Diary',
        '2025-08-03'
    ),
    (
        5,
        4,
        'Kolkata Shots',
        '2025-08-03'
    ),
    (
        6,
        5,
        'Pune Rain',
        '2025-08-04'
    ),
    (
        7,
        7,
        'Chennai Heat',
        '2025-08-04'
    ),
    (
        8,
        8,
        'Noida Traffic',
        '2025-08-05'
    ),
    (
        9,
        9,
        'Jaipur Fort',
        '2025-08-05'
    ),
    (
        10,
        2,
        'Monsoon',
        '2025-08-06'
    ),
    (
        11,
        3,
        'Deep Dive SQL',
        '2025-08-06'
    ),
    (
        12,
        10,
        'Hello from Ahd',
        '2025-08-07'
    );

-- comments (12)  -- some posts intentionally have no comments
INSERT INTO
    comments (id, post_id, user_id, content)
VALUES (1, 1, 2, 'Nice!'),
    (2, 1, 3, 'Welcome!'),
    (3, 2, 3, 'Good luck'),
    (4, 3, 1, 'Cool!'),
    (5, 3, 4, 'Nice pics'),
    (6, 5, 6, 'Love it'),
    (7, 6, 1, 'Rainy!'),
    (8, 7, 9, 'Stay cool'),
    (9, 9, 2, 'Great fort'),
    (10, 11, 1, 'SQL!'),
    (11, 11, 5, 'Learning'),
    (12, 10, 8, 'Monsoon vibes');

-- likes (12)  -- some posts intentionally have no likes
INSERT INTO
    likes (id, post_id, user_id)
VALUES (1, 1, 3),
    (2, 1, 4),
    (3, 2, 1),
    (4, 2, 3),
    (5, 3, 1),
    (6, 5, 2),
    (7, 6, 1),
    (8, 8, 2),
    (9, 9, 1),
    (10, 10, 3),
    (11, 11, 2),
    (12, 12, 1);

-- 1. List posts with their author name (only posts that exist).

SELECT p.title as title, u.name as author
FROM posts as p
    INNER JOIN users as u ON p.user_id = u.id;

-- List comments with post title and commenter name.

SELECT
    c.content as comment,
    p.title as post_title,
    u.name as commenter
FROM
    comments as c
    INNER JOIN posts as p ON p.id = c.post_id
    INNER JOIN users as u ON u.id = c.user_id;

-- 3. List likes with post title and liker name.

SELECT p.title as post_title, u.name as liker
FROM
    posts as p
    INNER JOIN likes as l ON p.id = l.post_id
    INNER JOIN users as u ON u.id = l.user_id

--  4. List posts authored by users from Mumbai (show title, date, author).

SELECT 
p.title as title,
p.created_on as created_on,
u.name as author 
FROM posts as p
INNER JOIN users as u ON u.id = p.user_id
WHERE u.city = 'Mumbai'


-- 5. List all comments made on posts authored by Ananya (show commenter name, post title).




 SELECT 
    c.content AS comment,
    p.title   AS post_title,
    commenter.name AS commenter
FROM comments AS c
INNER JOIN posts AS p 
    ON p.id = c.post_id
INNER JOIN users AS author
    ON author.id = p.user_id
INNER JOIN users AS commenter
    ON commenter.id = c.user_id
WHERE author.name = 'Ananya';


-- 6. Show all posts with any comment’s commenter name; posts with no comments should still appear (commenter is NULL).

SELECT 
p.title as title,
c.content as comment,
commenter.name as commenter
FROM posts as p
LEFT JOIN comments as c ON c.post_id = p.id 
LEFT JOIN users as commenter ON commenter.id = c.user_id


-- 7) Show all users and the titles of any posts they authored (users with no posts must appear).

SELECT 
author.name as author,
p.title as title 
FROM users as author 
LEFT JOIN posts as p ON p.user_id = author.id

-- 8) Show all posts with any likes (include posts with zero likes).

  SELECT 
  p.title as title,
  l.id as likes 
  FROM posts as p 
  LEFT JOIN likes as l ON p.id = l.user_id


--   9) Show all users and any comments they’ve written (include users with zero comments).

SELECT 
author.name as user,
c.content as comment 
FROM users as author
LEFT JOIN  comments as c ON c.user_id = author.id;


-- 10) Show all posts and any comments on or after 2025-08-05 (include posts even if they have no such comments).


SELECT 
p.title as title,
c.content as comment,
p.created_on as post_date 
FROM posts as p
LEFT JOIN comments as c 
ON c.post_id =  p.id 
WHERE p.created_on >= '2025-08-05'

--11. Show all users and any posts they authored (users with no posts must appear).

SELECT 
author.name as author,
p.title as post 
FROM
users as author 
LEFT JOIN posts as p ON p.user_id = author.id

-- 12) Show all users and any comments they wrote (include users with none).

SELECT 
u.name as name,
content as comment
FROM
users as u 
LEFT JOIN comments as c ON c.user_id = u.id


-- 13) Show all users and any likes they placed (include users with none).

SELECT 
u.name as name, 
l.id as likes
FROM users as u
LEFT JOIN likes as l ON u.id = l.user_id

-- 14) Show users from Hyderabad and any posts they created (include none).

SELECT 
u.name as user,
p.title as post 
FROM users as u
LEFT JOIN posts as p ON p.user_id = u.id 
WHERE u.city = 'Hyderabad'


-- 15) Show number of posts per user (include users with zero posts). (Hint: base from users and LEFT JOIN posts; GROUP BY users.id)


SELECT 
count(p.id) as post_per_user,
u.name as user 
FROM users as  u 
LEFT JOIN posts as p ON p.user_id = u.id
GROUP BY u.id


-- 16) Show number of comments per post (include posts with zero comments). (LEFT JOIN + GROUP BY posts.id)


SELECT 
p.title as post,
count(c.id) as number_of_comment 
FROM posts as p 
LEFT JOIN comments as c ON c.post_id = p.user_id
GROUP BY p.id


-- 17) Show number of likes per post (include posts with zero likes). (LEFT JOIN + GROUP BY posts.id)

SELECT 
p.title as title,
count(l.id) as likes
FROM posts as p
LEFT JOIN likes as l ON l.post_id = p.id
GROUP BY p.id

-- 18) List users who never posted (user name + city).

SELECT 
u.name as name,
u.city as city 
FROM 
users as u
LEFT JOIN posts as p ON p.user_id = u.id
WHERE p.id IS NULL

-- 19) List posts that have no comments (title + author name).

SELECT 
*
 FROM  posts as p
 LEFT JOIN comments as c ON c.post_id = p.id
 LEFT JOIN users as u ON u.id = p.user_id
WHERE c.id IS NULL

-- 20) List posts (title) with author name and any commenter names; sort by post title then commenter name.

SELECT 
    p.title        AS title,
    author.name    AS author,
    commenter.name AS commenter
FROM posts AS p
INNER JOIN users AS author 
    ON author.id = p.user_id
INNER JOIN comments AS c 
    ON c.post_id = p.id
INNER JOIN users AS commenter 
    ON commenter.id = c.user_id
ORDER BY p.title, commenter.name;
