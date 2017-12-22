<template>
	<div class="search_box">
	  <div class="mod_search_bar">
		<div class="search_bar_cont">
			<form id="search_form">
				<input class="search_input" type="search" v-model="key" placeholder="搜索歌曲、歌单、专辑" @focus="focus" />
				<span class="icon_search">搜索</span>
				<span class="icon_delete" v-if="!this.key==''" @click="deleteSearch">删除</span>
			</form>
		</div>
		<div class="cancel_btn" :class="{'search-cancel-show':searchShow}" @click="searchCancel">取消</div>
	  </div>
	  <div class="mod_search_result" :class="{'search_result':resultShow}">
		<h3 class="result_tit">热门搜索</h3>
		<div class="result_tags">
    		<a href="javascript:;" class="tag_s tag_hot">梦想的声音第二季</a>
    		<a href="javascript:;" class="js_keyword tag_s">DJ舞曲(华语)系列5 DJ </a>
    		<a href="javascript:;" class="js_keyword tag_s">WHAT ARE WORDS </a>
    		<a href="javascript:;" class="js_keyword tag_s">中国好声音 第六季 </a>
    		<a href="javascript:;" class="js_keyword tag_s">非酋 薛明媛/朱贺 </a>
    		<a href="javascript:;" class="js_keyword tag_s">一生所爱 卢冠廷 </a>
   			<a href="javascript:;" class="js_keyword tag_s">舍得 </a>
		</div>
	  </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				key: '',
				searchShow: false,
				resultShow: false
			}
		},
		methods: {
			focus: function(){
				this.searchShow=true;
				this.resultShow=true;
			},
			searchCancel: function(){
				this.searchShow=false;
				this.resultShow=false;
			},
			deleteSearch: function(){
				this.key="";
			}
		},
		computed: {
			
		}
	}	
</script>

<style scoped>
	.search_box{
		margin-top: 10px;
	}
	.mod_search_bar{
		background: #f4f4f4;
    	padding: 10px;
    	display: -webkit-box;
    	-webkit-box-orient: horizontal;
    	-webkit-box-align: center;
	}
	.search_bar_cont{
		position: relative;
    	border-radius: 3px;
    	background: #fff;
    	height: 20px;
    	padding: 8px 12px 8px 35px;
    	-webkit-box-flex: 1;
	}
	.search_input{
		height: 20px;
    	line-height: 20px;
    	width: 100%;
    	color: rgba(0,0,0,.3);
    	border: none;
    	-webkit-appearance: none; 
    	font-size: 14px;
    	outline: none;
	}
	.icon_search{
		position: absolute;
    	top: 9px;
    	left: 10px;
    	width: 18px;
    	height: 18px;
    	background-image:url(../../../static/img/sousuo.png);
    	background-repeat: no-repeat;
    	background-size: cover;
    	text-indent: -999px;
	}
	.icon_delete{
		position: absolute;
    	top: 9px;
    	right: 12px;
    	width: 18px;
    	height: 18px;
    	background: #b1b1b1;
    	text-indent: -9999px;
    	border-radius: 99px;
	}
	.icon_delete:before,.icon_delete:after{
		content:"";
		display:block;
		position:absolute;
		left:50%;
		top:50%;
		border-radius:8px;
		background:#fff;
		-webkit-transform:rotate(45deg);
	}
	.icon_delete:before{
		width:10px;
		height:2px;
		margin-left:-5px;
		margin-top:-1px;
	}
	.icon_delete:after{
		width:2px;
		height:10px;
		margin-left:-1px;
		margin-top:-5px;
	}
	.cancel_btn{
		padding-right: 10px;
    	padding-left: 10px;
    	font-size: 14px;
    	height: 36px;
    	line-height: 36px;
    	display: none;
	}
	.search-cancel-show{
		display: block;
	}
	.search_result{
		display: none;
	}
	.mod_search_result{
		background: #fff;
    	padding: 15px 15px 10px 15px;
	}
	.mod_search_result .result_tit{
		color: rgba(0,0,0,.6);
    	margin-bottom: 8px;
	}
	.mod_search_result .tag_s{
		display: inline-block;
    	font-size: 14px;
    	padding: 0 10px;
    	height: 30px;
    	line-height: 30px;
    	color: #000;
    	border: 1px solid rgba(0,0,0,.6);
    	border-radius: 99px;
    	word-break: keep-all;
    	margin-bottom: 10px;
    	margin-right: 14px;
	}
	.mod_search_result .tag_hot{
		color: #fc4524;
    	border-color: #fc4524;
	}
</style>