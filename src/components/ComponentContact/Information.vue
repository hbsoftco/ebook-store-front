<template>
  <div>
    <li class="col-md-3 col-sm-6 col-xs-12">
      <article class="entry-item">
        <div :class="information.icon">
          <i :class="information.ls"></i>
        </div>
        <div class="entry-content">
          <h3>{{information.name}}</h3>
          <p>{{information.location}}
			  <br />
          </p>
        </div>
      </article>
    </li>
  </div>
</template>
<script>
export default {
  name: "Information",
    props: {
    information: {
      type: Object,
      default: () => {}
    }
  }
};
</script>