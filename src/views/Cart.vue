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

			<CartComponent />

          </div>
          <!-- container -->
        </section>
        <!-- kopa-area-18 -->
      </div>
    </div>
  </div>
</template>
<script>
import CartComponent from "../components/CartComponent/CartComponent"
export default {
  name: "Cart",
  components:{
	  CartComponent,
  }
};
</script>