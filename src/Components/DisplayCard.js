import React from "react";
import {Link} from "react-router-dom"

const DisplayCard = () => {
    return ( 
        <div className=" custom__card--container  container wrapper ">
                <div className="car custom__card" style={{width: "18rem"}}>
                    <img src="assets/images/everywhere access2 1.svg" className="card-img-top custom__card--img" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title custom__card--title">Anywhere Access</h5>
                    <p className="card-text">Our cloud platform allows our services to run on multiple platforms giving our users access on all kinds of devices.</p>
                    </div>
                </div>
                <div className="car custom__card" style={{width: "18rem"}}>
                    <img src="assets/images/NOTIFICATION 2.svg" className="card-img-top custom__card--img" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title custom__card--title">Transaction notification</h5>
                    <p className="card-text">With timely notifications for every transaction, users do not need to panic about transactions any longer.</p>
                    </div>
                </div>
                <div className="car custom__card" style={{width: "18rem"}}>
                    <img src="assets/images/Layer_x0020_1.svg" className="card-img-top custom__card--img" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title custom__card--title">Blockchain statement</h5>
                    <p className="card-text">For every transaction registered on the blockchain, you can select any particular statement you need.</p>
                    </div>
                </div>
                <div className="car custom__card" style={{width: "18rem"}}>
                    <img src="assets/images/Layer_x0020_1 (1).svg" className="card-img-top custom__card--img" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title custom__card--title">Transaction Confirmation</h5>
                    <p className="card-text">Confirmed transactions can be viewed real time which can give our users the flexibility to make timely decisions.</p>
                    </div>
                </div>
            </div>
     );
}
 
export default DisplayCard;