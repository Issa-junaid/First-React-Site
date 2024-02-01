import c from '/download.jpg'
import a from '/download2.jpg'

function Cards(){

    return(
        <div>      

            <div className="container">
                <div className="cards-outer">

                    <div className="card">

                        <div className="card-image">
                            <img src={a} alt="construction-image" />
                        </div>

                        <div className="card-text">
                            <a>SunSet</a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={c} alt="-image" />
                        </div>

                        <div className="card-text">
                            <a>Panda</a>
                        </div>

                    </div>
                    
                    <div className="card">

                        <div className="card-image">
                            <img src={a} alt="construction-image" />
                        </div>

                        <div className="card-text">
                            <a>SunSet</a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={c} alt="-image" />
                        </div>

                        <div className="card-text">
                            <a>Panda</a>
                        </div>

                    </div>
                
                </div>
            </div>
        </div>


    )
}

export default Cards