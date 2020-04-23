<template>
	            <div class="col-md-8 col-sm-12 col-xs-12 col-md-push-2 col-sm-push-0 col-xs-push-0">
              <div class="widget reading-module-search-1">
                <div class="row">
                  <div  class="col-md-8 col-sm-12 col-xs-12 col-md-push-2 col-sm-push-0 col-xs-push-0" >
                    <div class="widget-content">
                      <h3>Find the Latest News of your city...</h3>
                      <div class="search-box-1">
                        <form action="#" class="search-form-1" method="get">
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
                          <button type="submit" class="search-submit kopa-btn-4">search</button>
                        </form>
                      </div>
                      <!--search-box-->
                    </div>
                  </div>
                  <!-- col-md-8 -->
                </div>
                <!-- row -->
              </div>
              <!-- widget -->
            </div>
</template>
<script>
export default {
	name:"Search"
}
</script>