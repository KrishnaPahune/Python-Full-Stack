
function Card(props){
    return(
        <>
        
            <h2>{props.name}</h2>
            <img src={props.personImg} alt="jagadambaMata" style={{width:200}}/>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </>
    )
}
export default Card