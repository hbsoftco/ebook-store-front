<template>
	            <li itemprop="review" itemscope itemtype="http://schema.org/Review" class="comment">
              <div class="comment_container">
                <img alt :src="review.image" class="avatar" />
                <div class="comment-text">
                  <div
                    itemprop="reviewRating"
                    itemscope
                    itemtype="http://schema.org/Rating"
                    class="star-rating"
                    title
                  >
                    <span>
                      <strong itemprop="ratingValue">4</strong> out of 5
                    </span>
                  </div>
                  <p class="meta">
                    <strong itemprop="author">{{review.name}}</strong> –
                    <time itemprop="datePublished" datetime="2016-06-07T11:57:59+00:00">{{review.date}}</time>:
                  </p>
                  <div itemprop="description" class="description">
                    <p>{{review.description}}</p>
                  </div>
                </div>
              </div>
            </li>
</template>
<script>
export default {
	name:"Review",
	  props: {
    review: {
      type: Object,
      default: () => {}
    }
  }
}
</script>