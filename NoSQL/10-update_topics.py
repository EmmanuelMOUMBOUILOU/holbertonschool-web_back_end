#!/usr/bin/env python3
"""10-update_topics.py"""

def update_topics(mongo_collection, name, topics):
    """
    Updates the 'topics' field of all documents in a collection with a given name.

    Args:
        mongo_collection: a PyMongo collection object
        name (str): the name of the school to update
        topics (list of str): list of topics to set

    Returns:
        None
    """
    mongo_collection.update_many(
        {'name': name},
        {'$set': {'topics': topics}}
    )
