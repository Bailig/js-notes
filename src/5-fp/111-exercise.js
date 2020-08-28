const pipe = (...fns) => (data, beforeEach = () => {}) => {
  return fns.reduce((result, fn) => {
    beforeEach(result);
    return fn(result);
  }, data);
};

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const addItemToCart = (item) => (user) => {
  return {
    ...user,
    cart: [...user.cart, item],
  };
};

const addTaxToCartItems = (user) => {
  return {
    ...user,
    cart: user.cart.map((i) => ({ ...i, price: i.price * 1.3 })),
  };
};

const buyItems = (user) => {
  return {
    ...user,
    purchases: [...user.purchases, ...user.cart],
    cart: [],
  };
};

const emptyCart = (user) => {
  return {
    ...user,
    cart: [],
  };
};

const purchaseHistory = [];

const trackPurchaseHistory = (user) => {
  purchaseHistory.push(user);
  return user;
};

const item = { name: "laptop", price: 3000 };

const newUser = pipe(
  addItemToCart(item),
  addTaxToCartItems,
  buyItems,
  emptyCart
)(user, trackPurchaseHistory);

console.log(purchaseHistory);
