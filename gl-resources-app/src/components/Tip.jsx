function Tip(props){
    const { name, description } = props.tip.fields;

return(
    <div className="tip">
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    
)

}

export default Tip