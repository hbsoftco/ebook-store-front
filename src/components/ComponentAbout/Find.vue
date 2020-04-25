<template>
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
</template>
<script>
export default {
	name:"Find"
}
</script>