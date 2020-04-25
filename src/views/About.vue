<template>
  <div class="main-container">
    <div id="main-content">
      <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <div class="container">
          <div class="kopa-breadcrumb">
            <h3>About Us</h3>

            <div class="breadcrumb-content">
              <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                <a itemprop="url" href="#">
                  <span itemprop="title">Home</span>
                </a>
              </span>
              <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
              <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                <a itemprop="url" class="current-page">
                  <span itemprop="title">About us</span>
                </a>
              </span>
            </div>
          </div>
          <!-- kopa-breadcrumb -->
        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-16 -->

      <section class="kopa-area kopa-area-18">
        <div class="container">

			<OurHistory />


        </div>
        <!-- container -->
      </section>
      <!-- kopa-area-2 -->

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
              <div class="widget reading-module-intro-6">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    in our
                    <span>store</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="widget-content">
                  <ul class="row ul-mh">

					  <store v-for="store in stores" :key="store.id" :store="store" />

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
              <div class="widget reading-module-search-3">
                <div class="widget-content">
                  <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                      <h3>Find the Latest News of your city...</h3>
                    </div>
                    <!-- col-md-4 -->

                    <div class="col-md-8 col-sm-8 col-xs-8">
                      <div class="search-box-3">
                        <form action="#" class="search-form-3" method="get">
                          <input
                            type="text"
                            onblur="if (this.value == '')
                                                        this.value = this.defaultValue;"
                            onfocus="if (this.value == this.defaultValue)
                                                        this.value = '';"
                            value="Enter location"
                            name="s"
                            class="search-text"
                          />
                          <div class="dropdown">
                            <button
                              id="search-label-1"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Categories
                              <span class="fa fa-caret-down"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="search-label-1">
                              <li>
                                <a href="#">Getting Started</a>
                              </li>
                              <li>
                                <a href="#">How to setup demo site</a>
                              </li>
                              <li>
                                <a href="#">Divine business WordPress theme</a>
                              </li>
                            </ul>
                          </div>
                          <button type="submit" class="search-submit kopa-btn-13">search</button>
                        </form>
                      </div>
                      <!--search-box-->
                    </div>
                    <!-- col-md-8 -->
                  </div>
                  <!-- row -->
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

		<BusineStrategy />

      <!-- kopa-area-4 -->

      <section class="kopa-area kopa-area-5 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-4">
          <span></span>
        </div>

        <div class="kopa-area-tg-5">
          <span></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-10 col-sm-12 col-xs-12 col-md-push-1">
              <div class="widget reading-module-carousel-1">
                <h3 class="widget-title"></h3>
                <div class="widget-content">
                  <div class="owl-carousel owl-carousel-1 owl-btn-01">
                    <div class="item">
                      <article class="entry-item">
                        <div class="entry-thumb">
                          <a href="#">
                            <img src="images/p4/1.jpg" alt />
                          </a>
                        </div>
                        <div class="entry-content">
                          <p>“Nulla facilisi. Nulla ornare condimentum dui, sit amet condimentum elit rhoncus sit amet. Suspendisse luctus leo nisi, quis viverra velit viverra id. In mollis imperdiet lectus”</p>
                          <span>- Liza D'souza</span>
                          &nbsp;
                          <span>CEO at Learning</span>
                        </div>
                      </article>
                    </div>
                    <!-- item -->
                    <div class="item">
                      <article class="entry-item">
                        <div class="entry-thumb">
                          <a href="#">
                            <img src="images/p4/1.jpg" alt />
                          </a>
                        </div>
                        <div class="entry-content">
                          <p>“Nulla ornare condimentum dui, sit amet condimentum elit rhoncus sit amet. Suspendisse luctus leo nisi, quis viverra velit viverra id. In mollis imperdiet lectus nulla facilisi.”</p>
                          <span>- Liza D'souza</span>
                          &nbsp;
                          <span>CEO at Learning</span>
                        </div>
                      </article>
                    </div>
                    <!-- item -->
                    <div class="item">
                      <article class="entry-item">
                        <div class="entry-thumb">
                          <a href="#">
                            <img src="images/p4/1.jpg" alt />
                          </a>
                        </div>
                        <div class="entry-content">
                          <p>“Nulla ornare condimentum dui, sit amet condimentum elit rhoncus sit amet. Suspendisse luctus leo nisi, quis viverra velit viverra id. In mollis imperdiet lectus nulla facilisi.”</p>
                          <span>- Liza D'souza</span>
                          &nbsp;
                          <span>CEO at Learning</span>
                        </div>
                      </article>
                    </div>
                    <!-- item -->
                  </div>
                  <!-- owl-carousel-1 -->
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
      <!-- kopa-area-5 -->

      <section class="kopa-area kopa-area-6">
        <div class="kopa-area-tg-3">
          <span></span>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget reading-module-team-list-1">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    our
                    <span>team</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="widget-content">
                  <ul class="ul-mh row">
					  <Member v-for="member in members" :key="member.id" :member="member"/>
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

			<LogoFooter />

      <!-- kopa-area-7 -->
    </div>
  </div>
</template>
<script>
import Member from "../components/Team/Member";
import OurHistory from "../components/ComponentAbout/OurHistory"
import Store from "../components/ComponentAbout/Store"
import Find from "../components/ComponentAbout/Find"
import BusineStrategy from "../components/ComponentAbout/BusineStrategy"
import LogoFooter from "../components/ComponentAbout/LogoFooter"
export default {
  name: "About",
  components: {
	Member,
	OurHistory,
	Store,
	Find,
	BusineStrategy,
	LogoFooter
  },
  data() {
    return {
		stores:[
			{
				id:1,
				name:"Magazines",
				year:"2901",
				discription:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet as vulputate cursus a sit amet mauris."
			},
						{
				id:2,
				name:"Comics",
				year:"1010",
				discription:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet as vulputate cursus a sit amet mauris."
			},
						{
				id:3,
				name:"Books",
				year:"1603",
				discription:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet as vulputate cursus a sit amet mauris."
			},
						{
				id:4,
				name:"Articles",
				year:"2012",
				discription:"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet as vulputate cursus a sit amet mauris."
			},
		],
      members: [
        {
          id: 1,
          name: "Hossein",
          image: "images/p17/1.jpg",
          job: "enginear",
          facebook: "hbsoftco",
          twitter: "hbsoftco",
          instagram: "hbsoft"
		},
		        {
          id: 2,
          name: "Adell",
          image: "images/p17/2.jpg",
          job: "enginear",
          facebook: "Adellbajan",
          twitter: "Adellbajan",
          instagram: "Adellbajan"
		},
				        {
          id: 3,
          name: "Milad",
          image: "images/p17/3.jpg",
          job: "enginear",
          facebook: "saeedi",
          twitter: "saeedi",
          instagram: "saeedi"
		},
				        {
          id: 41,
          name: "Hossein",
          image: "images/p17/4.jpg",
          job: "enginear",
          facebook: "hbsoftco",
          twitter: "hbsoftco",
          instagram: "hbsoft"
        }
      ]
    };
  }
};
</script>