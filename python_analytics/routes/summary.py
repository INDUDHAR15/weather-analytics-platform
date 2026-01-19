from fastapi import APIRouter
from services.analytics_service import get_summary, get_daily_stats

router = APIRouter()

@router.get("/summary")
def summary():
    return get_summary()

@router.get("/daily")
def daily():
    return get_daily_stats()
