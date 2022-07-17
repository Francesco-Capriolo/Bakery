import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";


const CardList = (props) => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Lista dei prodotti</h1>
                <hr />
                <Link to="/add">
                    <button className="btn btn-outline-primary m-2">Add Contact</button>
                </Link>
            </div>
            <div className = "row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card">
                    {/* <img src={this.props.card.immagine} className="card-img-top img-fluid" alt="..." style = {{ height:"15rem" }} /> */}
                        <div className="card-body">
                            <h5 className="card-title">{nome}</h5>
                            <p className="card-text">{quantita} </p>
                            <button type="submit" className="btn btn-outline-danger" /* onClick={() => props.removeId(id)} */ >elimina</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 


export default CardList;