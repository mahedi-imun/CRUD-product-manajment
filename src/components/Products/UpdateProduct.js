import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const {id} = useParams()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if(data.modifiedCount ){
                    Swal.fire(
                        'updated!',
                        'your product',
                        'success'
                      )

                }
            })
    };
    return (
        <div className='w-50 mx-auto mt-4'>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='change name' {...register("name")} />
                <input className='mb-3' placeholder='change category' {...register("category")} />
                <input className='mb-3' placeholder='change price' {...register("price")} />
                <input type="submit" value='save change' />
            </form>

        </div>
    );
};

export default UpdateProduct;