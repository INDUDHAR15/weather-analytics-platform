from fastapi import APIRouter
from services.analytics_service import get_summary, get_daily_stats

router = APIRouter()

@router.get("/summary")
def summary():
    return {
        "success": True,
        "data": get_summary()
    }

@router.get("/daily")
def daily():
    return {
        "success": True,
        "data": get_daily_stats()
    }