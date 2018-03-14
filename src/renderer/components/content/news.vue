<template>
	<div id="news">
		<ul id="news_lists">
			<li>
				<search></search>
			</li>
			<li class="news_list" v-for="list in news">
				<img class="headerImg" src="../../assets/img/head.jpg">
				<p class="user_name" v-if="list.realname">{{ list.realname }}</p>
				<p class="user_name" v-else>{{ list.nickname }}</p>
			</li>
		</ul>
		<chat-area id="news_area"></chat-area>
	</div>
</template>
<script>
	import chatArea from './chatarea.vue'
	import search from './seach.vue'
	export default{
		data(){
			return{
				news:[
					{
						nickname: '风信子',
						headerImg: '',
						realname: '小富11111111111111111111111'
					}
				]
			}
		},
		components:{
			chatArea,
			search
		}
	}
</script>
<style type="text/css" scoped>
	#news_lists{
		width: 250px;
		height: 100%;
		background: #EEDFCC;
	}
	#news_area{
		width: calc(100% - 250px);
		background: #F0FFF0;
	}
	.news_list{
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}
	.news_list:hover{
		background: #bfbfbf;
	}
	.headerImg{
		width: 40px;
		height: 40px;
		vertical-align: top;
	}
	.user_name{
		box-sizing: border-box;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding-left: 10px;
		width: calc(100% - 40px);
		font-family: '宋体';
	}
</style>