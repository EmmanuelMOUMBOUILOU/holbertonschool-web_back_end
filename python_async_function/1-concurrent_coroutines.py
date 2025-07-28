#!/usr/bin/env python3
"""Module that defines wait_n coroutine to run wait_random multiple times concurrently."""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Execute wait_random n times concurrently with the given max_delay.

    Args:
        n (int): Number of times to run wait_random.
        max_delay (int): Maximum delay passed to wait_random.

    Returns:
        List[float]: List of delays in ascending order.
    """
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
