import React, { useEffect, useState } from 'react';
import './TaskTwo.css'

const TaskTwo = () => {
    const [data, setData] = useState([])
    console.log(data)




    let number = 0;
    useEffect(() => {
        setInterval(() => {
            newdata()
            number++
        }, 5000);
    }, []);

    const newdata = () => {
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${number}`)
            .then((res) => res.json())
            .then((result) => {
                setData(...data, result)

            });
    }


    return (
        <div>
            <h1>{data.length}</h1>

        </div>
    );
};

export default TaskTwo;