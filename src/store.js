import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    selectedCategory: null,
    products: [
      { sku: '001', img: require('./assets/pvs14.jpg'), title: 'Night Vision Goggles', category: 'Gadgets', price: '3,299.99', stock: '15', description: 'ATNs PVS14 are rugged, lightweight and versatile Night Vision Monocular designed for the most demanding of nighttime applications. The ATN PVS14 can be handheld, head/helmet-mounted for hands free usage or adapted to cameras/camcorders. Originally designed for the U.S. military, these units are of the highest quality in optics, design and functionality. The ATN PVS14 is an outstanding choice for professional Night Vision applications.' },
      { sku: '002', img: require('./assets/couch.jpg'), title: 'Superb Couch', category: 'Home', price: '1500.00', stock: '2', description: 'Talk about fine lines and great curves. That’s the beauty of the Darcy sofa—made to suit your appreciation for clean, contemporary style. A striking flared frame, comfy pillow top armrests and ultra-soft upholstery complete this fashion statement.' },
      { sku: '003', img: require('./assets/spoons.jpg'), title: 'High Polymer Spoon set', category: 'Home', price: '15.99', stock: '100', description: 'This hardy spoon might not look like much, but it is crafted of the highest grade polymers found in modern military weapons. Comes in a set of 5,000 tactical spoons' },
      { sku: '004', img: require('./assets/endtable.jpg'), title: 'Solid Wood End Table', category: 'Home', price: '385.00', stock: '5', description: 'Solid wood End table, hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { sku: '005', img: require('./assets/entrytable.jpg'), title: 'Rustic Entry Table', category: 'Home', price: '400.00', stock: '15', description: '100% hardwood Entry table, hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { sku: '006', img: require('./assets/entrytableII.jpg'), title: 'Painted entry Table', category: 'Home', price: '475.00', stock: '6', description: '100% hardwood Entry table whitewashed for that rustic old time look. hand crafted using techniques passed down through the centuries, this piece is masterfully crafted using artisan wood joinery techniques such as Mortise and Tenons, and through mortise breadboards' },
      { sku: '007', img: require('./assets/knifeblock.jpg'), title: 'Magnetic KnifeBlock', category: 'Home', price: '185.00', stock: '32', description: 'Custom hardwood knifeblocks utilizing neodymium magnets to keep your knives secure all while looking incredibly stylish' }
      // { sku: '008', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '009', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '010', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '011', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '012', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '013', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '014', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '015', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '016', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '017', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '018', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '019', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '020', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '021', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '022', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '023', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '024', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '025', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '026', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '027', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '028', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '029', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' },
      // { sku: '030', img: require('./assets/'), title: '', category: '', price: '', stock: '', description: '' }
    ]
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getCart (state) {
      return state.cart
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
    setSelectedCategory (state, category) {
      state.selectedCategory = category
    },
    // pushes selected items to Shopping Cart
    addToCart: (state, product) => {
      state.cart.push(product)
    },
    // reduce stock count
    reduceStock: (state, product) => {
      product.stock = product.stock - 1
      let tempProducts = state.products.filter(stateProduct => stateProduct.sku !== product.sku)
      tempProducts.push(product)
      state.products = tempProducts
    },
    // remove item from shopping cart
    removeCartItem: (state, product) => {
      let index = state.cart.indexOf(product)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {

  }
})
