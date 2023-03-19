import React, { useState, useEffect } from "react";

const FetchData=()=>{
    const [list, setList] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            getList()
        }, 4000);
    }, [])

    const getList = async () => {
        let result = await fetch("http://localhost:6060/tickers")
        result = await result.json()
        setList(result)
    }
    return(
        <div>
            <ul className='ul_top_hypers'>
                <li>#</li>
                <li>Name</li>
                <li>Last</li>
                <li>Buy</li>
                <li>Sell</li>
                <li>volume</li>
                <li>base_unit</li>
            </ul>
            {
                list.length > 0 ? list.map((item, index)=>
                <ul className='ul_top_hypers'>
                                <li key="{index.sno}">{index + 1}</li>
                                <li key="{index.name}">{item.name}</li>
                                <li key="{index.last}">{item.last}</li>
                                <li key="{index.buy}">${item.buy}</li>
                                <li key="{index.sell}">{item.sell}</li>
                                <li key="{index.volume}">{item.volume}</li>
                                <li key="{index.base}">{item.base_unit}</li>
                </ul>
                                        )
                                            : <h5>No Record</h5>
            }
        </div>
    )
}


export default FetchData