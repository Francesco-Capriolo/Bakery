import React, { useState,setData } from "react";
import axios from "axios";

const AddCard = () => {
    const baseUrl = 'http://localhost:4000/dolci';
    //funzione pper creare un id e non ripeterlo ciclicamente
    function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const getProduct = async () => {
        await axios.get(baseUrl)
            .then((res) => setData(res.data));
    };

    const [formData, setFormData] = useState({
        id:uuid(),
        nome: "",
        immagine: "",
        prezzo: "",
        data: "",
        quantita: "",
        ingredienti: "",
    });

    const formSubmit = async (e) => {
        const response = await axios.dolci('http://localhost:4000/dolci', formData);
        
        if (response) {
            alert("i dati sono stati aggiunti correttamente")
        } else {
            alert("errore nell'inserimento dei dati")
        }

        setFormData({
            id:uuid(),
            nome: "",
            immagine: "",
            prezzo: "",
            data: "",
            quantita: "",
            ingredienti: "",
        });
        getProduct();
    }
    return (
        <div>
            <h1 className="mb-3">
                Aggiungi un prodotto
            </h1>
            <form /* onSubmit={this.add} */ >
                <div className = "row justify-content-center">
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Product</label>
                        <input type="text" className="form-control"  value={FormData.nome} onChange={(e) => setFormData({FormData,nome:e.target.value})} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Image</label>
                        <input type="text" className="form-control" value={FormData.immagine} onChange={(e) => setFormData({FormData,immagine:e.target.value})} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add price</label>
                        <input type="number" className="form-control" value={FormData.prezzo} onChange={(e) => setFormData({FormData,prezzo:e.target.value})} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add date</label>
                        <input type="date" className="form-control" value={FormData.data} onChange={(e) => setFormData({FormData,data:e.target.value})} />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add Quantity</label>
                        <input type="number" className="form-control" value={FormData.quantita} onChange={(e) => setFormData({FormData,quantita:e.target.value})}  />
                    </div>
                    <div className="mb-3 col-10 col-md-8 col-lg-7">
                        <label className="form-label">Add ingredients</label>
                        <input type="text" className="form-control" value={FormData.ingredienti} onChange={(e) => setFormData({FormData,ingredienti:e.target.value})}  />
                    </div>
                </div>
                <button className="btn btn-primary align-self-end" onClick={formSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default AddCard;