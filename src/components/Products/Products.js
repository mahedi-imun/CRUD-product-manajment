
import Swal from 'sweetalert2';
import UseProducts from '../hooks/UseProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = UseProducts([])
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
                const url = `http://localhost:5000/product/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                const remaining = products.filter(p => p._id !== id);
                console.log(remaining);
                setProducts(remaining)
            }
        })

    };
    return (
        <div className='container'>
            <h3>all products </h3>
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Products;