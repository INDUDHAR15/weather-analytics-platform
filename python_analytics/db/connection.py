import psycopg2
import os
from dotenv import load_dotenv
load_dotenv()

DB_POOL = None

def init_db():
    global DB_POOL
    DB_POOL = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        port=os.getenv("DB_PORT", 5432)
    )
def get_connection():
    if DB_POOL is None:
        raise Exception("DB_POOL is not initialized")
    return DB_POOL

def release_connection(conn):
    DB_POOL.putconn(conn)