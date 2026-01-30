from fastapi import FastAPI
from db.connection import init_db_pool
from routers.analytics import router as analytics_router

app = FastAPI()


@app.on_event("startup")
def startup():
    init_db_pool()


app.include_router(analytics_router, prefix="/analytics")
