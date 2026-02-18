import React from 'react'
import { useEffect, useState } from "react";


function Trader_Accountpage() {

  const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;
  const auth2 = localStorage.getItem("userTrader");

  const [Traderdata, setTraderdata] = useState([])

  console.log(auth2)

  useEffect(() => {
    getschemedata();
  }, []);

  function getschemedata() {
    fetch(`${process.env.REACT_APP_API_URL}/trader/get_trader_details/${JSON.parse(auth2).GST_No}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTraderdata(data)
        localStorage.setItem("userTraderAccount", JSON.stringify(data));
      });

  }

  return (
    <>
      <div style={{ marginTop: "100px" }}>Trader_Accountpage</div>
      <p>{Traderdata._id}</p>
      <p>{Traderdata.Trade_Name}</p>
      <p>{Traderdata.Name}</p>
      <p>{Traderdata.GST_No}</p>
      <p>{Traderdata.Mobile}</p>
      <p>{Traderdata.Email}</p>
      <p>{Traderdata.District}</p>
      <p>{Traderdata.Taluka}</p>
      <p>{Traderdata.Administrative_Office}</p>
    </>
  )
}

export default Trader_Accountpage