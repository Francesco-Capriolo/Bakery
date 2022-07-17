import React,{useState} from "react";

const AddCard = () => {
    const [formData, setFormData] = useState({
        nome: "",
        immagine: "",
        prezzo: "",
        data: "",
        quantita: "",
        ingredienti: "",
    });
    return (
        <form /* onSubmit={this.add} */ >
            <div className = "row justify-content-center">
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add Product</label>
                    <input type="text" className="form-control"  value={FormData.nome} onChange={(e) => this.setState({FormData,nome:e.target.value})} />
                </div>
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add Image</label>
                    <input type="text" className="form-control" value={FormData.immagine} onChange={(e) => this.setState({FormData,immagine:e.target.value})} />
                </div>
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add price</label>
                    <input type="number" className="form-control" value={FormData.prezzo} onChange={(e) => this.setState({FormData,prezzo:e.target.value})} />
                </div>
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add date</label>
                    <input type="date" className="form-control" value={FormData.data} onChange={(e) => this.setState({FormData,data:e.target.value})} />
                </div>
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add Quantity</label>
                    <input type="number" className="form-control" value={FormData.quantita} onChange={(e) => this.setState({FormData,quantita:e.target.value})}  />
                </div>
                <div className="mb-3 col-10 col-md-8 col-lg-7">
                    <label className="form-label">Add ingredients</label>
                    <input type="text" className="form-control" value={FormData.ingredienti} onChange={(e) => this.setState({FormData,ingredienti:e.target.value})}  />
                </div>
            </div>
            <button className="btn btn-primary align-self-end" >Submit</button>
        </form>
    )
};

export default AddCard;