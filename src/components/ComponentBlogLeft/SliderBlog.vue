<template>
	                                <li>
                                    <article class="entry-item">
                                        <div class="entry-thumb">
                                            <div class="owl-carousel owl-carousel-1 owl-btn-03">
                                                <div class="item">
                                                    <a href="#"><img :src="sliderblog.image" alt=""></a>
                                                </div>
                                                <!-- item -->
                                                <div class="item">
                                                    <a href="#"><img :src="sliderblog.image" alt=""></a>
                                                </div>
                                                <!-- item -->
                                                <div class="item">
                                                    <a href="#"><img :src="sliderblog.image" alt=""></a>
                                                </div>
                                                <!-- item -->
                                            </div>
                                            <!-- owl-carousel-1 -->
                                        </div>
                                        <div class="entry-content">
                                            <a href="#" class="kopa-btn-7">
                                                {{sliderblog.date}}
                                            </a>
                                            <h4 class="entry-title"><a href="#"><span>{{sliderblog.name}}</span> {{sliderblog.title}}</a></h4>
                                            <p>{{sliderblog.description}}</p> 
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
	name:"SliderBlog",
	  props: {
    sliderblog: {
      type: Object,
      default: () => {}
    }
  }
}
</script>