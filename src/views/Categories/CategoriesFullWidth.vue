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

        <section class="kopa-area kopa-area-20 main-col style-01">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="widget reading-module-article-list-2">
                  <div class="widget-content">
                    <ul class="row ul-mh">
							
						                      <MBC
                        v-for="mbc in mbcs"
                        :key="mbc.id"
                        :mbc="mbc"
                      />

                    </ul>
                  </div>
                </div>
                <!-- widget -->
              </div>
              <!-- col-md-12 -->
            </div>
            <!-- row -->

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="woocommerce-main-primary">
                  <header class="woocommerce-main-header">
                    <div class="kopa-pull-left">
                      <form class="woocommerce-ordering" method="get">
                        <select name="orderby" class="orderby">
                          <option value="menu_order" selected="selected">Default sorting</option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by newness</option>
                          <option value="price">Sort by price: low to high</option>
                          <option value="price-desc">Sort by price: high to low</option>
                        </select>
                      </form>
                      <!-- woocommerce-ordering -->

                      <ul class="ct-ul-2">
                        <li class="grid-view active">
                          <span class="fa fa-th"></span>
                        </li>
                        <li class="list-view">
                          <span class="fa fa-list-ul"></span>
                        </li>
                      </ul>
                      <!-- ct-ul-2 -->
                    </div>

                    <div class="kopa-pull-right">
                      <form class="product-num-ordering" method="get">
                        <p>Show:</p>
                        <select name="orderby" class>
                          <option value="12" selected="selected">12</option>
                          <option value="18">18</option>
                          <option value="24">24</option>
                          <option value="50">50</option>
                        </select>
                      </form>
                      <!-- product-num-ordering -->

                      <nav class="woocommerce-pagination">
                        <ul class="page-numbers">
                          <li>
                            <a class="prev page-numbers" href="#">←</a>
                          </li>
                          <li>
                            <a class="page-numbers" href="#">1</a>
                          </li>
                          <li>
                            <span class="page-numbers current">2</span>
                          </li>
                          <li>
                            <a class="page-numbers" href="#">3</a>
                          </li>
                          <li>
                            <a class="next page-numbers" href="#">→</a>
                          </li>
                        </ul>
                      </nav>
                      <!-- woocommerce-pagination -->
                    </div>
                  </header>
                  <!-- woocommerce-main-header -->

                  <div class="woocommerce-main-content">
                    <ul class="ul-mh row">
                      <BookShop
                        v-for="bookshop in bookshops"
                        :key="bookshop.id"
                        :bookshop="bookshop"
                      />
                    </ul>
                  </div>
                  <!-- woocommerce-main-content -->

                  <footer class="woocommerce-main-footer">
                    <div class="kopa-pull-left">
                      <p class="woocommerce-result-count">Showing 11–20 of 24 results</p>
                    </div>

                    <div class="kopa-pull-right">
                      <nav class="woocommerce-pagination">
                        <ul class="page-numbers">
                          <li>
                            <a class="prev page-numbers" href="#">←</a>
                          </li>
                          <li>
                            <a class="page-numbers" href="#">1</a>
                          </li>
                          <li>
                            <span class="page-numbers current">2</span>
                          </li>
                          <li>
                            <a class="page-numbers" href="#">3</a>
                          </li>
                          <li>
                            <a class="next page-numbers" href="#">→</a>
                          </li>
                        </ul>
                      </nav>
                      <!-- woocommerce-pagination -->
                    </div>
                  </footer>
                  <!-- woocommerce-main-footer -->
                </div>
                <!-- woocommerce-main-primary -->
              </div>
              <!-- col-md-12 -->
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
import BookShop from "../Categories/BookShop.vue";
import MBC from "./ComponentFull/MBC.vue"
export default {
  name: "CategoriesFullWidth",
  components: {
	BookShop,
	MBC,
  },
  data() {
    return {
		mbcs: [
        {
          id: 1,
          title: "Top Rated",
          image: "images/p9/1.jpg",
          name:
            "MAGZINES",
          discont: "Up to 80% Off"
        },
          {
          id: 2,
          title: "Popular",
          image: "images/p9/2.jpg",
          name:
            "BOOKS",
          discont: "Up to 50% Off"
        },
        {
          id: 3,
          title: "Funny",
          image: "images/p9/3.jpg",
          name:
            "COMICS",
          discont: "Up to 40% Off"
        },
		],
      bookshops: [
        {
          id: 1,
          title: "Put a Title Here",
          image: "images/p2/1.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 2,
          title: "Put a Title Here",
          image: "images/p2/2.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 3,
          title: "Put a Title Here",
          image: "images/p2/3.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 4,
          title: "Put a Title Here",
          image: "images/p2/4.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 5,
          title: "Put a Title Here",
          image: "images/p2/5.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 6,
          title: "Put a Title Here",
          image: "images/p2/6.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 7,
          title: "Put a Title Here",
          image: "images/p2/7.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        },
        {
          id: 8,
          title: "Put a Title Here",
          image: "images/p2/8.jpg",
          description:
            "Suspendisse ac tellus congue and eleifend leo eu, elementum.",
          zaman: "New",
          discont: "$20"
        }
      ]
    };
  }
};
</script>