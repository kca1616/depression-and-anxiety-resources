import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { baseURL, config } from '../services';

function Form(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newResource = {
            name,
            description,
            website,
        }

        await axios.post(baseURL, { fields: newResource }, config);
        history.push("/resources");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" required autoFocus value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor="description">Description:</label>
            <textarea id="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <label htmlFor="wesbite">Website link:</label>
            <input type="text" required value={website} onChange={(e) => setWebsite(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;