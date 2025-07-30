#!/usr/bin/env python3
"""
Module to measure runtime of four parallel async comprehensions.
"""

import asyncio
import time
from typing import Callable

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times concurrently
    and measures total runtime.

    Returns:
        float: Total runtime in seconds.
    """
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.perf_counter()
    return end - start
