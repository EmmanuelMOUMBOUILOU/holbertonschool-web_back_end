#!/usr/bin/env python3
"""
12-log_stats.py
Script to provide some stats about Nginx logs stored in MongoDB
"""

from pymongo import MongoClient


def main():
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    total_logs = collection.count_documents({})
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print(f"{total_logs} logs")
    print("Methods:")

    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")


if __name__ == "__main__":
    main()
