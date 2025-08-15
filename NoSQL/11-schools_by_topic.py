#!/usr/bin/env python3
"""11-schools_by_topic.py"""

def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools having a specific topic.

    Args:
        mongo_collection: a PyMongo collection object
        topic (str): the topic to search for

    Returns:
        List of documents (dictionaries) matching the topic
    """
    return list(mongo_collection.find({'topics': topic}))
