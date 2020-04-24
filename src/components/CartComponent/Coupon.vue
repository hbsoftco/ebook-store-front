<template>
	              <tr>
                <td colspan="6" class="actions">
                  <div class="coupon">
                    <label for="coupon_code">Coupon:</label>
                    <input
                      type="text"
                      name="coupon_code"
                      class="input-text"
                      id="coupon_code"
                      value
                      placeholder="Coupon code"
                    />
                    <input type="submit" class="button" name="apply_coupon" value="Apply Coupon" />
                  </div>
                  <input type="submit" class="button" name="update_cart" value="Update Cart" />
                  <input type="hidden" id="_wpnonce" name="_wpnonce" value="82cdf479ab" />
                  <input type="hidden" name="_wp_http_referer" value="/0/cart/" />
                </td>
              </tr>
</template>
<script>
export default {
	name:"Coupon"
}
</script>