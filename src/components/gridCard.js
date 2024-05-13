const GridCard = (props) => {
    return (
        <>
        <div className="col-md-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis quaerat minus possimus consequatur harum perspiciatis similique ullam doloremque consectetur, laudantium sint id alias sapiente quasi labore itaque nostrum laboriosam.</p>
                    <a href="#" className="btn btn-warning">Lear more</a>

                </div>

            </div>

        </div>
        
        
        
        
        
        
        </>





    );
}

export default GridCard;