<template>
	        <div class="cart-collaterals">
          <div class="cart_totals">
            <h2>Cart Totals</h2>
            <table class="shop_table shop_table_responsive">
              <tbody>
                <tr class="cart-subtotal">
                  <th>Subtotal</th>
                  <td data-title="Subtotal">
                    <span class="amount">$120.00</span>
                  </td>
                </tr>
                <tr class="order-total">
                  <th>Total</th>
                  <td data-title="Total">
                    <strong>
                      <span class="amount">$120.00</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="wc-proceed-to-checkout">
              <a
                href="http://localhost/0/checkout/"
                class="checkout-button button alt wc-forward"
              >Proceed to Checkout</a>
            </div>
          </div>
        </div>
</template>
<script>
export default {
	name:"CartTotals"
}
</script>