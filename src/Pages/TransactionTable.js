import React from "react";
import {Link} from "react-router-dom"
import AccountSummary from "../Components/AccountSummary";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const TransactionTable = () => {
    return (
        <>
        <Header />
        
        <section className="container">
            <div className="custom__row--1">
                <AccountSummary />
                <div class="custom__row--2 row ">
                    <div class="col-md-10 0ffset-1  ">
                    <table class="table table-hover bg-light table-responsive text-center txn__history--table wrapper">
                    
                        <thead class="t-head">
                        <tr>
                            <th>
                            Serial
                            </th>
                            <th>
                            Transaction Hash
                            </th>
                            <th>
                            Block
                            </th>
                            <th>
                            Timestamp
                            </th>
                            <th>
                            Sender
                            </th>
                            <th>
                            Receiver
                            </th>
                            <th>
                            Value
                            </th>
                            <th>
                            Fee
                            </th>
                            <th>
                            Direction
                            </th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr >
                        <td scope="row">1</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">2</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">3</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">4</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">5</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">6</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">7</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">8</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        <tr >
                        <td scope="row">9</td>
                        <td >0x1563B031BBffB6e...</td>
                        <td>14717640</td>
                        <td>7 hrs ago</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0x1563b031bbffb6e97cc...</td>
                        <td>0.032195589 ETH </td>
                        <td>0.001404371508 ETH </td>
                        <td>IN</td>
                        </tr>
                        
                    
                    </tbody>
                    </table>
                    </div>
                
                </div>
            </div>
        </section>
        <Footer/>
        </>
      );
}
 
export default TransactionTable;