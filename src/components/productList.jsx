import React, {useEffect, useState} from 'react';
import {fetchProduct} from '@/services';
import Link from 'next/link';
import {Loader} from '../../public/assets/icons';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProduct();
      if (!data?.length) return;
      setProducts(data);
    })();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0 ? (
            products?.map(product => (
              <Link key={product.id} href={`product/${product.id}`}>
                <div
                  key={product.id}
                  className="group relative cursor-pointer shadow-md p-4 rounded-sm">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageLocation}
                      alt={product.name}
                      className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.currencySymbol} {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="h-[400px] w-screen flex justify-center items-center">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
