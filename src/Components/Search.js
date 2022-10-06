import React from "react";
import {Link} from "react-router-dom"

const Search = () => {
    return (
        <>
            <div className="hero custom__row--1">
            <div className="col-sm-6 offset-sm-3 col-10 offset-1 ">
                <div className="input-group mb-3 custom__input ">
                    <button className="btn dropdown-toggle filter__list--btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter by Txn ID</button>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <button className="input-group-text search--icon" id="search--icon">
                        <span><i className="bi bi-search text-light "></i></span></button>
                </div>
            </div>
            </div>
        </>
      );
}
 
export default Search;