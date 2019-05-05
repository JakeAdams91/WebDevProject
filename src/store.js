import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartPrice: 0,
    toggleCart: false,
    selectedCategory: null,
    products: [
      { qty: 1, sku: '001', img: require('./assets/pvs14.jpg'), title: 'Night Vision Goggles', category: 'Gadgets', price: 3299.99, stock: '15', description: 'ATNs PVS14 are rugged, lightweight and versatile Night Vision Monocular designed for the most demanding of nighttime applications. The ATN PVS14 can be handheld, head/helmet-mounted for hands free usage or adapted to cameras/camcorders. Originally designed for the U.S. military, these units are of the highest quality in optics, design and functionality. The ATN PVS14 is an outstanding choice for professional Night Vision applications.' },
      { qty: 1, sku: '002', img: require('./assets/couch.jpg'), title: 'Superb Couch', category: 'Home', price: 1500.00, stock: '2', description: 'Talk about fine lines and great curves. That’s the beauty of the Darcy sofa—made to suit your appreciation for clean, contemporary style. A striking flared frame, comfy pillow top armrests and ultra-soft upholstery complete this fashion statement.' },
      { qty: 1, sku: '003', img: require('./assets/spoons.jpg'), title: 'Polymer Spoon set', category: 'Home', price: 15.99, stock: '100', description: 'This hardy spoon might not look like much, but it is crafted of the highest grade polymers found in modern military weapons. Comes in a set of 5,000 tactical spoons' },
      { qty: 1, sku: '004', img: require('./assets/endtable.jpg'), title: 'Solid Wood End Table', category: 'Home', price: 385.00, stock: '5', description: 'Solid wood End table, hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { qty: 1, sku: '005', img: require('./assets/entrytable.jpg'), title: 'Rustic Entry Table', category: 'Home', price: 400.00, stock: '15', description: '100% hardwood Entry table, hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { qty: 1, sku: '006', img: require('./assets/entrytableII.jpg'), title: 'Painted entry Table', category: 'Home', price: 475.00, stock: '6', description: '100% hardwood Entry table whitewashed for that rustic old time look. hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { qty: 1, sku: '007', img: require('./assets/knifeblock.jpg'), title: 'Magnetic KnifeBlock', category: 'Home', price: 185.00, stock: '32', description: 'Custom hardwood knifeblocks utilizing neodymium magnets to keep your knives secure all while looking incredibly stylish' },
      { qty: 1, sku: '008', img: require('./assets/IMG_6851.jpg'), title: 'Woven Purse', category: 'Fashion', price: 65.99, stock: '3', description: 'Expertly Hand woven from Water Hyacinth, a renewable and environmentally friendly bag' },
      { qty: 1, sku: '009', img: require('./assets/IMG_6866.jpg'), title: 'Hand Made bag', category: 'Fashion', price: 72.35, stock: '3', description: 'Expertly Hand woven from Water Hyacinth, a renewable and environmentally friendly bag' },
      { qty: 1, sku: '010', img: require('./assets/IMG_6891.jpg'), title: 'Woven bag', category: 'Fashion', price: 55, stock: '5', description: 'Expertly Hand woven from Water Hyacinth, a renewable and environmentally friendly bag' },
      { qty: 1, sku: '011', img: require('./assets/IMG_6907.jpg'), title: 'Woven Purse', category: 'Fashion', price: 98.25, stock: '6', description: 'Expertly Hand woven from Water Hyacinth, a renewable and environmentally friendly bag' },
      { qty: 1, sku: '012', img: require('./assets/IMG_7372.jpg'), title: 'Hand-made Earrings', category: 'Fashion', price: 35.55, stock: '4', description: 'Hand crafted Earrings, made of the highest quality silk threads' },
      { qty: 1, sku: '013', img: require('./assets/IMG_7390.jpg'), title: 'Hand-made Earrings', category: 'Fashion', price: 38, stock: '4', description: 'Hand crafted Earrings, made of the highest quality silk threads' },
      { qty: 1, sku: '017', img: require('./assets/arduino.jpg'), title: 'Arduino micro chip', category: 'Gadgets', price: 24.99, stock: '12', description: 'Arduino Uno Rev. 3 Microcontroller Board is based on the Microchip Technology ATmega328 8-bit Microcontroller (MCU). Arduino Uno features 14 digital input/output pins (six of which can be used as PWM outputs)' },
      { qty: 1, sku: '018', img: require('./assets/ARD-NANO30.jpg'), title: 'Arduino Nano', category: 'Gadgets', price: 30.61, stock: '12', description: 'Arduino Nano 3.0 is a small, complete, and breadboard-friendly surface mount embedded version of Arduino with integrated USB' },
      { qty: 1, sku: '019', img: require('./assets/trijicon.jpg'), title: 'Trijicon Thermal Optic', category: 'Gadgets', price: 7499, stock: '1', description: 'a compact yet powerful scope designed specifically for hunters.' },
      { qty: 1, sku: '020', img: require('./assets/fossil.jpg'), title: 'Gen 4 Smartwatch', category: 'Gadgets', price: 275, stock: '3', description: 'Classic Design. Modern Tech. This 45mm Explorist HR touchscreen smartwatch features a tan leather strap, and lets you track your heart rate, receive notifications, customize your dial and more.' },
      // { qty: 1, sku: '021', img: require('./assets/'), title: '', category: 'Gadgets', price: , stock: '', description: '' },
      // { qty: 1, sku: '022', img: require('./assets/'), title: '', category: 'Gadgets', price: , stock: '', description: '' },
      // { qty: 1, sku: '023', img: require('./assets/'), title: '', category: 'Gadgets', price: , stock: '', description: '' },
      // { qty: 1, sku: '024', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '025', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '026', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '027', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '028', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '029', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { qty: 1, sku: '030', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' }
    ]
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getCart (state) {
      return state.cart
    },
    getCartPrice (state) {
      return state.cartPrice
    },
    toggleCart (state) {
      return state.toggleCart
    },
    categories: (state) => {
      return state.products.reduce((catList, product) => {
        if (catList.indexOf(product.category) === -1) {
          catList.push(product.category)
        }
        return catList
      }, [])
    },
    dealsOfDay: (state) => {
      return state.products.sort(() => 0.5 - Math.random()).slice(0, 4).sort((a, b) => a.sku - b.sku)
    },
    productsByCategory: (state) => {
      return (category) => {
        return state.products.filter(product => {
          return product.category === category
        }).sort((a, b) => a.sku - b.sku)
      }
    },
    selectedProducts: (state, getters) => {
      return getters.productsByCategory(state.selectedCategory)
    }
  },
  mutations: {
    // toggles shopping cart state
    toggleCart (state, toggle) {
      if (toggle === null) {
        state.toggleCart = !state.toggleCart
      } else {
        state.toggleCart = toggle
      }
    },
    // sets user specified category
    setSelectedCategory (state, category) {
      state.selectedCategory = category
    },
    // pushes selected items to Shopping Cart
    addToCart: (state, product) => {
      let tempArr = state.cart.findIndex(prod => product.sku === prod.sku)
      if (tempArr > -1) {
        state.cart[tempArr].qty += 1
        state.cartPrice += product.price
      } else {
        state.cart.push(product)
        state.cartPrice += product.price
      }
    },
    // reduce stock count
    reduceStock: (state, product) => {
      product.stock = product.stock - 1
      let tempProducts = state.products.filter(stateProduct => stateProduct.sku !== product.sku)
      tempProducts.push(product)
      state.products = tempProducts
    },
    // remove item from shopping cart, returning the stock and qty levels.
    removeCartItem: (state, product) => {
      let index = state.cart.indexOf(product)
      if (product.qty > 1) {
        state.cartPrice -= state.cart[index].price
        state.cart[index].stock += 1
        state.cart[index].qty -= 1
      } else if (index > -1) {
        state.cartPrice -= state.cart[index].price
        state.cart[index].stock += 1
        state.cart.splice(index, 1)
      }
    }
  }
})
