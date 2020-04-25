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

                        <h3>Shop single</h3>

                        <div class="breadcrumb-content">
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" href="#">
                                    <span itemprop="title">Home</span>
                                </a>
                            </span>
                            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope="">
                                <a itemprop="url" class="current-page">
                                    <span itemprop="title">Shop single</span>
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

                    <div class="row">
                    
                        <div class="col-md-12 col-sm-12 col-xs-12">

                            <div itemscope="" itemtype="http://schema.org/Product" class="product">
              
								<BearComponent />

                              <DescriptionReview />
								

                                <div class="related products">
                                    <h2>Related Products</h2>
                                    <ul class="products ul-mh">
                      <ShopBook
                        v-for="shopbook in shopbooks"
                        :key="shopbook.id"
                        :shopbook="shopbook"
                      />
                                    </ul>
                                </div>
                            </div>
                    
                        </div>
                        <!-- col-md-9 -->
                    
                    </div>
                    <!-- row --> 
                
                </div>
                <!-- container -->
                
            </section>
            <!-- kopa-area-18 -->

        </div>
    </div>
</div>
</template>
<script>
import BearComponent from "./ShopComponent/BearComponent"
import DescriptionReview from "./ShopComponent/DescriptionReview"
import ShopBook from "./ShopComponent/ShopBook"
export default {
	name:"ShopSingleFullWidth",
	components:{
		BearComponent,
		DescriptionReview,
		ShopBook,
	},
	data() {
    return {
      shopbooks: [
        {
          id: 1,
          name: "Put a Title Here",
          image: "images/p2/1.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
		},
		        {
          id: 2,
          name: "Put a Title Here",
          image: "images/p2/2.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
		},
		        {
          id: 3,
          name: "Put a Title Here",
          image: "images/p2/3.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
		},
      ]
    };
  }
}
</script>