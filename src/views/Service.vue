<template>
  <div id="main-content">
    <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-1">
        <span></span>
      </div>
      <div class="container">
        <div class="kopa-breadcrumb">
          <h3>our services</h3>
          <div class="breadcrumb-content">
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" href="#">
                <span itemprop="title">Home</span>
              </a>
            </span>
            <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
              <a itemprop="url" class="current-page">
                <span itemprop="title">our services</span>
              </a>
            </span>
          </div>
        </div>
        <!-- kopa-breadcrumb -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-16 -->

    <HowCan />

    <section class="kopa-area kopa-area-3">
      <div class="kopa-area-tg-2">
        <span></span>
      </div>

      <div class="kopa-area-tg-3">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-service-2">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  more
                  <span>services</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="row ul-mh">
                  <ServiceItem v-for="service in services" :key="service.id" :service="service" />
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-3 -->

    <section class="kopa-area kopa-area-4">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-scroll reading-module-scroll-1 ct-scroll-theme-1">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  upcoming
                  <span>products</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="item-list clearfix">
                  <Product v-for="product in products" :key="product.id" :product="product" />
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-4 -->

    <section class="kopa-area kopa-area-19 kopa-area-parallax white-text-style">
      <div class="kopa-area-tg-4">
        <span></span>
      </div>

      <div class="kopa-area-tg-5">
        <span></span>
      </div>

      <div class="container">
        <div class="row">

			<SignUp />

          <div class="col-md-7 col-sm-7 col-xs-7">
            <div class="widget reading-module-service-1">
              <div class="widget-content">
                <ul class="row ul-mh">
					<FreeShipping />
                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-7 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-19 -->

    <section class="kopa-area kopa-area-6">
      <div class="kopa-area-tg-3">
        <span></span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="widget reading-module-pricing-1">
              <header class="widget-header style-01">
                <h3 class="widget-title style-02">
                  author
                  <span>plans</span>
                </h3>
                <p>
                  Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                  <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                </p>
              </header>
              <div class="widget-content">
                <ul class="ul-mh row">
					
                    <Author v-for="author in authors" :key="author.id" :author="author" />

                </ul>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-12 -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-6 -->

    <section class="kopa-area kopa-area-17">
      <div class="container">

		<AboutLabtop />

      </div>
      <!-- container -->
    </section>
    <!-- kopa-area-7 -->
  </div>
  <!-- main-content -->
</template>

<script>
import HowCan from "../components/Service/HowCan"
import ServiceItem from "../components/Service/ServiceItem"
import Product from "../components/Service/Product"
import SignUp from "../components/Service/SignUp"
import FreeShipping from "../components/Service/FreeShipping"
import Author from "../components/Service/Author"
import AboutLabtop from "../components/Service/AboutLabtop"

export default {
  name: "Service",
  components: {
	ServiceItem,
	HowCan,
	Product,
	SignUp,
	FreeShipping,
	Author,
	AboutLabtop
  },
  data() {
    return {
	 authors: [
        {
          id: 1,
          title: "Secure Server",
          icon: "fa fa-globe",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 2,
          title: "Secure Server",
          icon: "fa fa-globe",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		{
          id: 3,
          title: "Secure Server",
          icon: "fa fa-globe",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		],
      services: [
        {
          id: 1,
          title: "Secure Server",
          icon: "fa fa-globe",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
        {
          id: 2,
          title: "Fast Delivery",
          icon: "fa fa-truck",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
        {
          id: 3,
          title: "Money Back",
          icon: "fa fa-refresh",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
        {
          id: 4,
          title: "Free Support",
          icon: "fa fa-headphones",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
        {
          id: 5,
          title: "100% Translatable",
          icon: "fa fa-microphone",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        },
        {
          id: 6,
          title: "Secure Server",
          icon: "fa fa-clone",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
        }
	  ],
	products: [
        {
          id: 1,
          title: "Secure Server",
		  image: "images/p19/1.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 2,
          title: "Secure Server",
		  image: "images/p19/2.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 3,
          title: "Secure Server",
		  image: "images/p19/3.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 4,
          title: "Secure Server",
		  image: "images/p19/4.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 5,
          title: "Secure Server",
		  image: "images/p19/5.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		        {
          id: 6,
          title: "Secure Server",
		  image: "images/p19/6.jpg",
		  date:"",
          description:
            "This is Photoshop's version of Lorm Ipsum. Proin gravida nibh vel velit aur aliquet. Aenean sollicitudin, rem qis bibendum auctor nisi."
		},
		],
	}
  }
}
</script>

<style>
</style>