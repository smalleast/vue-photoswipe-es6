<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in list">
        <a v-on:click="showPhotoSwipe(index,list)">
          <img :src="item | toQiNiuImg">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <pSwipe></pSwipe>
  </div>
</template>

<script>
  import config from 'components/services/config';
  import pSwipe from  'components/photo-swipe.vue';
  import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
  import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
  import 'photoswipe/dist/photoswipe.css';
  import 'photoswipe/dist/default-skin/default-skin.css';
  export default {
    data() {
      return {};
    },
    props: ["list"],
    methods: {
      showPhotoSwipe: function (inIndex, inItems) {
        var bodyElement = document.body;
        var index = inIndex || 0;
        var pswpElement = document.querySelectorAll('.photo-swipe')[0];
        var items = [];
        inItems.forEach(function (img) {
          items.push({
            src: config.IMG_SERVER + '/' + img,
            w: 0,
            h: 0
          });
        });

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
          index: index,
          history: false,
          preload: [1, 2]
        });

        gallery.listen('gettingData', function (index, item) {
          if (item.w < 1 || item.h < 1) { // unknown size
            var img = new Image();
            img.onload = function () { // will get size after load
              item.w = this.width * 1; // set image width
              item.h = this.height * 1; // set image height

              //gallery.invalidateCurrItems(); // reinit Items
              gallery.updateSize(true); // reinit Items
            };
            img.src = item.src; // let's download image
          }
        });

        bodyElement.className = 'photoswipe-open';

        gallery.listen('close', function () {
          bodyElement.className = 'photoswipe-open';
        });

        gallery.init();
      },
      showpreview: function (inIndex, inItems) {
        var viewItems = [];
        inItems.forEach(function (item, index) {
          viewItems[index] = config.IMG_SERVER + '/' + inItems[index];
        })
        console.log(viewItems);
        wx.previewImage({
          current: viewItems[inIndex],
          urls: viewItems
        });
      }
    },
    components: {
      config, pSwipe, PhotoSwipe, PhotoSwipeUI_Default
    }
  };
</script>
<style lang="scss">
  .mint-swipe {
    height: 300px;
    .mint-swipe-indicators {
      width: 98%;
      text-align: right;
      left: 0;
      transform: translateX(-0);
      .mint-swipe-indicator {
        opacity: .8;
        background: #ddd;
      }
      .is-active {
        background: #2745FF;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>


