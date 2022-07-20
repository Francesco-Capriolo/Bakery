import axios from "axios";
import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCard() {
    const [nome, setNome] = useState("");
    const [immagine, setImmagine] = useState("");
    const [prezzo, setPrezzo] = useState("");
    const [data, setData] = useState("");
    const [quantita, setQuantita] = useState("");
    const [ingredienti, setIngredienti] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const formData = {
        nome: nome,
        immagine: immagine,
        prezzo: prezzo,
        quantita: quantita,
        ingredienti: ingredienti
    } 

    //per far vedere i dati dal json
    useEffect(() => {
        axios.get(`http://localhost:4000/dolci/${id}`)
        .then((response) => {
                setNome(response.data.nome);
                setImmagine(response.data.immagine);
                setPrezzo(response.data.prezzo);
                setData(response.data.data);
                setQuantita(response.data.quantita);
                setIngredienti(response.data.ingredienti);
                //console.log(data);
            }).catch(error => {
                console.log(error.response)
            });
    });

    //per aggiornare 
    function formUpdate(e) {
        e.preventDefaut();
        axios.put(`http://localhost:4000/dolci/${id}`,formData)
            .then(navigate("/"))
            
    }
    return (
        <div>
            <h1 className="mb-3">
                Modifica un prodotto
            </h1>
            <form>
                <div className = "row justify-content-center">
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit Product</label>
                        <input type="text" className="form-control"  value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit Image</label>
                        <input type="text" className="form-control" value={immagine} onChange={(e) => setImmagine(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit price</label>
                        <input type="number" className="form-control" value={prezzo} onChange={(e) => setPrezzo(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit date</label>
                        <input type="date" className="form-control" value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit Quantity</label>
                        <input type="number" className="form-control" value={quantita} onChange={(e) => setQuantita(e.target.value)}  />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Edit ingredients</label>
                        <input type="text" className="form-control" value={ingredienti} onChange={(e) => setIngredienti(e.target.value)}  />
                    </div>
                </div>
                <button className="btn btn-primary align-self-end" onClick={formUpdate}>Edit Product</button>
            </form>
        </div>
    )
}

export default EditCard;