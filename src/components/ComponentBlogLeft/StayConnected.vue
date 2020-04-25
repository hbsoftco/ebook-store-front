<template>
  <li class="style-01">
    <a href="#">
      <i :class="stayconnected.icon"></i>
      <p>{{stayconnected.flow}}</p>
      <span>{{stayconnected.discount}}</span>
    </a>
  </li>
</template>
<script>
export default {
  name: "StayConnected",
    props: {
    stayconnected: {
      type: Object,
      default: () => {}
    }
  }
};
</script>