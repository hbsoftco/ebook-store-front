<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="widget readin-module-contact-1">
      <div class="widget-content text-center">
        <ul class="ul-mh row">
          <Information
            v-for="information in informations"
            :key="information.id"
            :information="information"
          />
        </ul>
      </div>
    </div>
    <!-- widget -->
  </div>
  <!-- col-md-12 -->
</template>
<script>
export default {
  name: "Fill"
};
</script>