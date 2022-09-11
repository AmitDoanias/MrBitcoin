import { useEffect } from 'react';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { bitcoinService } from '../services/bitcoinService';

export const Statitics = () => {

    const [data, setData] = useState()
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const data = await bitcoinService.getMarketPrice()
        console.log('data', data)
        setData(data)
    }


    if (!data) return <div>Loading...</div>
    return <div className="statitics">
        <h2>hello from statitics</h2>



        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="y" stroke="#1199fa" />
            <CartesianGrid stroke="#1199fa" strokeDasharray="0.3 0.8" />
            <XAxis dataKey="date" />
            <Tooltip />
            <YAxis />
        </LineChart>

    </div >
}