import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './TaskTwo.css'
import Weather from './Weather';

const TaskTwo = () => {
    const [conutry, setCountry] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://restcountries.com/v3.1/name/${data.conutry.toLowerCase()}`)
            .then(res => res.json())
            .then(result => setCountry(result))
        reset()
    };
    return (
        <div className=' main-body'>
            <div className='container pt-5'>
                <div className='text-center'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("conutry")} required className='conutry-input-fild' placeholder='Enter Country' />
                        <input type="submit" className='submit-btn' />
                    </form>
                </div>


                {conutry.length &&
                    <div className='mt-5'>
                        {
                            conutry.map(result => (<Weather
                                result={result}
                            >

                            </Weather>
                            ))}
                    </div>
                }
            </div>


        </div>
    );
};

export default TaskTwo;