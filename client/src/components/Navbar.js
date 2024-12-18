import React from 'react'

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    return (



        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">BookHotel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-5">
                        {user ? (
                            <>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.name}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Bookings</a></li>
                                        <li><a class="dropdown-item" href="#">Logout</a></li>
                                        
                                    </ul>
                                </div>
                            </>) : (<>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/register">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar