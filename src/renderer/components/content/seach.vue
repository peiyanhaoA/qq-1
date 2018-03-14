<template>
	<div id="search">
		<span>
			<input type="text" class="search_ipt" placeholder="搜索" name="">
			<span title="搜索" class="iconfont icon-search"></span>
		</span>
		<span title="群聊" class="iconfont icon-add1"></span>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	#search{
		width: 100%;
		box-sizing: border-box;
		padding: 20px 10px;
		display: flex;
		justify-content: space-between;
	}
	#search>span{
		border: 1px solid #707070;
	}
	#search input{
		width: 150px;
		height: 22px;
		border: none;
		outline: none;
		vertical-align: bottom;
		background: #EEDFCC;
		padding-left: 2px;
	}
	#search .iconfont{
		color: #707070;
		font-size: 17px;
		padding: 0 3px;
	}
</style>