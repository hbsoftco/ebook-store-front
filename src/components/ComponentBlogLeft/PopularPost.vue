<template>
  <li>
    <article class="entry-item">
      <div class="entry-thumb">
        <a href="#">
          <img src="images/p15/1.jpg" alt />
        </a>
        <div class="ct-mask">
          <a href="#" class="ct-icon style-01"></a>
        </div>
      </div>
      <div class="entry-content">
        <h4 class="entry-title">
          <a href="#">Aenean condime ntum felis non...</a>
        </h4>
        <div class="entry-meta">
          <p class="entry-date">
            <i class="fa fa-calendar-o"></i>May 1, 2016
          </p>
        </div>
      </div>
    </article>
  </li>
</template>
<script>
export default {
  name: "PopularPost",
    props: {
    popularpost: {
      type: Object,
      default: () => {}
    }
  }
};
</script>