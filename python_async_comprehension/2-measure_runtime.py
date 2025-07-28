#!/usr/bin/env python3
"""
2-measure_runtime module

Defines a coroutine that measures the runtime of running
four async_comprehension coroutines in parallel.
"""

import asyncio
import time
from typing import Coroutine

# Import async_comprehension from task 1
import importlib

async_comprehension = importlib.import_module('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measures the total runtime of running async_comprehension
    four times concurrently using asyncio.gather.
    
    Returns:
        float: total elapsed time in seconds.
    """
    start = time.perf_counter()

    # Lancement de 4 appels en parallèle
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end = time.perf_counter()
    return end - start
