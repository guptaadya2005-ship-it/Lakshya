from fastapi import FastAPI

app = FastAPI(
    title="Lakshya API",
    description="AI-powered mock interview and career readiness platform",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Lakshya API",
        "status": "running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }