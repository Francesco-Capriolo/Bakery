import React, { useState/* setData */ } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
    const [nome, setNome] = useState("");
    const [immagine, setImmagine] = useState("");
    const [prezzo, setPrezzo] = useState("");
    const [data, setData] = useState("");
    const [quantita, setQuantita] = useState("");
    const [ingredienti, setIngredienti] = useState("");

    const navigate = useNavigate();

    const formData = {
        nome: nome,
        immagine: immagine,
        prezzo: prezzo,
        quantita: quantita,
        ingredienti:ingredienti
    }

    function formSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/dolci", formData)
            .then(navigate("/"))
        .catch(error => {
            console.log(error.response)
            });
    };
    //? funzioni da ricontrollare
    /* const baseUrl = 'http://localhost:4000/dolci'; */
    //funzione per creare un id e non ripeterlo ciclicamente
    /* function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
        });
    }; */

   /*  const getProduct = async () => {
        await axios.get(baseUrl)
            .then((res) => setData(res.data));
    }; */

    /* const [formData, setFormData] = useState({
        id:uuid(),
        nome: "",
        immagine: "",
        prezzo: "",
        data: "",
        quantita: "",
        ingredienti: "",
    }); */

    /* const formSubmit = async (e) => {
        const response = await axios.dolci('http://localhost:4000/dolci', formData);
        
        if (response) {
            alert("i dati sono stati aggiunti correttamente")
        } else {
            alert("errore nell'inserimento dei dati")
        }

        setFormData({
            nome: "",
            immagine: "",
            prezzo: "",
            data: "",
            quantita: "",
            ingredienti: "",
        });
        getProduct();
    } */
    return (
        <div>
            <h1 className="mb-3">
                Aggiungi un prodotto
            </h1>
            <form /* onSubmit={this.add} */ >
                <div className = "row justify-content-center">
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Product</label>
                        <input type="text" className="form-control"  value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Image</label>
                        <input type="text" className="form-control" value={immagine} onChange={(e) => setImmagine(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add price</label>
                        <input type="number" className="form-control" value={prezzo} onChange={(e) => setPrezzo(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add date</label>
                        <input type="date" className="form-control" value={data} onChange={(e) => setData(e.target.value)} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Quantity</label>
                        <input type="number" className="form-control" value={quantita} onChange={(e) => setQuantita(e.target.value)}  />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add ingredients</label>
                        <input type="text" className="form-control" value={ingredienti} onChange={(e) => setIngredienti(e.target.value)}  />
                    </div>
                </div>
                <button className="btn btn-primary align-self-end" onClick={formSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default AddCard;