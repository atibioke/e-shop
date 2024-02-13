import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Loader} from '../../../public/assets/icons';
import {currencyJson} from '@/components/currencyJson';
import Form from '@/components/form';

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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //FUNCTION TO SET CURRENCY SYMBOL.
  const handleSelect = event => {
    const selectedCurrencyCode = event.target.value;
    const selectedCurrency = currencyJson.find(
      currency => currency.code === selectedCurrencyCode,
    );
    if (selectedCurrency) {
      setFormData({
        ...formData,

        currencySymbol: selectedCurrency.symbol,
        currencyCode: selectedCurrency.code,
      });
    }
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
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
        currencyJson={currencyJson}
      />
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
