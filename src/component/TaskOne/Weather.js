import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Weather = ({ result }) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const handleClose = () => setShow(false);
    const API_KEY = "5b879a238eb3467baa883111222903"

    const handleShow = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${result?.capital[0].toLowerCase()}&aqi=yes`)
            .then(res => res.json())
            .then(result => setData(result))
        setShow(true)
    };
    return (
        <div className='mt-5'>
            <div className='cart-body'>
                <div>
                    <img src={result.flags?.png} alt="" className='image' />
                </div>
                <div>

                    <h4 className='capital'>Capital : {result?.capital[0]}</h4>
                    <h5 className='population'> Population : {result?.population}</h5>
                    <p>  Latlng : {result?.latlng[0]}</p>
                    <Button onClick={handleShow} className='model-btn'>
                        Capital Weather
                    </Button>
                </div>

                <Modal show={show} onHide={handleClose} className='model-fild' size="lg"
                >
                    <Modal.Body className='model-body'>
                        <div className='Temperature-fild'>
                            <div>
                                <div>
                                </div>
                                <h1>{data?.location?.name}</h1>
                                <div>
                                    <img src={data?.current?.condition?.icon} alt="" className='cloud-icon' />
                                    <span>   {data?.current?.condition?.text}</span>
                                </div>
                                <h4> Temperature : {data?.current?.temp_c}&#8451; </h4>
                            </div>
                            <div>
                                <p>Wind : {data?.current?.wind_mph} mph</p>
                                <p>Precip : {data?.current?.precip_in} in</p>
                                <p>Pressure : {data?.current?.pressure_in} in</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal>

            </div>

        </div >
    );
};

export default Weather;