<template>
	<ul class="qui_list">
		<li class="qui_list__item" v-for="sort in sortList">
		<div class="qui_list__order">
			<span :class="{qui_list__decimal}">{{sort.cur_count}}</span>
		</div>
		<div class="qui_list__bd">
			<div class="qui_list__box">
			<h3 class="qui_list__tit"><span class="qui_list__txt">{{sort.data.songname}}</span></h3>
			<p class="qui_list__desc">
			<span class="qui_list__txt" v-for="singername in sort.data.singer">{{singername.name}}&nbsp;&nbsp;</span>
			<span class="qui_list__txt" v-if="sort.data.albumdesc">&nbsp. {{sort.data.albumdesc}}</span>
			</p>
		</div>
		</div>
		</li>
	</ul>
</template>


<script>
import axios from 'axios'
const API_PROXY='https://bird.ioliu.cn/v2/?url='
	export default {
		data() {
			return {
				qui_list__decimal:true,
				sortList: []
			}
		},
		created(){
			var _this=this;
			axios.get(API_PROXY + 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1018848995&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1511162132666').then((res) => {
				_this.sortList = res.data.songlist;
				console.log(_this.sortList);
			},function(error){
				console.log(error);
			})
		}
	}
</script>

<style>
.sort-ul{
	padding-left: 1rem;
	margin-top: 0;
	overflow: hidden;
}
.qui_list__item{
	position: relative;
	display: -webkit-box;
}
.qui_list__item:nth-child(-n+3) .qui_list__decimal {
    color: #FF400B
}
.qui_list__order {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 45px;
    margin-right: -16px
}
.qui_list__order span{
	color: #777;
	font-size: 16px;
}
.qui_list__bd {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 10px 16px;
    overflow: hidden
}

.qui_list__box {
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical
}

.qui_list__desc,.qui_list__tit {
    display: block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.qui_list__tit {
    font-size: 16px;
    color: #000
}
.qui_list__desc .qui_list__txt{
	font-size: 10px;
	color: #777;
}
</style>