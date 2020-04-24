<template>
                        <tr class="cart_item">
                          <td class="product-remove">
                            <a href="#" class="remove" title>×</a>
                          </td>
                          <td class="product-thumbnail">
                            <a href="#">
                              <img :src="cartitem.image" class alt />
                            </a>
                          </td>
                          <td class="product-name" data-title="Product">
                            <a href="#">{{cartitem.Product}}</a>
                          </td>
                          <td class="product-price" data-title="Price">
                            <span class="amount">{{cartitem.Price}}</span>
                          </td>
                          <td class="product-quantity" data-title="Quantity">
                            <div class="quantity">
                              <input
                                type="number"
                                step="1"
                                min="0"
                                value="1"
                                class="input-text qty text"
                                size="4"
                              />
                            </div>
                          </td>
                          <td class="product-subtotal" data-title="Total">
                            <span class="amount">{{cartitem.Total}}</span>
                          </td>
                        </tr>
</template>
<script>
export default {
	name:"CartItem",
	  props: {
    cartitem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>