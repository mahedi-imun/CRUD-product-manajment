import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            const url = `http://localhost:5000/product`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if(result.acknowledged == true ){
                        alert('your product added')
                    }
                })
    };
    return (
        <div className='w-50 mx-auto mt-4'>
            <h5> you cam add any product</h5>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' required placeholder='product img ulr'  {...register("img")} />
                <input className='mb-3' required placeholder='product name' {...register("name")} />
                <input className='mb-3' required placeholder='seller' {...register("seller")} />
                <input className='mb-3' required placeholder='category' {...register("category")} />
                <input className='mb-3' required placeholder='price' type="number" {...register("price")} />
                <input type="submit" value='add product' />
            </form>
        </div>
    );
};

export default AddProduct;