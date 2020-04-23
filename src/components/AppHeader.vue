<template>
  <header class="kopa-page-header-1">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-6 col-xs-6 text-left">
          <div class="hamburger-menu">
            <span class="ti-menu"></span>
          </div>
          <!-- hamburger-menu -->
			<LogoHeader />

        </div>
        <!-- col-md-2 -->

        <div class="col-md-8 col-sm-0 col-xs-0">
          <nav class="main-nav">
            <ul class="main-menu sf-menu">
              <li class="current-menu-item">
                <a href="index-1.html">Home</a>
                <ul>
                  <li>
                    <a href="index-1.html">Home Style 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Style 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Style 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="header-1.html">Header Styles</a>
                <ul>
                  <li>
                    <a href="header-1.html">Header Style 1</a>
                  </li>
                  <li>
                    <a href="header-2.html">Header Style 2</a>
                  </li>
                  <li>
                    <a href="header-3.html">Header Style 3</a>
                  </li>
                  <li>
                    <a href="header-4.html">Header Style 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-detail-1.html">Shop</a>
                <ul>
                  <li>
                    <a href="shop-cat-1.html">categories</a>
                    <ul>
                      <li>
                         <router-link to="/categoriezleftsidebar">Categories Left Sidebar</router-link>
                      </li>
                      <li>
                        <router-link to="/categoriesrightsidebar">Categories Right Sidebar</router-link>
                      </li>
                      <li>
                        <router-link to="/categoriesfullwidth">Categories Full Width</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/cart">Cart</router-link>
                  </li>
                  <li>
                    <router-link to="/checkout">CheckOut</router-link>
                  </li>
                  <li>
                    <a href="shop-detail-1.html">single</a>
                    <ul>
                      <li>
                       <router-link to="/shopsingleleftslider">Shop Single Left Sleder</router-link>
                      </li>
                      <li>
                        <router-link to="/shopsinglerightslider">Shop Single Right Sleder</router-link>
                      </li>
                      <li>
                        <router-link to="/shopsinglefullwidth">Shop Single Full Width</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">pages</a>
                <ul>
                  <li>
                   <router-link to="/about">About</router-link>
                  </li>
                  <li>
                    <!-- <a href="service.html">service</a> -->
					<router-link to="/service">Service</router-link>
                  </li>
                  <li>
                   <router-link to="/contact">Contact</router-link>
                  </li>
                  <li>
                    <router-link to="/faqs">FAQs</router-link>
                  </li>

                  <li>
                    <router-link to="/eror404">Eror404</router-link>
                  </li>
                  <li>
                    <a href="coming-soon.html">coming soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog-1.html">blog</a>
                <ul>
                  <li>
                    <router-link to="/blogleftslider">Blog Left Slider</router-link>
                  </li>
                  <li>
                   <router-link to="/blogrightslider">Blog Right Slider</router-link>
                  </li>
                  <li>
                   <router-link to="/blognews">Blog News</router-link>
                  </li>
                  <li>
                    <a href="single-1.html">single blog</a>
                    <ul>
                      <li>
                        <router-link to="/singleleftsidebar">Single Left Sidebar</router-link>
                      </li>
                      <li>
                        <router-link to="/singlerightsidebar">Single Right Sidebar</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Elements</a>
                <div class="sf-mega col-md-12 col-xs-12 col-sm-12 sf-mega-1">
                  <div class="row">
                    <div class="sf-mega-section col-custom-5">
                      <div class="widget reading-module-sub-list">
                        <h3 class="widget-title style-01">Articles</h3>
                        <div class="widget-content">
                          <ul class="clearfix">
                            <li>
                              <a href="about.html">about</a>
                            </li>
                            <li>
                              <a href="service.html">service</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQs</a>
                            </li>

                            <li>
                              <a href="coming-soon.html">coming soon</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- widget -->
                    </div>
                    <!-- col-custom-5 -->
                    <div class="sf-mega-section col-custom-5">
                      <div class="widget reading-module-sub-list">
                        <h3 class="widget-title style-01">shortcodes list 1</h3>
                        <div class="widget-content">
                          <ul class="clearfix">
                            <li>
                              <a href="sc-accordion.html">accordion</a>
                            </li>
                            <li>
                              <a href="sc-alert.html">alert</a>
                            </li>
                            <li>
                              <a href="sc-button.html">buttons</a>
                            </li>
                            <li>
                              <a href="sc-client.html">clients</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- widget -->
                    </div>
                    <!-- col-custom-5 -->
                    <div class="sf-mega-section col-custom-5">
                      <div class="widget reading-module-sub-list">
                        <h3 class="widget-title style-01">shortcodes list 2</h3>
                        <div class="widget-content">
                          <ul class="clearfix">
                            <li>
                              <a href="sc-countdown.html">countdowns</a>
                            </li>
                            <li>
                              <a href="sc-dropcap.html">dropcaps</a>
                            </li>
                            <li>
                              <a href="sc-event.html">events</a>
                            </li>
                            <li>
                              <a href="sc-heading.html">headings</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- widget -->
                    </div>
                    <!-- col-custom-5 -->
                    <div class="sf-mega-section col-custom-5">
                      <div class="widget reading-module-sub-1">
                        <div class="widget-content">
                          <h4>
                            Sale
                            <span>Today Deal</span>
                          </h4>
                          <h5>
                            UPTo
                            <span>30%</span> OFF
                          </h5>
                          <a class="kopa-btn-2" href="#">shop Now</a>
                        </div>
                      </div>
                      <!-- widget -->
                    </div>
                    <!-- col-custom-5 -->
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <!-- main-nav -->
        </div>
        <!-- col-md-8 -->

        <div class="col-md-2 col-sm-6 col-xs-6 text-right">
          <div class="kopa-cart kopa-dropdown">
            <span class="ti-shopping-cart kopa-dropdown-btn"></span>
            <div class="kopa-dropdown-content">
              <div class="cart-product-list">
                <ul class="clearfix">
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/header/1.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">Put a Title Here</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/header/2.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">Put a Title Here</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                  <li class="product-item rm-item">
                    <article>
                      <div class="entry-thumb">
                        <a href="#">
                          <img src="images/header/3.jpg" alt />
                        </a>
                      </div>
                      <div class="entry-content">
                        <h4 class="entry-title">
                          <a href="#">Put a Title Here</a>
                        </h4>
                        <span class="product-num">1</span>
                        <span class="product-price">$16</span>
                      </div>
                      <span class="cart-remove rm-btn fa fa-times-circle"></span>
                    </article>
                  </li>
                </ul>
              </div>
              <div class="cart-product-bottom">
                <div class="kopa-pull-left">
                  <h6>$68.00</h6>
                  <span>04 items</span>
                </div>
                <div class="kopa-pull-right">
                  <a class="kopa-btn-3" href="#">Check out</a>
                </div>
              </div>
            </div>
          </div>
          <!-- cart -->

          <div class="short-nav kopa-dropdown">
            <div class="kopa-btn-1 kopa-dropdown-btn">
              <span></span>
            </div>
            <div class="kopa-dropdown-content">
              <ul class="clearfix">
                <li>
                  <a href="#">
                    <i class="ti-user"></i>My Account
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-heart"></i>Favorite
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-check"></i>Checkout
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-info-alt"></i>fAQs
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ti-share-alt"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- short-nav -->

          <div class="kopa-search-box-1 kopa-dropdown">
            <span class="ti-search kopa-dropdown-btn"></span>
            <form action="#" class="search-form-1 kopa-dropdown-content" method="get">
              <input
                class="search-text"
                type="text"
                onblur="if (this.value == '')
                                    this.value = this.defaultValue;"
                onfocus="if (this.value == this.defaultValue)
                                    this.value = '';"
                value="Search..."
                placeholder="Search..."
                name="s"
              />
            </form>
          </div>
          <!-- search-box -->
        </div>
        <!-- col-md-2 -->
      </div>
      <!-- row -->
    </div>
  </header>
  <!-- kopa-page-header-1 -->
</template>
<script>
import LogoHeader from '../components/LogoHeader/LogoHeader'
export default {
  name: "AppHeader",
  components: {
	LogoHeader
  }
}
</script>
