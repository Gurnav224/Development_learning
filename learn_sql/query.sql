-- Active: 1754471094290@@127.0.0.1@3306

CREATE TABLE developer_contributions (
contributor_id INT PRIMARY KEY,
name VARCHAR(100),
project VARCHAR(100),
role VARCHAR(50),
lines_of_code INT,
commits INT,
last_commit DATE,
location VARCHAR(100)
)

INSERT INTO developer_contributions(contributor_id, name, project, role, lines_of_code, commits, last_commit, location) VALUES
(1, 'Amit', 'Analytics Engine', 'Backend', 3095, 1, '2024-07-20', 'Delhi'),
(2, 'Priya', 'Payment Gateway', 'Backend', 3258, 27, '2024-08-13', 'Delhi'),
(3, 'Ravi', 'Analytics Engine', 'Fullstack', 3504, 3, '2024-08-26', 'Remote'),
(4, 'Neha', 'Database Migration', 'DevOps', 1234, 10, '2024-07-03', 'Mumbai'),
(5, 'Karan', 'Payment Gateway', 'Frontend', 4055, 12, '2024-07-04', 'Remote'),
(6, 'Suman', 'AI Module', 'Backend', 1500, 7, '2024-07-29', 'Bangalore'),
(7, 'Aditya', 'Payment Gateway', 'Frontend', 1800, 8, '2024-07-30', 'Remote'),
(8, 'Rohit', 'Analytics Engine', 'Fullstack', 3950, 15, '2024-08-01', 'Delhi'),
(9, 'Ishita', 'Database Migration', 'Backend', 2100, 4, '2024-08-03', 'Mumbai'),
(10, 'Varun', 'AI Module', 'DevOps', 950, 6, '2024-08-05', 'Remote'),
(11, 'Deepa', 'Analytics Engine', 'Backend', 1250, 3, '2024-08-06', 'Chennai'),
(12, 'Anuj', 'AI Module', 'Frontend', 2600, 9, '2024-07-15', 'Delhi'),
(13, 'Megha', 'Database Migration', 'Fullstack', 3300, 14, '2024-08-10', 'Mumbai'),
(14, 'Sameer', 'Analytics Engine', 'DevOps', 2800, 5, '2024-07-18', 'Pune'),
(15, 'Shreya', 'Payment Gateway', 'Backend', 2200, 6, '2024-08-11', 'Remote'),
(16, 'Vikram', 'AI Module', 'Fullstack', 4100, 11, '2024-08-12', 'Hyderabad'),
(17, 'Nikita', 'Analytics Engine', 'Frontend', 3600, 13, '2024-07-25', 'Delhi'),
(18, 'Harsh', 'Database Migration', 'Backend', 3000, 2, '2024-08-13', 'Pune'),
(19, 'Tanvi', 'AI Module', 'DevOps', 1450, 7, '2024-08-15', 'Bangalore'),
(20, 'Sahil', 'Payment Gateway', 'Fullstack', 2890, 10, '2024-08-18', 'Remote');


SELECT * FROM developer_contributions

-- List all contributors who worked on the “Analytics Engine” project.

SELECT * FROM developer_contributions WHERE project = "Analytics Engine";

-- Show the names of developers who contributed more than 3000 lines of code.

SELECT * FROM developer_contributions WHERE lines_of_code > 3000;

-- Find all developers from ‘Remote’ location.

SELECT * FROM developer_contributions WHERE location = "Remote";

-- Who made their last commit after August 1st, 2024?
SELECT * FROM developer_contributions WHERE last_commit > '2024-08-01';

-- Count the number of contributors in each role.

SELECT role, count(*) as contributor_count FROM developer_contributions GROUP BY role;

-- What is the average number of commits by DevOps engineers?

SELECT avg(commits) AS Avg_commits_by_Devops FROM developer_contributions WHERE role = 'DevOps'

-- Which contributor has the highest number of lines of code?

-- approach 1
SELECT name , lines_of_code FROM developer_contributions ORDER BY lines_of_code DESC LIMIT 1

SELECT name , lines_of_code FROM developer_contributions WHERE lines_of_code = (SELECT max(lines_of_code) FROM developer_contributions)

-- Show all contributors who made fewer than 5 commits.

SELECT * FROM developer_contributions WHERE commits < 5;

-- Get a list of contributors grouped by project name.

SELECT project, group_concat(name, ',') AS contributors  FROM developer_contributions GROUP BY project;

-- Which developers worked on more than 10 commits?
SELECT name, sum(commits) AS Total_Commits FROM developer_contributions GROUP BY name 
HAVING sum(commits) > 10


-- What is the total number of commits for the “Payment Gateway” project?

SELECT  sum(commits) as total_commits FROM developer_contributions WHERE project = "Payment Gateway";


-- Find all Backend developers who are located in Delhi.

SELECT * FROM developer_contributions WHERE role = "Backend" AND location = "Delhi"

-- List the contributors who contributed between 2000 and 3500 lines of code.

SELECT name FROM developer_contributions WHERE lines_of_code BETWEEN 2000 and 3500;


-- How many contributors are from Mumbai?

SELECT count(DISTINCT name) as number_contributors FROM developer_contributions WHERE location = "Mumbai";

-- What is the total lines of code written by all Fullstack developers?

SELECT   sum(lines_of_code) as total_lines_of_code FROM developer_contributions WHERE role = "Fullstack" 


-- Show the contributor names and their roles sorted by number of commits (descending).

SELECT name ,role , commits  FROM developer_contributions ORDER BY commits DESC;

-- Which cities have DevOps contributors?

SELECT name, location FROM developer_contributions WHERE role = "DevOps";

-- Get the average lines of code written per project.

SELECT project,  avg(lines_of_code) AS average_lines_of_code FROM developer_contributions GROUP BY project;

-- Show the most recent commit date per project.

SELECT name,  project , max(last_commit) AS most_recent_commits  FROM developer_contributions     ORDER BY project;


-- Who are the contributors whose name starts with 'S'?

SELECT name FROM developer_contributions WHERE name LIKE "S%";