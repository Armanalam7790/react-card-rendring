import React from 'react'

const ProductCard = ({product, deleteProduct}) => {
  

    
  return (
    <div className='w-[15%]  border p-3 rounded-xl flex  flex-col gap-6'>
        <div className='w-full h-[60%]'>
            <img className='h-50 w-full object-cover rounded-xl' src={product.image} alt="" />

        </div>

        <div className='text-sm capitalize'>
            <p>name : {product.title}</p>
            <p className='text-2xl font-bold text-green-700'>price : ${product.price}</p>
            <p>category : {product.category}</p>
        </div>

        <button
        onClick={()=>{
            // console.log(product.id);
            deleteProduct(product.id)
            
        }}
        className=' py-2 bg-red-700 text-white rounded-xl active:scale-90'>remove</button>
    </div>
  )
}

export default ProductCard