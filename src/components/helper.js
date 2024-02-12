export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const updateCart = (currentProduct, quantity) => {
  const cart = JSON.parse(localStorage.getItem('items')) || null;

  if (!cart) {
    const newProduct = [{...currentProduct, selectedQuantity: quantity}];
    localStorage.setItem('items', JSON.stringify(newProduct));
    return true;
  } else {
    const checkDuplicate = cart.find(
      eachItem => eachItem?.id === currentProduct?.id,
    );

    if (checkDuplicate) {
      return false;
    }

    const newCart = [...cart, {...currentProduct, selectedQuantity: quantity}];

    localStorage.setItem('items', JSON.stringify(newCart));
    return true;
  }
};
