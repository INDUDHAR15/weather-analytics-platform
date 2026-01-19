from fastapi import FastAPI
from routes.summary import router as summary_router

app = FastAPI(title="Weather Analytics Service")

app.include_router(summary_router, prefix="/analytics")

@app.get("/health")
def health():
    return {"status": "ok"}
