<template>
  <div>
    <li class="col-md-3 col-sm-3 col-xs-6">
      <article class="entry-item">
        <div class="entry-top">
          <div class="entry-thumb">
            <a href="#">
              <img :src="member.image" alt />
            </a>
          </div>
          <div class="entry-content">
            <h4 class="entry-title">
              <a href="#">{{member.name}}</a>
            </h4>
            <p class="entry-job">{{member.job}}</p>
          </div>
        </div>
        <footer>
          <div class="kopa-social-links style-03">
            <ul class="clearfix">
              <li v-if="member.facebook">
                <a :href="'https:/facebook.com' + member.facebook" class="fa fa-facebook"></a>
              </li >
              <li v-if="member.twitter">
                <a :href="'https:/twitter.com' + member.twitter" class="fa fa-twitter"></a>
              </li>
              <li v-if="member.instagram">
                <a :href="'https:/instagram.com' + member.instagram" class="fa fa-instagram"></a>
              </li>
              <li>
                <a href="#" class="fa fa-rss"></a>
              </li>
            </ul>
          </div>
        </footer>
      </article>
    </li>
  </div>
</template>
<script>
export default {
  name: "Member",
    props: {
    member: {
      type: Object,
      default: () => {}
    }
  }
  
};
</script>