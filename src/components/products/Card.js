import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Card() {
    //recupero dati per archiviare i dati //£ useState impostatione predefinita
    const [data, setData] = useState([{}]);

    //per far vedere i dati dal json
    useEffect(() => {
        axios.get(`http://localhost:4000/dolci/${id}`)
            .then((response) => {
                setData(response.data);
                //console.log(data);
            }).catch(error => {
                console.log(error.response)
            });
    });

    const{id} = useParams()
    return (
    <div className="container">
            
            {data && (
                <>
                    <div class="col-7 mx-auto mt-3">
                        <div class="card h-100">
                        <img src={data.immagine} class="card-img-top" alt={data.nome}/>
                        <div class="card-body">
                            <h5 class="card-title fs-1">{data.nome}</h5>
                            <p class="card-text">Gli ingredienti sono:{data.ingredienti}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">prezzo: €{data.prezzo} al pezzo</small>
                        </div>
                        </div>
                    </div>
                </>    
        )}
        </div>
    )
}

export default Card;