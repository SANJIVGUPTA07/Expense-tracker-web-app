import React from 'react'
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <div className="flex-column  text-center">
            <img src="./Checklist-removebg.png" class="img-fluid ms-auto" width="420px" alt='im'/>
            <h1 className="">Expense Tracker</h1>
            <p className="">Start taking control of your finances today with our expense tracker website</p>
            <button type="button" class="btn btn-dark btn-sm">
            <Link className='text-decoration-none text-white' to='/create'>Create</Link>
            </button>
        </div>
        </>
    )
}
export default Home;