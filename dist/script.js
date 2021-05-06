new Vue({
  el: "#app",
  data: {
    wipers: [
      {
        id: 1,
        name: "Front",
        price: 5.99,
        quantity: 0,
      },
      {
        id: 2,
        name: "Rear",
        price: 2.99,
        quantity: 0,
      },
      {
        id: 3,
        name: "Driver Side",
        price: 3.39,
        quantity: 0,
      },
      {
        id: 4,
        name: "Passenger Side",
        price: 3.39,
        quantity: 0,
      },
    ],
    checkout: false,
  },
  computed: {
    sum: function () {
      return this.wipers.reduce((sum, wiper) => {
        return sum + wiper.price * wiper.quantity;
      }, 0);
    },
  },
  methods: {
    add(wiper) {
      wiper.quantity += 1;
    },
    decrease(wiper) {
      if (wiper.quantity > 1) {
        wiper.quantity -= 1;
      } else {
        this.remove(wiper.id);
      }
    },
    remove(wiperIDToRemove) {
      this.wipers = this.wipers.filter((wiper) => {
        return wiper.id !== wiperIDToRemove;
      });
    },
    checkoutCart() {
      this.checkout = !this.checkout;
    },
  },
});
