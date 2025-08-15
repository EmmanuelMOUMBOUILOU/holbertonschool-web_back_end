#!/usr/bin/env python3
"""8-all.py"""

def list_all(mongo_collection):
    """
    Lists all documents in a PyMongo collection.

    Args:
        mongo_collection: a PyMongo collection object

    Returns:
        A list of documents (dictionaries). Empty list if none.
    """
    return list(mongo_collection.find())
