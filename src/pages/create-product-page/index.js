import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Loader} from '@/components/assets/icons';

const CreateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    currencyCode: '',
    currencySymbol: '',
    quantity: '',
    imageURL: '',
    productDetails: '',
    status: 'ACTIVE',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    // Validate for empty inputs
    const emptyInputs = Object.values(formData).filter(value => value === '');
    if (emptyInputs.length > 0) {
      toast.error('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
        formData,
      );
      setIsLoading(false);
      toast.success('Product added successfully');

      // Clear form after successful submission
      setFormData({
        productName: '',
        price: '',
        currencyCode: '',
        currencySymbol: '',
        quantity: '',
        imageURL: '',
        productDetails: '',
        status: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-white relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Add product</h3>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                for="productName"
                className="text-sm font-medium text-gray-900 block mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                id="productName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Apple Imac 27”"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="price"
                className="text-sm font-medium text-gray-900 block mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="2300"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="currencyCode"
                className="text-sm font-medium text-gray-900 block mb-2">
                Currency code
              </label>
              <input
                type="text"
                name="currencyCode"
                value={formData.currencyCode}
                onChange={handleChange}
                id="currencyCode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="USD"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="currencySymbol"
                className="text-sm font-medium text-gray-900 block mb-2">
                Currency symbol
              </label>
              <input
                type="text"
                name="currencySymbol"
                value={formData.currencySymbol}
                onChange={handleChange}
                id="currencySymbol"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="$"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="quantity"
                className="text-sm font-medium text-gray-900 block mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                id="quantity"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="10"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                for="imageURL"
                className="text-sm font-medium text-gray-900 block mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                id="imageURL"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                required
                pattern="https?://.+"
              />
            </div>

            <div className="col-span-full">
              <label
                for="productDetails"
                className="text-sm font-medium text-gray-900 block mb-2">
                Product Details
              </label>
              <textarea
                id="productDetails"
                name="productDetails"
                value={formData.productDetails}
                onChange={handleChange}
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="p-6 border-t border-gray-200 rounded-b flex justify-end">
        <button
          className="text-white w-[300px] h-11  bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
          type="submit"
          onClick={handleSubmit}>
          {isLoading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            'Add'
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
