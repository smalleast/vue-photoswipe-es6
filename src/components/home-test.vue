<template>
  <div class="page-button">
    <div class="page-button-group">
      <div>开始日期：{{dateStart}}<br>结束日期：{{dateEnd}}</div>
      <input type="text" v-model="txtVal">
      <mt-button size="large" @click.native="handleClick">toast</mt-button>
      <mt-button size="large" @click.native="indicatorClick">indicator</mt-button>
      <mt-button size="large" @click.native="topTip = true">popup</mt-button>
      <mt-button size="large" @click.native="bottomTip = true">popup-slots</mt-button>
    </div>
    <mt-popup v-model="topTip" position="top" class="mint-popup-2" :modal="false">
      <p class="topUpdate">更新成功</p>
    </mt-popup>
    <mt-popup v-model="bottomTip" position="bottom" class="mint-popup-4">
      <div class="bottomSelect">
        <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        topTip: false,
        bottomTip: false,
        txtVal: "loading....",
        dateStart: "",
        dateEnd: "",
        dateSlots: [
          {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2016-001', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    watch: {
      topTip(val) {
        if (val) {
          setTimeout(() => {
            this.topTip = false;
          }, 2000);
        }
      }
    },
    methods: {
      handleClick: function () {
        this.$toast({
          message: this.txtVal,
          position: 'middle',
          duration: 5000
        });
      },
      indicatorClick: function () {
        this.$indicator.open({
          text: this.txtVal,
          spinnerType: 'fading-circle'
        });
        setTimeout(() => this.$indicator.close(), 2000)
      },
      popupClick: function () {

      },
      onDateChange(picker, values) {
        console.log(picker);
        console.log(values);
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
      }
    }
  };

</script>
<style lang="scss">
  .page-button-group {
    width: 200px;
    text-align: center;
    margin: 10px auto;
    div {
      width: 100%;
      text-align: left;
      line-height: 24px;
      color: #f00;
      font-size: 12px;
      margin-bottom:10px;
    }
    input, button {
      width: 100%;
      height: 30px;
      margin-bottom: 20px;
    }
  }

  .topUpdate {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 0 0 5px 5px;
    background: rgba(44, 140, 20, .8);
    color: #fff;
  }

  .bottomSelect {
    width: 376px;
    border-radius: 5px 5px 0 0;
    background: rgba(238, 238, 238, .6);
  }
</style>


