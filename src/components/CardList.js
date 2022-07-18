import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const CardList = (props) => {

    const baseUrl = 'http://localhost:4000/dolci';

    //recupero dati per archiviare i dati //£ useState impostatione predefinita
    const [data, setData] = useState([{}]);

    //per far vedere i dati dal json
    useEffect( () => {
        axios.get(baseUrl)
            .then((response) => {
                setData(response.data);
                //console.log(data);
            }).catch(error => {
            console.log(error.response)
            });
    }); 
    

    /* const productDelete = async (id) => {
        await axios.delete(baseUrl + id)
            .then((res) => alert("eliminato con successo"));
        getProduct();
    }; */
    return (
        <div>
            <h1>Lista dei prodotti</h1>
            <hr/>
        <div className = "d-flex justify-content-between">
            <div className = "row row-cols-1 row-cols-md-3 g-4 my-4 mx-3">
            {data.map((dolci, id) => (
                <div key={id} className="col">
                    <div className="card">
                    <img src={dolci.immagine} className="card-img-top img-fluid" alt="..." style = {{ height:"15rem" }} /> 
                        <div className="card-body">
                            <h5 className="card-title"> {dolci.nome} </h5>
                            <p className="card-text">Sono rimasti {dolci.quantita}</p>
                            <Link to={`/dolci/${id}`} type="submit" className="btn btn-outline-success m-1" /* onClick={() => props.removeId(id)} */ >Detail</Link>
                            <button type="submit" className="btn btn-outline-primary m-1" /* onClick={() => props.removeId(id)} */ >Edit</button>
                            <button type="submit" className="btn btn-outline-danger m-1" /* onClick={() => props.productDelete(dolci.id)} */ >Delete</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
} 


export default CardList;