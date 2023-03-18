import Ticker from './db/ticker.js';

async function getData(){
    const myData= await fetch("https://api.wazirx.com/api/v2/tickers")
    const resp = await myData.json()
    let arr = [];

    for (let i in resp){
        arr.push([i, resp[i]])
    }
    for (let i=0; i< 10; i++){
        const data= new Ticker({
            name:arr[i][1]['name'],
            last: arr[i][1]['last'],
            buy: arr[i][1]['buy'],
            sell: arr[i][1]['sell'],
            volume: arr[i][1]['volume'],
            base_unit: arr[i][1]['base_unit']
        })
        data.save()
    }
}

getData()
// export default getData