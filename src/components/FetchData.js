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
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last</th>
                        <th>Buy</th>
                        <th>Sell</th>
                        <th>volume</th>
                        <th>base_unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index)=>(
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.last}</td>
                                <td>{item.buy}</td>
                                <td>{item.sell}</td>
                                <td>{item.volume}</td>
                                <td>{item.base_unit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default FetchData