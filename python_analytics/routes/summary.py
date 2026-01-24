router = APIRouter(prefix="/analytics", tags=["Analytics"])

from services.analytics_service import get_summary, get_daily_stats

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