import psycopg2
import json


try:
    conn = psycopg2.connect(
         host = "localhost",
         database = "library_db",
         user = "chaiaurcode",
         password = "chaiaurcode"
        )
    
    query = conn.cursor()

    # print version details 

    query.execute('SELECT version();')
    version = query.fetchone()
    print('you are using postges version',version)

    # print database details
    query.execute('SELECT current_database();')
    db_name = query.fetchone()[0]
    print('connected to:', db_name)



    # print the rows name
    query.execute('select * from books;')
    rows = query.fetchall()



    # print the columns name
    col_name = [desc[0] for desc in query.description] 
    print('columns: ', col_name)


    result = [dict(zip(col_name , row)) for row in rows]

    print(json.dumps(result, indent=2))

except Exception as e:
    print('Error: ', e)