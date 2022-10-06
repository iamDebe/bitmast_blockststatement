import React from "react";
import {Link} from "react-dom"

const AccountSummary = () => {
    
    return (  
        <>
            <div className="row txn__history">
                <div className="col-md-4 offset-md-1 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 wrapper txn__table--sum">
                    <h5>Summary</h5>
                    <hr/>
                    <h5>Balance</h5>
                    <h5>Value</h5>
                </div>
                <div className="col-md-4 offset-md-1 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 wrapper txn__table--null">
                    
                </div>
            </div>
        </>
    );
}
 
export default AccountSummary;