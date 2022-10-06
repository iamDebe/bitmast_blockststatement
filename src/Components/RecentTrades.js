import React from "react";
import {Link }from "react-router-dom"

const RecentTrades = () => {
    return (
        <section className="trade__section">
        <h4 className="section__title col-md-10 offset-1">Recent Trades</h4>
        <div className="contain wrapper px-md-5 px-5">
            <div className="recent__trade custom__ro row ">
                    <div className=" custom__co col-md-2 mb-5 col-6 ">
                        <span>BNB/BUSD <i className="green">+0.41%</i></span><br/>
                        <span className="trade__units">389.3</span><br/>
                        <small>$311.44</small>
                    </div>
                    <div className=" custom__co col-md-2 mb-5 col-6">
                        <span>BTC/BUSD <i className="green">+1.26%</i></span><br/>
                        <span className="trade__units">38,619.98</span><br/>
                        <small>$30,985.98</small>
                    </div>
                    <div className=" custom__co col-md-2 mb-5 col-6">
                        <span>APE/BUSD  <i className="red">-7.57%</i></span><br/>
                        <span className="trade__units">14.9618</span><br/>
                        <small>$11.97</small>
                    </div>
                    <div className=" custom__co col-md-2 mb-5 col-6">
                        <span>ETH/BUSD <i className="green">+2.46% </i></span><br/>
                        <span className="trade__units">2,865.58</span><br/>
                        <small>$2,292.46</small>
                    </div>
                    <div className=" custom__co col-md-2 mb-3 col-6">
                        <span>GMT/BUSD <i className="red">-4.32%</i></span><br/>
                        <span className="trade__units">3.24751</span><br/>
                        <small>$2.60</small>
                    </div>
                 </div>
        </div>
        
        </section>
      );
}
 
export default RecentTrades;