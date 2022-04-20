import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Chart = () => {

    const data = [
        {day:1, progress: 200},
        {day:2, progress: 1000},
        {day:3, progress: 2000},
        {day:4, progress: 500},
        {day:5, progress: 600},
        {day:6, progress: 900},
        {day:7, progress: 230},
        {day:8, progress: 270},
        {day:9, progress: 570},
        {day:10, progress: 800},
        {day:11, progress: 400},
        {day:12, progress: 900},
        {day:13, progress: 1900},
        {day:14, progress: 1500},
        {day:15, progress: 300},
    ]


    return (
        <>
            <BarChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="day" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="progress" fill="#30D5C8" background={{ fill: '#eee' }} />
            </BarChart>
        </>
    )
}

export default Chart