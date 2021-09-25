import { Link } from 'react-router-dom';

function Resource(props){
    const { name, description, website } = props.resource.fields;

return(
    <div className="resource">
        <h2>{name}</h2>
        <p>{description}</p>
        <h4><Link to={{ pathname: `${website}`}} target="_blank">{website}</Link></h4>
    </div>
    
)

}

export default Resource