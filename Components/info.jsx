
function Info({title}){

    function handleOnClick(){
        alert('You have clicked the button')
    }

    return(
        <div className="info-outer">
            <div className="container">
                <h1 className="info-heading">{title}</h1>
                <p className="info-information">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aut odit, excepturi ad fugiat voluptatibus quis illo eius illum ipsam quisquam temporibus. Animi, est ab deserunt labore quis officiis sunt assumenda modi! Voluptatibus, voluptas dolore possimus cupiditate accusantium repellat facere minima expedita deleniti fugit quo in nisi recusandae quasi suscipit.</p>
                <p className="info-information2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore a dignissimos asperiores vel unde, suscipit quis illo amet consequuntur alias, ratione error nostrum explicabo ipsum!</p>
                <button className="info-button" onClick={handleOnClick}>View More!</button>
            
            </div>
        </div>

    )
}

export default Info