import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';






const Statistics = () => {
    const productsData=
    [
        { "product": "Smartphone X1", "sales": 500, "category": "Smartphones", "making_year": 2023 },
        { "product": "Wireless Earbuds Pro", "sales": 300, "category": "Audio", "making_year": 2023 },
        { "product": "Smartwatch Z3", "sales": 250, "category": "Wearables", "making_year": 2022 },
        { "product": "Gaming Laptop Elite", "sales": 150, "category": "Computers", "making_year": 2022 },
        { "product": "Portable Charger 5000mAh", "sales": 600, "category": "Accessories", "making_year": 2023 },
        { "product": "4K Action Camera", "sales": 200, "category": "Cameras", "making_year": 2021 },
        { "product": "Bluetooth Speaker Max", "sales": 400, "category": "Audio", "making_year": 2023 },
        { "product": "VR Headset Ultra", "sales": 180, "category": "Gaming", "making_year": 2022 },
        { "product": "Home Assistant Hub", "sales": 320, "category": "Smart Home", "making_year": 2023 },
        { "product": "Fitness Tracker Lite", "sales": 350, "category": "Wearables", "making_year": 2022 },
        { "product": "Drone SkyExplorer", "sales": 100, "category": "Drones", "making_year": 2021 },
        { "product": "Smart TV 55”", "sales": 220, "category": "Home Entertainment", "making_year": 2023 }
    ];
    return (
<div className='mt-24 mb-24  mx-auto bg-slate-200 border-2 p-10' style={{ width: '100%', height: 300 }}>
<ResponsiveContainer>
  <ComposedChart
    width={500}
    height={400}
    data={productsData}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis dataKey="product" scale="band" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="category" fill="#8884d8" stroke="#8884d8" />
    <Bar dataKey="sales" barSize={30} fill="#413ea0" />
    <Line type="monotone" dataKey="making_year" stroke="#ff7300" />
  </ComposedChart>
</ResponsiveContainer>
</div>
    );
};

export default Statistics;








  
   
