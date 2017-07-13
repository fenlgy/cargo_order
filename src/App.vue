<style lang="less">
  @theme-color: #3b424d;
  @sidebar-width:100px;

  * {
    box-sizing: border-box
  }

  body, html {
    height: 100%;
    margin: 0;
    background: #f5f5f5;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .layout {
    height: 100%;

    &__sidebar {
      position: fixed;
      height: 100%;
      top: 0;
      left: 0;
      background: @theme-color;
      color: #fff;
      width: @sidebar-width;
      border-right: 1px solid #1c2438;
      box-shadow: 2px 0 4px rgba(0, 0, 0, .3);
    }

    &__body {
      width: 100%;
      height: 100%;
      padding:24px 24px 24px @sidebar-width+24px;
    }
  }

  .menu {
    &__item {
      margin: 8px;
      text-align: center;
      font-size: 12px;
    }

    &__link {
      display: block;
      padding: 4px;
      color: tint(@theme-color, 70%);
      border: 1px solid shade(@theme-color, 30%);
      background: tint(@theme-color, 10%);
      border-radius: 3px;
      box-shadow: 1px 1px 0 tint(@theme-color, 8%), inset 1px 1px 0 tint(@theme-color, 20%);

    }
  }

  iframe {
    vertical-align: top;
  }
</style>


<template>
  <div class="layout">
    <div class="layout__sidebar">
      <ul class="menu">
        <li class="menu__item">
          <router-link to="/home" class="menu__link">Home</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/booking" class="menu__link">Booking</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/booking-iview" class="menu__link">Booking</router-link>
        </li>
      </ul>
    </div>
    <div class="layout__body">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'app'
  }
</script>
