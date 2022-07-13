import React from 'react';
import './styles/header.css'

export default function Header() {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

            {/* <!-- Script from bootstrap --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous">
            </script>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <article>
                <header className="main-container">
                    <div className="row">

                        {/* <!-- Logo --> */}
                        <div className="col-2">
                            <h1>Games2Sell</h1>
                        </div>

                        {/* <!-- Where the search bar and function --> */}
                        <div className="col-8">
                            <div className="search-container">
                                {/* <form id="form" role="search">
                                    <input type="search" id="query" name="q" placeholder="Search..."
                                        aria-label="Search through site content">
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </input>
                                </form>  */}
                            </div>
                        </div>

                        {/* <!-- If not logged in, will show register/login if not will show account --> */}
                        <div className="col-1">
                            Login
                        </div>
                        <div className="col-1">
                            Shopping cart
                        </div>
                    </div>

                </header>

                {/* <!-- Navigation for different location --> */}

                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span>Categories</span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav justify-content-between">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">PS 4</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PS 5</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">XBOX</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nintendo Switch</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </article>
        </div>
    );
};

// export default function Header() {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 {/*Inside the IconButton, we
// 		can render various icons*/}
//                 <IconButton
//                     size="large"
//                     edge="start"
//                     color="inherit"
//                     aria-label="menu"
//                     sx={{ mr: 2 }}
//                 >
//                     {/*This is a simple Menu
// 			Icon wrapped in Icon */}
//                     <MenuIcon />
//                 </IconButton>
//                 {/* The Typography component applies
// 		default font weights and sizes */}

//                 <Typography variant="h6"
//                     component="div" sx={{ flexGrow: 1 }}>
//                     GeeksforGeeks Header
//                 </Typography>
//                 <Button color="inherit">Login</Button>
//             </Toolbar>
//         </AppBar>
//     );
// }
