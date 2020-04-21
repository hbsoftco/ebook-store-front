<template>
  <li class>
    <article class="entry-item">
      <div class="entry-thumb">
        <a href="#">
          <img :src="post.image" alt />
        </a>
        <div class="ct-mask">
          <a href="#" class="ct-icon"></a>
        </div>
      </div>
      <div class="entry-content">
        <a href="#" class="kopa-btn-7">{{post.date}}</a>
        <h4 class="entry-title">
          <a href="#">{{post.name}}</a>
        </h4>
        <p>{{post.description}}</p>
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
                  <span class="ct-icon-4">{{post.commentCount}}</span>
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
  name: "Post",
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {}
};
</script>