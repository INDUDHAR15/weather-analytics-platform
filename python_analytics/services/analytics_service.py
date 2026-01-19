from db.connection import get_connection

def get_summary():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(open("queries/summary.sql").read())
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return rows
