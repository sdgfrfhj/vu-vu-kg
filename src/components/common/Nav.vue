<template>
<div class="swiper-container1">
	<nav class="swiper-wrapper nav">
		<router-link class="swiper-slide" v-for="nav in navList" :to="nav.path" :key="nav.id">{{nav.text}}</router-link>
	</nav>
  </div>
</template>

<script>
import Swiper from '_swiper@3.4.2@swiper';
import '_swiper@3.4.2@swiper/dist/css/swiper.min.css';
	export default{
		name:"nav",
		data(){
			return{
				navList: [
                   			{path: '/home', text: '新歌'},
                   			{path: '/bang', text: '歌单'},
                   			{path: '/category', text: '排行'},
                   			{path: '/artist', text: '歌手'},
                            {path: '/aaa', text: '专辑'}
               			 ]
					}
				},
             	mounted() {
               		var swiper = new Swiper('.swiper-container1', {
              	 	freeMode : true,
              	 	freeModeMomentumRatio: 0.5,
					slidesPerView: 'auto'
            });
        }
	}
</script>

<style>
.swiper-container1{margin-top: 3.75rem;width: 100%;height: 2.75rem;line-height: 2.75rem;position: relative;z-index: 9; background: #fff;}
.nav{z-index: 10;width: 100%;height: 2.6rem;background: #fff;margin-top: 3.75rem;display: flex;}
.nav a{width:8rem;height: 2.6rem;display: inline-block;float:left;font-size: 1.1rem;text-align: center;line-height: 2.6rem;color: #333; border-bottom: 2px solid transparent;text-decoration: none;border-bottom: 1px solid #ddd;}
a.router-link-active{  border-bottom: 1px solid #2095dd;color: #2095dd;}
</style>