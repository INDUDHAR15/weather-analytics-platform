from pathlib import Path
from db.connection import get_connection

QUERIES_DIR = Path(__file__).parent.parent / "queries"

# def get_summary():
#     conn = get_connection()
#     cur = conn.cursor()
#     cur.execute(open("queries/summary.sql").read())
#     rows = cur.fetchall()
#     cur.close()
#     conn.close()

#     return rows

def get_summary():
    conn = get_connection()
    cur = conn.cursor()

    sql = (QUERIES_DIR / "summary.sql").read_text()
    cur.execute(sql)

    rows = cur.fetchall()
    cur.close()
    conn.close()

    return rows

def get_daily_stats():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(open("queries/daily_stats.sql").read())
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return rows