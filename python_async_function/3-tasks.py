#!/usr/bin/env python3
"""Module that defines a function returning an asyncio Task from wait_random."""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio.Task that runs wait_random with the given max_delay.

    Args:
        max_delay (int): Maximum delay in seconds.

    Returns:
        asyncio.Task: The asyncio Task object wrapping wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
