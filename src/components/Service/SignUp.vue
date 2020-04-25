<template>
	          <div class="col-md-5 col-sm-5 col-xs-5">
            <div class="widget reading-module-newsletter-1">
              <h3 class="widget-title style-05">Newsletter sign Up</h3>
              <div class="widget-content">
                <form
                  class="newsletter-form"
                  method="post"
                  action="http://dinhvankiem.com/demo/e-reading/html/processForm.php"
                >
                  <input
                    type="text"
                    size="40"
                    class="email"
                    name="email"
                    placeholder="Enter your e-mail"
                  />
                  <button type="submit" class="submit">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </form>
                <p>
                  Curabitur sit amet mi non justo blandit roncus in porttitor diam. In
                  <br />libero in libero ultricies scelerisque.
                </p>
              </div>
            </div>
            <!-- widget -->
          </div>
          <!-- col-md-5 -->
</template>
<script>
export default {
	name:"SignUp"
}
</script>