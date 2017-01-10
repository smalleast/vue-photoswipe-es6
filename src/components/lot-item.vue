<template>
  <div class="lot-item">
    <div v-for="(item,index) in list">
      <img :src="item | toQiNiuImg" class="dc-img">
    </div>
  </div>
</template>

<script>
  import config from 'components/services/config';
  export default {
    data() {
      return {};
    },
    props: ["list"],
    methods: {},
    components: {
      config
    }
  };
</script>
<style lang="scss">
  @import "scss/public.scss";
  .lot-item {
    width: toRem(200);
  }
</style>


