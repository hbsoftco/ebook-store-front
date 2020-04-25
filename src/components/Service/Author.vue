<template>
  <li class="col-md-4 col-sm-4 col-xs-4">
    <div class="pt-column style-01">
      <div class="pt-header">
        <h3 class="pt-title">Basic Plan</h3>
        <div class="pt-price">
          <h4>
            <span>$</span>29
          </h4>
          <p>/ per Month</p>
        </div>
      </div>
      <div class="pt-content">
        <ul>
          <li>
            <h5>Features</h5>
          </li>
          <li>10 Upload Per Month</li>
          <li>02 Free Download</li>
          <li>05 GB Server Space</li>
          <li>60 Hit Per Day</li>
          <li>Author Page</li>
          <li>24/7 Customer Support</li>
          <li>Unlimited staff</li>
          <li class="footer-row">
            <a href="#" class="kopa-btn-14">get started</a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: "Author",
    props: {
    author: {
      type: Object,
      default: () => {}
    }
  }
};
</script>