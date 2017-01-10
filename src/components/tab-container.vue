<template>
  <div>
    <div class="nav">
      <div v-on:click="active = 'tab1'" :active="active == 'tab1'">tab 1</div>
      <div v-on:click="active = 'tab2'" :active="active == 'tab2'">tab 2</div>
      <div v-on:click="active = 'tab3'" :active="active == 'tab3'">tab 3</div>
      <div v-on:click="active = 'tab4'" :active="active == 'tab4'">tab 4</div>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab1">
          <mt-cell v-for="n in 30" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <mt-cell v-for="n in 30" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
          <mt-cell v-for="n in 30" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab4">
          <mt-cell v-for="n in 30" title="tab-container 4"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    {{active}}
  </div>
</template>

<script>
  export default {
    name: 'page-tab-container',
    data() {
      return {
        active: 'tab1'
      };
    }
  };
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    z-index: 2;
    width: 100%;
    display: inline-block;
    > div {
      width: 25%;
      float: left;
      text-align: center;
      height: 40px;
      line-height: 40px;
      &:nth-child(1) {
        background: #ffad9d;
      }
      &:nth-child(2) {
        background: #a9beff;
      }
      &:nth-child(3) {
        background: #87ff7c;
      }
      &:nth-child(4) {
        background: #ff5a49;
      }
      &[active=true] {
        border-bottom: 5px solid #000;
        transition: all .2s;
      }
    }
  }
</style>
