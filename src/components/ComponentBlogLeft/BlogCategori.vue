<template>
  <li>
    <a href="#">{{blogcategori.name}}</a>
    <span>{{blogcategori.year}}</span>
  </li>
</template>
<script>
export default {
  name: "BlogCategori",
    props: {
    blogcategori: {
      type: Object,
      default: () => {}
    }
  }
};
</script>