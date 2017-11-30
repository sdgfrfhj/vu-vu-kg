<template>
<div id="toplist_wrap" class="mod_topic" ref="wrapper">
  <ul>
	<li class="topic_item" v-for="music in data">
        <div class="topic_main">
            <a href="javascript:;" class="topic_media">
                <img width="100" height="100" v-lazy="music.picUrl">
                <span class="listen_count"><i class="icon icon_listen"></i>{{music.listenCount | thousand}}万</span>
            </a>
            <div class="topic_info">
                <div class="topic_cont">
                    <h3 class="topic_tit">{{music.topTitle}}</h3>
                    <p v-for="(song,index) in music.songList">{{index+1}}<span class="text_name">{{song.songname}}</span>- {{song.singername}}</p>
                </div>
                <i class="topic_arrow"></i>
            </div>
        </div>
    </li>
 </ul>
 <div class="listload" v-show="!data.length">
 	<loading></loading>
 </div>
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import axios from 'axios'
	import Loading from '../../components/loading/loading'
	const API_PROXY = 'https://bird.ioliu.cn/v2/?url='
	
	export default{
		data () {
			return{
				data: []
			}
		},
		mounted () {
			var _this=this;
			axios.get(API_PROXY + 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=197018174&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1510881860404').then(function(res){
				setTimeout(() =>{
				_this.data=res.data.data.topList;
				},1000)
				console.log(_this.data);
			},function(error){
				console.log(error);
			});
		},
		filters: {
			thousand(value){
				return (value/10000).toFixed(1)
			}
		},
		created () {
			this.$nextTick(() => {
                this._initScroll();
            });
		},
		methods: {
            _initScroll () {
                if(!this.songScroll){
                	this.songScroll=new BScroll(this.$refs.wrapper,{
                    click:true
                	});
            	}else{
                	this.songScroll.refresh();
            	}
        	}
    	},
    	watch: {
    		data(){
    			setTimeout(() =>{
    				this.songScroll && this.songScroll.refresh()
    			},20)
    		}
    	},
    	components: {
    		Loading
    	}
	}
</script>

<style scoped>
ul,li{list-style: none;}
.mod_topic{background: #f4f4f4;width:100%;height: 500px;overflow: hidden;margin-top: 5px;}
.topic_item{margin-bottom: 10px;overflow: hidden;}	
.topic_main{display: -webkit-box;background: #fff;}
.topic_media{display: block;position: relative;}
.topic_media img{display: block;width: 100px;height: 100px;position: relative;}
.listen_count{position: absolute;display: block;left:5px;bottom:7px;line-height:12px;color:#fff;opacity:.6;font-size:9px;z-index:10;}
.icon_listen{display:block;float:left;width:10px;height:10px;background-position:0 -50px;margin-right:3px;background-image:url(../../../static/img/list_sprite.png?max_age=19830212&d=20151105145423);background-repeat:no-repeat;background-size:24px 60px;z-index:10}
.topic_info{position: relative;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;-webkit-box-flex: 1;}
.topic_cont{-webkit-box-flex: 1;margin: 0 10px 0 15px;}
.topic_arrow{position:absolute;right:10px;top:50%;margin-top:-4px;width:6px;height:6px;border-right:1px solid #b2b2b2;border-bottom:1px solid #b2b2b2;-webkit-transform:rotate(-45deg)}
.topic_tit,.topic_cont p{font-size:16px;color:#000;font-weight:normal;margin-bottom:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.mod_topic li .topic_cont p{font-size:14px;color:rgba(0,0,0,.5)}
.mod_topic li .topic_cont .text_name{color:#000;margin-left:8px;margin-right:5px}
.listload{position: fixed;top: 50%;left: 40%;}
</style>