
function Resource(props){
    const { name, description, website } = props.resource.fields;

return(
    <div className="resource">
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="resourceButton" onClick={(e) => window.open(`${website}`, "_blank")}>Learn More!</button>
    </div>
    
)

}

export default Resource