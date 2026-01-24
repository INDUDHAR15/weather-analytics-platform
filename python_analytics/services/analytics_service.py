from pathlib import Path
from db.connection import get_connection

BASE_DIR = Path(__file__).resolve().parent.parent
QUERIES_DIR = BASE_DIR / "queries"


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

    sql = (QUERIES_DIR / "daily_stats.sql").read_text()
    cur.execute(sql)

    rows = cur.fetchall()
    cur.close()
    conn.close()

    return rows
