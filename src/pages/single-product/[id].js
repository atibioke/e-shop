import React, {useEffect, useState, useContext} from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import axios from 'axios';
import {useParams} from 'next/navigation';
import {CountContext} from '../_app';
import {updateCart} from '@/components/helper';
import {toast} from 'react-toastify';
import Cart from '@/components/cart';

const SingleProductPage = ({data}) => {
  const {id} = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const {setRender, render} = useContext(CountContext);

  useEffect(() => {
    const foundItem = data.find(each => each.id == id);
    setCurrentProduct(foundItem);
  }, [data, id]);

  const handlePlus = () => {
    setQuantity(prev => prev + 1);
  };

  const handleMinus = () => {
    setQuantity(prev => prev - 1);
  };

  const addToCart = () => {
    const updateCartCheck = updateCart(currentProduct, quantity);
    if (updateCartCheck) {
      setRender(!render);
      toast.success('Item Added Successfully');
    } else {
      toast.error('Item Already In Cart');
    }
  };

  return (
    <div className="bg-white   pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
              <img
                className="w-full h-full object-contain"
                src={currentProduct?.imageLocation}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={addToCart}
                  className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button
                  onClick={() => setOpen(true)}
                  className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800  mb-2">
              {currentProduct?.name}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 ">Price:</span>
                <span className="text-gray-600 ">
                  {currentProduct?.currencySymbol}
                  {currentProduct?.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Availability:</span>
                <span className="text-gray-600 ">
                  {currentProduct?.status === 'ACTIVE'
                    ? 'In Stock'
                    : 'Not In Stock'}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 ">Quantity:</span>
              <div className="flex items-center mt-2">
                <button
                  className="w-6 h-6 rounded-full bg-blue-500 text-white flex justify-center items-center  mr-2 cursor-pointer disabled:bg-gray-300 disabled:text-black"
                  onClick={handleMinus}
                  disabled={quantity === 1}>
                  -
                </button>

                <p>{quantity}</p>

                <button
                  className="w-6 h-6 rounded-full bg-blue-500 text-white flex justify-center items-center  ml-2 cursor-pointer disabled:bg-gray-300 disabled:text-black"
                  onClick={handlePlus}
                  disabled={currentProduct?.quantity === quantity}>
                  +
                </button>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 ">
                Product Description:
              </span>
              <p className="text-gray-600  text-sm mt-2">
                {currentProduct?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
};

export async function getServerSideProps({}) {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL);

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        isError: true,
      },
    };
  }
}

export default SingleProductPage;
