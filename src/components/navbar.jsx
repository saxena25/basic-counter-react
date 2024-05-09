function Navbar(){
    const fruits = ['apple', 'banana', 'orange', 'pineApple']
    return(
        <>
            {fruits.map((e,index)=> <p key={index}>{e}</p>)}
        </>
    )
}

export default Navbar;