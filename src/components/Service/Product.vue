<template>
	                  <li class>
                    <article class="entry-item video-post">
                      <div class="entry-thumb">
                        <a href="#">
                          <img :src="product.image" alt />
                        </a>
                        <div class="ct-mask">
                          <a href="#" class="ct-icon"></a>
                        </div>
                      </div>
                      <div class="entry-content">
                        <a href="#" class="kopa-btn-7">24 October</a>
                        <h4 class="entry-title">
                          <a
                            href="#"
                          >Aenean condimentum felis non ante tepus sit amet gravida nullam.</a>
                        </h4>
                        <p>In eleifend sapien a faucibus elementum. Sed use ndrerit purus et dignissim. Nulla luctus sequat ue a eleifend. Fusce nec ante vel mi pulvinar ultrics. Nulla sodales lorem nisi.</p>
                        <footer class="clearfix">
                          <div class="kopa-pull-left">
                            <a href="#" class="more-link">Read more</a>
                          </div>
                          <div class="kopa-pull-right">
                          </div>
                        </footer>
                      </div>
                    </article>
                  </li>
</template>
<script>
export default {
	name:"Product",
	props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>