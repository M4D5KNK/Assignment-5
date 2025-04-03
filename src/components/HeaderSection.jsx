import './HeaderSection.css'
function HeaderSection() {


    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Name</h1>
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li className="menu-list-item">Popular</li>
                        <li className="menu-list-item">Movies</li>
                        <li className="menu-list-item">TV Series</li>
                        <li className="menu-list-item">About</li>
                        <li className="menu-list-item">Contact</li>
                    </ul>
                </div>
                <div className="sign-log">
                    <ul>
                        <img className="search-icon sign-log-item" src="icons8-search-48.png" alt="" />
                        <img className="profile sign-log-item" src="pfp.jpg" alt="" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;