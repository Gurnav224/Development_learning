CREATE TABLE developers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    role VARCHAR(50)
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    project_id INT,
    assignee_id INT NULL,
    status VARCHAR(20), -- e.g., Open, In Progress, Closed
    priority VARCHAR(3), -- e.g., P0, P1, P2
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (assignee_id) REFERENCES developers (id)
);

-- developers (10)
INSERT INTO
    developers (id, name, role)
VALUES (1, 'Ankita', 'Frontend'),
    (2, 'Rahul', 'Backend'),
    (3, 'Sara', 'Fullstack'),
    (4, 'Dev', 'Backend'),
    (5, 'Lina', 'QA'),
    (6, 'Milan', 'DevOps'),
    (7, 'Omar', 'Backend'),
    (8, 'Tara', 'Frontend'),
    (9, 'Yusuf', 'Data'),
    (10, 'Isha', 'Mobile');

-- projects (7)  -- note: id=7 has NO tickets
INSERT INTO
    projects (id, name)
VALUES (1, 'Nimbus'),
    (2, 'JunoJar'),
    (3, 'Scout'),
    (4, 'NeoG Portal'),
    (5, 'Daol LMS'),
    (6, 'Bubble'),
    (7, 'Roc8 Hiring');

-- tickets (20)  -- some assignee_id = NULL; project_id=7 intentionally absent
INSERT INTO
    tickets (
        id,
        title,
        project_id,
        assignee_id,
        status,
        priority
    )
VALUES (
        1,
        'Login bug',
        1,
        2,
        'Open',
        'P1'
    ),
    (
        2,
        'Signup error',
        1,
        3,
        'In Progress',
        'P0'
    ),
    (
        3,
        'Dashboard slow',
        2,
        7,
        'Open',
        'P1'
    ),
    (
        4,
        'Add dark mode',
        2,
        1,
        'Closed',
        'P2'
    ),
    (
        5,
        'Payment webhook',
        3,
        2,
        'Open',
        'P0'
    ),
    (
        6,
        'Analytics event',
        3,
        9,
        'Open',
        'P2'
    ),
    (
        7,
        'Mobile crash on splash',
        4,
        NULL,
        'Open',
        'P1'
    ),
    (
        8,
        'Upgrade Node',
        5,
        6,
        'In Progress',
        'P2'
    ),
    (
        9,
        'Broken CSS on IE',
        4,
        1,
        'Closed',
        'P2'
    ),
    (
        10,
        'Add SSO',
        1,
        2,
        'In Progress',
        'P0'
    ),
    (
        11,
        'Rate limiting',
        3,
        4,
        'Open',
        'P1'
    ),
    (
        12,
        'API 500 on /orders',
        2,
        7,
        'Open',
        'P1'
    ),
    (
        13,
        'Feature flag toggle',
        6,
        NULL,
        'Open',
        'P2'
    ),
    (
        14,
        'CDN cache purge',
        2,
        6,
        'Closed',
        'P2'
    ),
    (
        15,
        'SSO callback error',
        5,
        NULL,
        'Open',
        'P1'
    ),
    (
        16,
        'GZIP compression',
        1,
        3,
        'Closed',
        'P2'
    ),
    (
        17,
        'Improve logs',
        6,
        9,
        'In Progress',
        'P2'
    ),
    (
        18,
        'Migrate DB to Neon',
        3,
        7,
        'In Progress',
        'P1'
    ),
    (
        19,
        'Add retries to webhook',
        3,
        4,
        'Open',
        'P1'
    ),
    (
        20,
        'Crash on settings save',
        4,
        10,
        'Open',
        'P1'
    );

-- List tickets with project name and assignee name (only assigned tickets).
/*
break down the query into smaller part
step 1: query all tickets data
query : SELECT * FROM tickets

step 2: (only assigned tickets) means filter the null data or developer that's not assign any task
query: SELECT * FROM tickets WHERE tickets.assignee_id IS NOT NULL

step 3: join the ticket and project data via  project id
query:  SELECT * FROM tickets INNER JOIN projects on tickets.project_id = projects.id WHERE assignee_id IS NOT NULL

step 4: combine all tables data project , developers, tickets
SELECT * FROM tickets INNER JOIN projects ON projects.id = tickets.project_id INNER JOIN developers on tickets.assignee_id = developers.id  WHERE assignee_id Is NOT NULL;

step 5: now I need to extract the tickets, with project name and assign name 
SELECT tickets.title, projects.name, developers.name, tickets.priority, tickets.status FROM tickets INNER JOIN projects ON projects.id = tickets.project_id INNER JOIN developers ON developers.id = tickets.assignee_id WHERE assignee_id IS NOT NULL ;

step 6: make the query more readable with alias 
*/
SELECT
    t.title as ticket_title,
    p.name as project_name,
    d.name as developer_name,
    t.status as status,
    t.priority as priority
FROM
    tickets as t
    INNER JOIN projects as p ON p.id = t.project_id
    INNER JOIN developers as d ON d.id = t.assignee_id
WHERE
    assignee_id IS NOT NULL;

-- 2 List Open P0 tickets with project and assignee (sort by project name, then title).
/*
step 1: list the all tickets with status open and priority P0
SELECT * FROM tickets WHERE status == 'Open' AND priority = 'P0'
query: 

step 2: extract the name like ticket title, project name and assign name add alias
query: SELECT t.title as ticket_title, p.name as project_name , d.name as assign_name FROM tickets as t INNER JOIN projects as p ON p.id = t.project_id INNER JOIN developers as d ON d.id = t.assignee_id WHERE t.status = 'Open' AND t.priority = 'P0'

step3: sort them by project name, ticket title 


*/

SELECT
    t.title as ticket_title,
    p.name as project_name,
    d.name as developer_name
FROM
    tickets as t
    INNER JOIN projects as p ON p.id = t.project_id
    INNER JOIN developers as d ON d.id = t.assignee_id
WHERE
    t.status = 'Open'
    AND t.priority = 'P0'
ORDER BY p.name ASC, t.title ASC

-- List tickets where the assignee’s role is Backend (show ticket title, project, assignee).
/*

step1: get all tickets
query: SELECT * FROM tickets

step2: add projects
query: SELECT * FROM tickets INNER JOIN projects ON projects.id = tickets.project_id

step3: add developers
query: SELECT * FROM tickets INNER JOIN projects ON projects.id = tickets.project_id INNER JOIN developers ON developers.id = tickets.assignee_id

step4: filter by backend role
query: SELECT tickets.title as title, projects.name as project, developers.name as assignee FROM tickets INNER JOIN projects ON projects.id = tickets.project_id INNER JOIN developers ON developers.id = tickets.assignee_id
WHERE developers.role = 'Backend'
step5: add alias 
*/

SELECT t.title as title, p.name as project, d.name as assignee
FROM
    tickets as t
    INNER JOIN projects as p ON p.id = t.project_id
    INNER JOIN developers as d ON d.id = t.assignee_id
WHERE
    d.role = 'Backend'

-- 4. List tickets in project “JunoJar” that are In Progress with assignee name.
/*
step 1: list all the tickets
query:
SELECT * FROM tickets

step 2: add the project 
query: 

step 3: add the developers 
step 4: filter out the tickets by project "JunoJar" And Status in Progress
*/

SELECT t.title AS ticket_title, d.name AS assignee
FROM
    tickets t
    INNER JOIN projects p ON t.project_id = p.id
    INNER JOIN developers d ON t.assignee_id = d.id
WHERE
    p.name = 'JunoJar'
    AND t.status = 'In Progress';

--   5. For project “Scout”, list all tickets with assignee name and status Open or In Progress.

SELECT
    t.title as ticket_title,
    d.name as assignee,
    p.name as project_name
FROM
    tickets as t
    INNER JOIN developers as d ON t.assignee_id = d.id
    INNER JOIN projects as p ON t.project_id = p.id
WHERE (
        t.status = 'Open'
        OR t.status = 'In Progress'
    )
    AND p.name = 'Scout'

-- 6. List ticket id, project name, assignee name (only assigned), ordered by project name then ticket id.

SELECT
    t.id as ticket_id,
    p.name as project_name,
    d.name as assignee_name
FROM
    tickets as t
    INNER JOIN projects as p ON t.project_id = p.id
    INNER JOIN developers as d ON d.id = t.assignee_id
ORDER BY p.name, t.id

-- 7. Show all tickets with project name and assignee name (unassigned rows should show NULL for assignee).

SELECT
    t.title AS ticket_title,
    p.name AS project_name,
    d.name AS assignee_name
FROM
    tickets AS t
    INNER JOIN projects AS p ON t.project_id = p.id
    LEFT JOIN developers AS d ON t.assignee_id = d.id;

-- 8. Show all projects and any ticket titles (projects with no tickets must still appear).

SELECT
    p.name as project_name,
    STRING_AGG (t.title, ', ') as ticket_titles
FROM projects as p
    LEFT JOIN tickets as t ON t.project_id = p.id
GROUP BY
    p.name;

-- 9. Show all developers and any ticket titles they’re assigned (developers with zero tickets must appear).

SELECT
    d.name as developer_name,
    t.title as ticket_title
FROM developers as d
    LEFT JOIN tickets as t ON t.assignee_id = d.id;

--10. Show the tickets that have no assignee (list ticket id, title, project name).

SELECT
    t.id as ticket_id,
    t.title as ticket_title,
    p.name as project_name
FROM
    tickets as t
    LEFT JOIN developers as d ON t.assignee_id = d.id
    INNER JOIN projects as p ON t.project_id = p.id
WHERE
    d.id IS NULL;

--  11. Show all tickets in project “NeoG Portal” with assignee name if present; order by ticket id.

SELECT
    t.id as ticket_id,
    t.title as ticket_title,
    d.name as Assignee_name
FROM
    tickets as t
    INNER JOIN projects as p ON t.project_id = p.id
    LEFT JOIN developers as d ON t.assignee_id = d.id
WHERE
    p.name = 'NeoG Portal'
ORDER BY t.id

--  12. Show all projects and the number of tickets they have (include projects with zero). (GROUP BY #1)

SELECT p.name as project_name, count(t.title) as ticket_count
FROM projects as p
    LEFT JOIN tickets as t ON t.project_id = p.id
GROUP BY
    p.name;

-- 13. Show all developers with any tickets they’re assigned (include developers with none).

SELECT
    d.name as developer_name,
    STRING_AGG (t.title, ', ') as ticket_title
FROM developers as d
    LEFT JOIN tickets as t ON t.assignee_id = d.id
GROUP BY
    d.name

-- 14 Show all projects with any ticket titles (include projects with none).

SELECT
    p.name as project_name,
    STRING_AGG (
        t.title,
        ', '
        ORDER BY t.title
    ) as ticket_titles
FROM projects as p
    LEFT JOIN tickets as t ON p.id = t.project_id
GROUP BY
    p.name

-- 15) Show developers whose role is QA or DevOps, with any tickets they’re assigned (include none).

SELECT d.name as developer_name, d.role, STRING_AGG (
        t.title, ', '
        ORDER BY t.title
    )
FROM developers as d
    LEFT JOIN tickets as t ON t.assignee_id = d.id
WHERE
    d.role = 'QA'
    OR d.role = 'DevOps'
GROUP BY
    d.name

-- 16. Show each developer and how many tickets are assigned to them (include developers with zero). (GROUP BY #2)

SELECT
    d.name as developer_name,
    count(t.id) as ticket_count
FROM developers as d
    LEFT JOIN tickets as t ON t.assignee_id = d.id
GROUP BY
    d.id,
    d.name

-- 17) Show developers who have no tickets at all (developer name + role; tickets should be NULL).

SELECT
    d.name as developer_name,
    d.role as developer_role,
    t.title as ticket_title
FROM developers as d
    LEFT JOIN tickets as t ON t.assignee_id = d.id
WHERE
    t.id IS NULL

-- 18.  Show count of tickets per status (Open / In Progress / Closed). (GROUP BY #3)

SELECT t.status as ticket_status, count(t.status) as ticket_count
FROM tickets as t
GROUP BY
    t.status;

-- 19. List tickets and assignee names for projects “Nimbus” or “Bubble” (include unassigned as NULL, ordered by project then title).

SELECT
    t.id as ticket_id,
    t.title as ticket_title,
    p.name as project_name,
    d.name as developer_name
FROM
    tickets as t
    INNER JOIN projects as p ON t.project_id = p.id
    LEFT JOIN developers as d ON t.assignee_id = d.id
WHERE
    p.name = 'Nimbus'
    OR p.name = 'Bubble'

-- 20.  List all tickets (id, title) with project name and assignee name if present for project “Scout” (include unassigned).
SELECT
    t.id as ticket_id,
    t.title as ticket_title,
    p.name as project_name,
    d.name as assignee_name
FROM
    tickets as t
    INNER JOIN projects as p ON p.id = t.project_id
    LEFT JOIN developers as d ON d.id = t.assignee_id
WHERE
    p.name = 'Nimbus'


