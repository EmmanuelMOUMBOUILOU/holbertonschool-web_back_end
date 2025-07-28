#!/usr/bin/env python3
"""Module that defines task_wait_n to run multiple task_wait_random concurrently."""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Run task_wait_random n times concurrently and return the delays in ascending order.

    Args:
        n (int): Number of tasks to run.
        max_delay (int): Maximum delay in seconds for each task.

    Returns:
        List[float]: List of delays in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = await asyncio.gather(*tasks)
    return sorted(results)
