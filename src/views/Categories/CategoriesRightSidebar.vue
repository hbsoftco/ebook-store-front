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
              <h3>Shop categories</h3>

              <div class="breadcrumb-content">
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <a itemprop="url" href="#">
                    <span itemprop="title">Home</span>
                  </a>
                </span>
                <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
                <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                  <a itemprop="url" class="current-page">
                    <span itemprop="title">Shop categories</span>
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
              <div class="main-col style-01 col-md-9 col-sm-9 col-xs-9">
                <CategoriLeft />

                <div class="woocommerce-main-primary">

					<CategoriHeader />

                  <div class="woocommerce-main-content">
                    <ul class="ul-mh row">
			       <BookCategori v-for="bookcategori in bookcategoris" :key="bookcategori.id" :bookcategori="bookcategori" />
                    </ul>
                  </div>
                  <!-- woocommerce-main-content -->

					<CategoriFooter />

                </div>
                <!-- woocommerce-main-primary -->
              </div>
              <!-- col-md-9 -->

              <div class="sidebar style-01 col-md-3 col-sm-3 col-xs-3">

				  <OneCategori />

					<ByPrice />

					<Arshive />

					<Manufacturer />

					<Shipping />

              </div>
              <!-- col-md-3 -->
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
import CategoriLeft from "./ComponentLeft/CategoriLeft"
import BookCategori from "./ComponentLeft/BookCategori"
import CategoriHeader from "./ComponentLeft/CategoriHeader"
import CategoriFooter from "./ComponentLeft/CategoriFooter"
import OneCategori from "./ComponentLeft/OneCategori"
import ByPrice from "./ComponentLeft/ByPrice"
import Arshive from "./ComponentLeft/Arshive"
import Manufacturer from "./ComponentLeft/Manufacturer"
import Shipping from "./ComponentLeft/Shipping"
export default {
  name: "CategoriesRightSidebar",
  components: {
	CategoriLeft,
	BookCategori,
	CategoriHeader,
	CategoriFooter,
	OneCategori,
	ByPrice,
	Arshive,
	Manufacturer,
	Shipping,
  },
 data() {
    return {
      bookcategoris: [
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
          name: "Hoseein bajan",
          image: "images/p2/2.jpg",
          discunt: "20%",
          rate: "3",
          description: " hossein bajan hastan. "
        },
        {
          id: 3,
          name: "Adell bajan",
          image: "images/p2/3.jpg",
          discunt: "20%",
          rate: "3",
          description: " salam bande . "
        },
        {
          id: 4,
          name: "Sara etemadian",
          image: "images/p2/4.jpg",
          discunt: "20%",
          rate: "3",
          description: "lorbgdgfbvvdfd"
        },
        {
          id: 5,
          name: "Milad saeedi",
          image: "images/p2/5.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 6,
          name: "Put a Title Here",
          image: "images/p2/6.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 7,
          name: "Put a Title Here",
          image: "images/p2/7.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 8,
          name: "Put a Title Here",
          image: "images/p2/8.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        },
        {
          id: 8,
          name: "Put a Title Here",
          image: "images/p2/2.jpg",
          discunt: "20%",
          rate: "3",
          description:
            " Suspendisse ac tellus congue and eleifend leo eu, elementum. "
        }
      ]
    };
  }
};
</script>