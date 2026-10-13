
function Courses(props) {
    if (props.show) {
        return (
            <div className="style">
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <h2>{props.price}</h2>
            </div>
        );
    }
    else{
        return (
            <div className = 'style'>No data</div>
        );
    }
}

export default Courses;