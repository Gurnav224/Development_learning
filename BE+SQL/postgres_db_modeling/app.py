import psycopg2  # type: ignore


try:
    conn = psycopg2.connect(
        host = "localhost",
        database = "library_db",
        user = 'chaiaurcode',
        password = 'chaiaurcode',
        )
    
    curr = conn.cursor()

    curr.execute('SELECT current_database();')
    db_name = curr.fetchone()[0]
    print("connected to: 📛", db_name)

        # 🔹 2. Get list of tables in current database
    curr.execute("""
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
    """)
    tables = curr.fetchall()
    print("📋 Tables:")
    for table in tables:
        print("-", table[0])

    # 🔹 Fetch all data from the 'users' table
    curr.execute("select * from books")
    rows = curr.fetchall()


    # 🔹 Get column names (optional, but helpful)
    col_names = [desc[0] for desc in curr.description]
    print("🧾 Columns:", col_names)

    print("📄 Data in 'users' table:")
    for row in rows:
        print(row)

    curr.close()
    conn.close()

except Exception as e:
    print('Error:',e)


