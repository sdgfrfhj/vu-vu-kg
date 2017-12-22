<template>
  <div id="app">
   <app-header></app-header>
   <app-nav></app-nav>
   <transition name="fade" mode="out-in">
   <keep-alive>	
   <router-view class="view"></router-view>
   </keep-alive>	
   </transition>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Nav from './components/common/Nav.vue';

export default {
  name: 'app',
  components:{
   "app-header":Header,
   "app-nav":Nav
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
@media screen and (min-width: 320px) {
        html, body { font-size: 12px !important; }
    }
    @media screen and (min-width: 360px) {
        html, body { font-size: 13.5px !important; }
    }
    @media screen and (min-width: 375px) {
        html, body { font-size: 14px !important; }
    }
    @media screen and (min-width: 414px) {
        html, body { font-size: 15.5px !important; }
    }
    @media screen and (min-width: 720px) {
        html, body { font-size: 27px !important; }
    }
    @media screen and (min-width: 1024px) {
        html, body { font-size: 38.4px !important; }
    }
    @media screen and (min-width: 1080px) {
        html, body { font-size: 40.5px !important; }
    }
    @media screen and (min-width: 1366px) {
        html, body { font-size: 51px !important; }
    }
    @media screen and (min-width: 1440px) {
        html, body { font-size: 54px !important; }
    }
    @media screen and (min-width: 1600px) {
        html, body { font-size: 60px !important; }
    }
    @media screen and (min-width: 1920px) {
        html, body { font-size: 72px !important; }
    }
    body, html {
        margin: 0;
        padding: 0;
    }
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,textarea,p,blockquote,th,td,iframe {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif
		}
		a{text-decoration: none;}
    .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-active {
            opacity: 0;
        }
</style>
