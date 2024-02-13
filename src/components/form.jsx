import React from 'react';

const Form = ({
  handleChange,
  handleSelect,
  handleSubmit,
  formData,
  currencyJson,
}) => {
  return (
    <div className="p-6 space-y-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="productName"
              className="text-sm font-medium text-gray-900 block mb-2">
              Product name
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
              htmlFor="price"
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
              htmlFor="countries"
              className="text-sm font-medium text-gray-900 block mb-2">
              Select currency code
            </label>
            <select
              id="countries"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
              value={formData.currencyCode}
              onChange={handleSelect}>
              <option defaultValue="">Choose currency code.</option>
              {currencyJson.map(each => (
                <option value={each.code} key={each.code}>
                  {each.code}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="currencySymbol"
              className="text-sm font-medium text-gray-900 block mb-2">
              Currency symbol
            </label>
            <input
              type="text"
              name="currencySymbol"
              value={formData.currencySymbol}
              disabled
              id="currencySymbol"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 cursor-not-allowed"
              placeholder="$"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="quantity"
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
              htmlFor="imageURL"
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
              placeholder="https://example.com/image.jpg"
              required
              pattern="https?://.+"
            />
          </div>

          <div className="col-span-full">
            <label
              htmlFor="productDetails"
              className="text-sm font-medium text-gray-900 block mb-2">
              Product details
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
  );
};

export default Form;
