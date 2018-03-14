<template>
	<div id="main">
		<ul id="icon_lists">
			<li>
				<img class="user_header icon_btn" src="../../assets/img/header.jpg" alt="加载中">
			</li>
			<li>
				<span class="icon_btn iconfont icon-bubble icon_list" @click="toggle('news')"></span>
			</li>
			<li>
				<span class="icon_btn iconfont icon-renyuanjieshao icon_list" @click="toggle('news')"></span>
			</li>
			<li>
				<span class="icon_btn iconfont icon-lifangtilitiduomiantifangkuai icon_list" @click="toggle('news')"></span>
			</li>
			<li>
				<span id="more" class="icon_btn iconfont icon-gengduo icon_list"></span>
			</li>
		</ul>
		<component id="comp" :is="tableView"></component>
	</div>
</template>
<script>
	import news from './news.vue'
	import electron from 'electron'
	export default{
		data(){
			return{
				tableView: 'news'
			}
		},
		methods:{
			toggle(el){
				console.log(el)
				this.tableView = el;
			}
		},
		components:{
			news
		},
		mounted(){
			let win = electron.remote.getCurrentWindow();
			win.setMinimumSize(700, 500);
			win.setResizable(true);
		}
	}
</script>
<style type="text/css" scoped>
	#main{
		width: 100%;
		height: 100%;
		background: #fff;
		display: flex;
		border-radius: 4px;
	}
	#icon_lists{
		width: 60px;
		height: 100%;
		background: #333333;
		-webkit-app-region: drag;
	}
	#icon_lists li{
		width: 100%;
		height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #66CDAA;
	}
	.user_header{
		width: 35px;
		height: 35px;
		border-radius: 3px;
	}
	.icon_btn{
		cursor: pointer;
		-webkit-app-region: no-drag;
	}
	.icon_list{
		font-size: 25px;
	}
	.icon_list:hover{
		color: #ccc;
	}
	#more{
		position: absolute;
		bottom: 20px;
	}
	#comp{
		width: calc(100% - 60px);
		height: 100%;
		display: flex;
		justify-content: space-around;
	}
</style>