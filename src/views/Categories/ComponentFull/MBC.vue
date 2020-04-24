<template>
	                      <li class="col-md-4 col-sm-4 col-xs-12">
                        <article class="entry-item">
                          <div class="entry-thumb">
                            <a href="#">
                               <img :src="mbc.image" alt />
                            </a>
                          </div>
                          <div class="entry-content">
                            <div class="ct-title-5">
                              <h5>{{mbc.title}}</h5>
                              <h4>{{mbc.name}}</h4>
                            </div>
                            <h6 class="ct-title-6">{{mbc.discont}}</h6>
                            <a class="kopa-btn-3" href="#">shop now</a>
                          </div>
                        </article>
                      </li>
</template>
<script>
export default {
	name:"MBC",
	  props: {
    mbc: {
      type: Object,
      default: () => {}
    }
  }
}
</script>