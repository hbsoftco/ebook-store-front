<template>
  <div class="main-container">
    <div id="main-content">
      <section class="kopa-area kopa-area-16 kopa-area-parallax white-text-style">
        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <div class="container">
          <div class="kopa-breadcrumb">
            <h3>Contact Us</h3>

            <div class="breadcrumb-content">
              <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                <a itemprop="url" href="#">
                  <span itemprop="title">Home</span>
                </a>
              </span>
              <span>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
              <span itemtype="http://data-vocabulary.org/Breadcrumb" itemscope>
                <a itemprop="url" class="current-page">
                  <span itemprop="title">contact us</span>
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
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget readin-module-contact-1">
                <div class="widget-content text-center">
                  <ul class="ul-mh row">
                    
					 <Information v-for="information in informations" :key="information.id" :information="information" />

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
      <!-- kopa-area-18 -->

      <section class="kopa-area kopa-area-0 kopa-area-no-space">
        <div class="kopa-area-tg-4">
          <span></span>
        </div>

        <div class="kopa-area-tg-1">
          <span></span>
        </div>

        <div class="widget">
          <div class="widget-content">
            <div
              id="kopa-map"
              class="kopa-map"
              data-place="New York"
              data-latitude="40.6700"
              data-longitude="-73.9400"
            ></div>
          </div>
        </div>
        <!-- widget -->
      </section>
      <!-- kopa-area-0 -->

      <section class="kopa-area kopa-area-17">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="widget">
                <header class="widget-header style-01">
                  <h3 class="widget-title style-02">
                    fill
                    <span>free</span>
                  </h3>
                  <p>
                    Suspendisse ac tellus congue, eleifend leo eu, elementum ligula. Suspendisse eget interdum
                    <br />est. Nam suscipit diam nulla, porttitor blandit risus viverra sed. In hac...
                  </p>
                </header>
                <div class="widget-content">
                  <div class="ct-form-box">
                    <div id="respond" class="comment-respond">
                      <form
                        class="ct-form-1"
                        action="http://dinhvankiem.com/demo/e-reading/html/processForm.php"
                        method="post"
                        novalidate="novalidate"
                      >
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <p class="input-block">
                              <input
                                type="text"
                                value="Name"
                                onfocus="if(this.value=='Name')this.value='';"
                                onblur="if(this.value=='')this.value='Name';"
                                name="name"
                                class="valid"
                              />
                            </p>
                            <p class="input-block">
                              <input
                                type="text"
                                value="Email"
                                onfocus="if(this.value=='Email')this.value='';"
                                onblur="if(this.value=='')this.value='Email';"
                                name="email"
                                class="valid"
                              />
                            </p>
                            <p class="input-block">
                              <input
                                type="text"
                                value="Phone"
                                onfocus="if(this.value=='Phone')this.value='';"
                                onblur="if(this.value=='')this.value='Phone';"
                                name="phone"
                                class="valid"
                              />
                            </p>
                            <p class="input-block">
                              <input
                                type="text"
                                value="Website"
                                onfocus="if(this.value=='Website')this.value='';"
                                onblur="if(this.value=='')this.value='Website';"
                                name="phone"
                                class="valid"
                              />
                            </p>
                          </div>
                          <!-- col-md-6 -->

                          <div class="col-md-6 col-sm-6 col-xs-6">
                            <p class="textarea-block">
                              <textarea name="message" placeholder="Message" cols="88" rows="11"></textarea>
                            </p>
                          </div>
                          <!-- col-md-6 -->
                        </div>
                        <!-- row -->

                        <p class="input-block btn-block clearfix text-center">
                          <input type="submit" value="Send" class="ct-submit-1" />
                        </p>
                      </form>

                      <div id="response-1"></div>
                    </div>
                  </div>
                  <!-- form-box -->
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
      <!-- kopa-area-17 -->
    </div>
  </div>
</template>
<script>
import Information from "../components/ComponentContact/Information"
export default {
  name: "Contact",
  components:{
		Information,  
  },
  data(){
	  return{
		  informations:[
			  {
				  id:1,
				  icon:"ct-icon-6",
				  name:"Address",
				  location:"121 King Street,",
				  ls:"fa fa-map-marker"
			  },
				{
				  id:2,
				  icon:"ct-icon-6 style-01",
				  name:"Phone",
				  location:"+61 3 8376 6284",
				  ls:"fa fa-phone"
			  },
				{
				  id:3,
				  icon:"ct-icon-6 style-02",
				  name:"Fax",
				  location:"+61 3 8376 1234",
				  ls:"fa fa-print"
			  },
				{
				  id:4,
				  icon:"ct-icon-6 style-03",
				  name:"Email",
				  location:"info@envato.com",
				  ls:"fa fa-envelope"
			  },
		  ]
	  }
  }
};
</script>