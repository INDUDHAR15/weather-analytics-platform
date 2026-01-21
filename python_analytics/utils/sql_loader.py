from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

def load_sql(filename: str) -> str:
    return (BASE_DIR / "queries" / filename).read_text()
