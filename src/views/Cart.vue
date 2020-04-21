<template>
  <div class="woocommerce woocommerce-page">
    <div class="main-container">
      <div id="main-content">
        <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
          <div class="kopa-area-tg-5">
            <span></span>
          </div>

          <div class="container">
            <div class="kopa-breadcrumb">
              <h3>shopping cart</h3>

              <div class="breadcrumb-content">
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <a itemprop="url" href="#">
                    <span itemprop="title">Home</span>
                  </a>
                </span>
                <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <a itemprop="url" class="current-page">
                    <span itemprop="title">shopping cart</span>
                  </a>
                </span>
              </div>
            </div>
            <!-- kopa-breadcrumb -->
          </div>
          <!-- container -->
        </section>
        <!-- kopa-area-16 -->

        <section class="kopa-area kopa-area-20">
          <div class="container">
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
                        <tr class="cart_item">
                          <td class="product-remove">
                            <a href="#" class="remove" title>×</a>
                          </td>
                          <td class="product-thumbnail">
                            <a href="#">
                              <img src="images/header/1.jpg" class alt />
                            </a>
                          </td>
                          <td class="product-name" data-title="Product">
                            <a href="#">Write Your Title Here</a>
                          </td>
                          <td class="product-price" data-title="Price">
                            <span class="amount">$35.00</span>
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
                            <span class="amount">$35.00</span>
                          </td>
                        </tr>
                        <tr class="cart_item">
                          <td class="product-remove">
                            <a href="#" class="remove" title>×</a>
                          </td>
                          <td class="product-thumbnail">
                            <a href="#">
                              <img src="images/header/2.jpg" class alt />
                            </a>
                          </td>
                          <td class="product-name" data-title="Product">
                            <a href="#">Write Your Title Here</a>
                          </td>
                          <td class="product-price" data-title="Price">
                            <span class="amount">$16.00</span>
                          </td>
                          <td class="product-quantity" data-title="Quantity">
                            <div class="quantity">
                              <input
                                type="number"
                                step="1"
                                min="0"
                                value="2"
                                class="input-text qty text"
                                size="4"
                              />
                            </div>
                          </td>
                          <td class="product-subtotal" data-title="Total">
                            <span class="amount">$32.00</span>
                          </td>
                        </tr>
                        <tr class="cart_item">
                          <td class="product-remove">
                            <a href="#" class="remove" title>×</a>
                          </td>
                          <td class="product-thumbnail">
                            <a href="#">
                              <img src="images/header/1.jpg" class alt />
                            </a>
                          </td>
                          <td class="product-name" data-title="Product">
                            <a href="#">Write Your Title Here</a>
                          </td>
                          <td class="product-price" data-title="Price">
                            <span class="amount">$16.00</span>
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
                            <span class="amount">$16.00</span>
                          </td>
                        </tr>
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
                              <input
                                type="submit"
                                class="button"
                                name="apply_coupon"
                                value="Apply Coupon"
                              />
                            </div>
                            <input
                              type="submit"
                              class="button"
                              name="update_cart"
                              value="Update Cart"
                            />
                            <input type="hidden" id="_wpnonce" name="_wpnonce" value="82cdf479ab" />
                            <input type="hidden" name="_wp_http_referer" value="/0/cart/" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
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
                </div>
              </div>
              <!-- .entry-content -->
            </article>
          </div>
          <!-- container -->
        </section>
        <!-- kopa-area-18 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart"
};
</script>