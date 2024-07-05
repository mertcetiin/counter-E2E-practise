"use client";
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div className='p-6'>
            <p>{count}</p>

            <div className='flex gap-x-[10px]'>
                <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount((prev) => prev - 1)}>decrement</button>
            </div>


        </div>
    )
}

export default Counter