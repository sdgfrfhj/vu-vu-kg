<template>
	<li v-if="seen" >
		<span class="title":title="song.title" v-on:click="songInfo">{{song.singer}} - {{song.title}}</span>
	</li>
</template>


<script>
	export default{
		props:['song'],
		data(){
			return{
				seen:true
			}
		},
		methods:{
			songInfo(){
				console.log(this.song.title)
			}
		}
		
	}
</script>

<style>
.kg-song{height: 325px;width: 100%;overflow: hidden;}
.song-ul{padding-left: 1rem;margin-top: 0;}
.song-ul li{font-size: 1.1rem;line-height: 3rem;border-bottom: 1px #ededed solid;list-style: none;}
.song-ul li span{display: block;}
</style>

 