#!/usr/bin/env python3
"""Module that provides a function returning an asyncio.Task."""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Returns an asyncio.Task that runs wait_random with max_delay.

    Args:
        max_delay (int): Maximum delay to pass to wait_random.

    Returns:
        asyncio.Task: The created asyncio Task.
    """
    return asyncio.create_task(wait_random(max_delay))
