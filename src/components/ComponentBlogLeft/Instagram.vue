<template>
  <li>
    <a href="#">
      <img :src="instagram.image" alt />
    </a>
  </li>
</template>
<script>
export default {
  name: "Instagram",
    props: {
    instagram: {
      type: Object,
      default: () => {}
    }
  }
};
</script>