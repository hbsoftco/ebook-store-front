<template>
  <div>
    <li class="col-md-3 col-sm-3 col-xs-3">
      <article class="entry-item ct-item-4 style-01">
        <div class="entry-thumb">
          <a href="#">
            <img :src="bookshop.image" alt />
          </a>
          <div class="entry-content">
            <header>
              <h4 class="entry-title">
                <a href="#">{{bookshop.title}}</a>
              </h4>
              <div class="kopa-rating">
                <ul>
                  <li>
                    <span class="fa fa-star"></span>
                  </li>
                  <li>
                    <span class="fa fa-star"></span>
                  </li>
                  <li>
                    <span class="fa fa-star"></span>
                  </li>
                  <li class="hactive">
                    <span class="fa fa-star"></span>
                  </li>
                  <li class="inactive">
                    <span class="fa fa-star"></span>
                  </li>
                </ul>
              </div>
            </header>
            <p>{{bookshop.description}}</p>
            <p class="ct-space-1"></p>
            <div class="ct-icon-1">
              <p>
                <span>$</span>20
              </p>
            </div>
            <footer>
              <div class="ft-wrap style-01">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-user"></i>
                      by John Doe
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-folder-o"></i>
                      magazine
                    </a>
                  </li>
                </ul>
              </div>
              <div class="ft-wrap style-02">
                <ul>
                  <li>
                    <div class="add-to-wishlist">
                      <div>
                        <a href="#" class="add_to_wishlist">
                          <i class="ti-heart"></i>
                          <span>Wishlist</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ti-shopping-cart"></i>
                      <span>Add to cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      <i class="ti-new-window"></i>
                      <span>Details</span>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </article>
      <div class="badge-icon-1 style-01">
        New
        <span></span>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  name: "BookShop",
  props: {
    bookshop: {
      type: Object,
      default: () => {}
    }
  }
};
</script>