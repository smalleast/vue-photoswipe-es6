<template lang="html">
  <section class="auth">
    <WpSwipe :list="list"></WpSwipe>
  </section>
</template>

<script>
  import WpSwipe from 'components/wp-swipe.vue'
  import LotItem from 'components/lot-item.vue'
  export default {
    data() {
      return {};
    },
    components: {
      WpSwipe, LotItem
    },
    props: ["list"]

  }
  ;
</script>

