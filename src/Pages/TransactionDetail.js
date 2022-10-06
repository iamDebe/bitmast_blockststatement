import React from "react";
import {Link }from "react-router-dom"
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const TransactionDetail = () => {
    return ( 
        <>
        <Header/>
             <section className=" container">
                <div className="custom__row--1">
                    <div className="row txn__table--row">
                        <div className="col-md-8 col-sm-12 txn__table--1">
                            <div className="custom__row--2">
                                <h3 className="txn__table--caption">Transaction Details</h3>
                                <table className="table table-hover bg-light table-responsive txn__table">
                                
                                <thead className="t-head">
                                
                                </thead>
                                <tbody>
                                    <tr >
                                    <th scope="row">Transaction Hash</th>
                                    <td>0xb11205ae5e03de68dcde2d434679b9b978ad0a6d19c05291c6c82bff5539e061</td>
                                    </tr>
                                    <tr >
                                    <th scope="row">Status</th>
                                    <td >Successful...</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Block</th>
                                        <td >14717640</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Confirmation</th>
                                        <td >125</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row" ></th>
                                        <td  ></td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row" ></th>
                                        <td ></td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Timestamp</th>
                                        <td >May-05-2022 02:02:25 PM +UTC</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Sender</th>
                                        <td >0xb11205ae5e03de68dcde2d434679b9b978ad0a6d19c05291c6c82bff5539e061</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Receiver</th>
                                        <td >0xb11205ae5e03de68dcde2d434679b9b978ad0a6d19c05291c6c82bff5539e061</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Value</th>
                                        <td >$88.09</td>
                                        
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Fee</th>
                                        <td >$3.84</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Comment</th>
                                        <td >For exchange to naira.</td>
                                    
                                    </tr>
                                    
                                
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3  offset-1 col-sm-12 txn__table--2">
                            <div className="custom__row--2 ">
                                <h3 className="txn__table--caption">Gas Price</h3>
                                <table className="table table-hover  table-border bg-light table-responsive txn__table txn__table--2">
                                
                                    <thead className="t-head">
                                    
                                    </thead>
                                <tbody>
                                    <tr >
                                    <th scope="row">Gas Price</th>
                                    
                                    </tr>
                                    <tr >
                                    <td scope="row"> 0.000000066874833728 Ether (66.874833728 Gwei)</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Gas Limit & Usage by Txn</th>
                                    </tr>
                                    <tr >
                                        <td scope="row">21,000 | 21,000 (100%)</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Gas Fees (Base)</th>
                                    
                                    </tr>
                                    <tr >
                                        <td scope="row">65.370239673 Gwei</td>
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Gas Fees (Base)</th>
                                    
                                    </tr>
                                    <tr >
                                        <td scope="row">65.370239673 Gwei</td>
                                        
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Gas Fees (Max)</th>
                                        
                                    
                                    </tr>
                                    <tr >
                                        <td scope="row">65.370239673 Gwei</td>
                                        
                                    
                                    </tr>
                                    <tr >
                                        <th scope="row">Gas Fees (Priority) 

                                        </th>
                                        
                                    
                                    </tr>
                                    <tr >
                                        <td scope="row">65.370239673 Gwei</td>
                                        
                                    
                                    </tr>
                                    
                                
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                <button className="custom__btn txn__table--btn col-md-6 offset-3 col-sm-6 offset-3  col-xs-8 offset-2 mt-4"><a href="" className="txn__table--btn-text">Login to save transaction history</a></button>
                
                </div>
            </section>
        <Footer/>
        </>
     );
}
 
export default TransactionDetail;