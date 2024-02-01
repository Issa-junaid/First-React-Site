import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div className="container">

                <div className="header-outer">
                    <div className="header-inner">
                        <h1 className="header-heading">SAFETY   READING   GLASSES</h1>
                        <input className='header-search-bar' type="text" />
                    </div>
                </div>


                <div className='header-nav'>
                    <nav>
                        <ul>
                            <li> <Link to="/"> Home           </Link> </li>
                            <li> <Link to="/about"> About     </Link> </li>
                            <li> <Link to="/contact"> Contact </Link> </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
        )
}

export default Header