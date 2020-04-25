<template>
	                    <li class="col-md-6 col-sm-6 col-xs-6">
                      <article class="entry-item ct-item-3">
                        <header class="clearfix">
                          <div class="kopa-pull-left">
                            <h3 class="ct-title-10">{{store.name}}</h3>
                          </div>
                          <div class="kopa-pull-right">
                            <h4 class="ct-title-8">{{store.year}}</h4>
                          </div>
                        </header>
                        <div class="entry-content">
                          <p>{{store.discription}}</p>
                          <a class="kopa-btn-6" href="#">Browse All</a>
                        </div>
                      </article>
                    </li>
</template>
<script>
export default {
	name:"Store",
	 props: {
    store: {
      type: Object,
      default: () => {}
    }
  }
}
</script>