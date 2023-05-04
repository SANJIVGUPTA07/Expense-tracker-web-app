import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
    const { loginWithRedirect ,logout,isAuthenticated ,user} = useAuth0()
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><b>ExpenseTracker</b></Link>                                                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home"><b>Home</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create"><b>Create</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/view"><b>View</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs"><b>Blogs</b></Link>
                            </li>
                        </ul> 
                        
                        <div class='ms-auto'>
                        {
                            isAuthenticated && <p>{user.name}</p>
                        }                       
                        {
                            isAuthenticated?(
                                <button class="btn btn-dark" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out</button>
                            ):(
                                <button class="btn btn-dark" onClick={() => loginWithRedirect()}>Log In</button>
                            )
                        }
                        </div>
{/* 
                        <button type="button" class="btn btn-dark ms-auto">Login/SignUp</button> */}
                        
                        </div>                    
                </div>
            </nav>

        </>
    )
}

export default Navbar;