<template>
	                                        <li class="col-md-4 col-sm-4 col-xs-4">
                                            <article class="entry-item">
                                                <div class="entry-thumb">
                                                    <a href="#"><img :src="newsslider.image" alt=""></a>
                                                    <div class="ct-mask">
                                                        <a href="#" class="ct-icon"></a>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <a href="#" class="kopa-btn-7">
                                                        {{newsslider.date}}
                                                    </a>
                                                    <h4 class="entry-title"><a href="#">{{newsslider.title}}</a></h4>
                                                    <p>{{newsslider.description}}</p> 
                                                    <footer class="clearfix">
                                                        <div class="kopa-pull-left">
                                                            <a href="#" class="more-link">Read more</a>
                                                        </div>
                                                        <div class="kopa-pull-right">
                                                            <ul class="clearfix">
                                                                <li>
                                                                    <a href="#" class="ct-icon-3">
                                                                        <i class="fa fa-user"></i>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#" class="ct-icon-3">
                                                                        <i class="fa fa-comments"></i>
                                                                        <span class="ct-icon-4">2</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </footer>
                                                </div>
                                            </article>
                                        </li>
</template>
<script>
export default {
	name:"NewsSlider",
	    props: {
    newsslider: {
      type: Object,
      default: () => {}
    }
  }
}
</script>