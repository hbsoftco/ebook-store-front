<template>
  <div class="woocommerce-tabs wc-tabs-wrapper">
    <ul class="tabs wc-tabs">
      <li class="description_tab">
        <a href="#tab-description">Description</a>
      </li>
      <li class="reviews_tab active">
        <a href="#tab-reviews">Reviews (3)</a>
      </li>
    </ul>
    <div class="panel entry-content wc-tab" id="tab-description">
      <h2>Product Description</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </div>
    <div class="panel entry-content wc-tab active" id="tab-reviews">
      <div id="reviews">
        <div id="comments">
          <h2>3 reviews for this product</h2>
          <ol class="commentlist">
			  	 <Review v-for="review in reviews" :key="review.id" :review="review" />

          </ol>
        </div>
        <div id="review_form_wrapper">
          <div id="review_form">
            <div id="respond" class="comment-respond">
              <h3 class="comment-reply-title">Add a review</h3>
              <form action="#" method="post" class="comment-form" novalidate>
                <p class="comment-form-comment">
                  <label>Your Review</label>
                  <textarea name="comment" cols="45" rows="4"></textarea>
                </p>
                <p class="form-submit">
                  <input name="submit" type="submit" class="submit" value="Submit" />
                  <input type="hidden" name="rd1" value="40" />
                  <input type="hidden" name="rd2" value="0" />
                </p>
                <input type="hidden" value />
              </form>
            </div>
            <!-- #respond -->
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Review from "./Review"
export default {
	name:"DescriptionReview",
	components:{
		Review,
	},
	data(){
		return{
			reviews: [
				{
			id:1,
			name:"Deve",
			description:"Another great quality product that anyone who see’s me wearing has asked where to purchase one of their own.",
			image:"images/p25/1.jpg",
			date:"Deve – June 7, 2016:"
			},
			{
			id:2,
			name:"John Doe",
			description:"Another great quality product that anyone who see’s me wearing has asked where to purchase one of their own.",
			image:"images/p25/2.jpg",
			date:"Deve – June 7, 2016:"
			},
			{
			id:3,
			name:"Stuart",
			description:"Another great quality product that anyone who see’s me wearing has asked where to purchase one of their own.",
			image:"images/p25/3.jpg",
			date:"Deve – June 7, 2016:"
			},
			]
		}
	}
}
</script>