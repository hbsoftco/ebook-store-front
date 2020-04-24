<template>
  <article class="type-page">
    <header class="entry-header">
      <h1 class="entry-title">Cart</h1>
    </header>
    <!-- .entry-header -->
    <div class="entry-content">
      <div class="woocommerce">
        <form action="#" method="post">
          <table class="shop_table shop_table_responsive cart">
            <thead>
              <tr>
                <th class="product-remove">&nbsp;</th>
                <th class="product-thumbnail">&nbsp;</th>
                <th class="product-name">Product</th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-subtotal">Total</th>
              </tr>
            </thead>
            <tbody>
              <CartItem v-for="cartitem in cartitems" :key="cartitem.id" :cartitem="cartitem" />

				<Coupon />

            </tbody>
          </table>
        </form>

		<CartTotals />

      </div>
    </div>
    <!-- .entry-content -->
  </article>
</template>
<script>
import CartItem from "./CartItem"
import Coupon from "./Coupon"
import CartTotals from "./CartTotals"
export default {
  name: "CartComponent",
  components: {
	CartItem,
	Coupon,
	CartTotals
  },
  data() {
    return {
      cartitems: [
        {
          id: 1,
          image: "images/header/1.jpg",
          Product: "Write Your Title Here",
          Price: "$35.00",
          Total: "$35.00"
		},
	   {
          id: 2,
          image: "images/header/2.jpg",
          Product: "Write Your Title Here",
          Price: "$16.00",
          Total: "$32.00"
		},
        {
          id: 3,
          image: "images/header/3.jpg",
          Product: "Write Your Title Here",
          Price: "$16.00",
          Total: "$32.00"
		},
		       {
          id: 4,
          image: "images/header/1.jpg",
          Product: "Write Your Title Here",
          Price: "$16.00",
          Total: "$32.00"
        },
      ]
    };
  }
};
</script>