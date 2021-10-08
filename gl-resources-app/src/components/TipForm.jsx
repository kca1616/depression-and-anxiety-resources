import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { baseTipsURL, config } from '../services';

function TipForm(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newTip = {
            name,
            description,
        }

        await axios.post(baseTipsURL, { fields: newTip }, config);
        history.push("/tips");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" required autoFocus value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor="description">Description:</label>
            <textarea id="description" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <span></span>
            <button type="submit" id="submitButton">Submit</button>
        </form>
    )
}

export default TipForm;