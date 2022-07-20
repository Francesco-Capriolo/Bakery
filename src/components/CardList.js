import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function CardList() {

    //recupero dati per archiviare i dati //£ useState impostatione predefinita
    const [data, setData] = useState([{}]);

    //$uso questa funzione dopo il delete
    const loadProduct = () => {
        axios.get("http://localhost:4000/dolci")
            .then((response) => {
                setData(response.data);
                //console.log(data);
            }).catch(error => {
                console.log(error.response)
            });
    };

    //per far vedere i dati dal json
    useEffect(() => {
        loadProduct();
    },[]); 
    
    function productDelete(id) {
        axios.delete(`http://localhost:4000/dolci/${id}`)
            .then(loadProduct());
    };

    return (
        <div>
            <h1>Lista dei prodotti</h1>
            <hr/>
            <div className="d-flex justify-content-between">
                <div className = "row row-cols-1 row-cols-md-3 g-4 my-4 mx-3">
                {data.map((dolci, id) => (
                    <div key={id} className="col">
                        {/* <span className="d-none">{id+1}</span> */}
                        <div className="card">
                        <img src={dolci.immagine} className="card-img-top img-fluid" alt="..." style = {{ height:"15rem" }} /> 
                            <div className="card-body">
                                <h5 className="card-title"> {dolci.nome} </h5>
                                <p className="card-text border">€ {dolci.prezzo}</p>
                                <Link to={`/dolci/${dolci.id}`} type="submit" className="btn btn-outline-success m-1" /* onClick={() => props.removeId(id)} */ >Detail</Link>
                                <Link to={`/edit/${dolci.id}`} type="submit" className="btn btn-outline-primary m-1" /* onClick={() => props.removeId(id)} */ >Edit</Link>
                                <button type="submit" className="btn btn-outline-danger m-1" onClick={() => productDelete(dolci.id)}>Delete</button>
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