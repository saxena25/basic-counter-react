import { useState } from "react";

export default function Content(){
    const [count,setCount] = useState(0);


    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)} disabled={count >= 10}>add</button>
            <button onClick={()=>setCount(count - 1)} disabled={count <= 0}>minus</button>
        </>
    )
}