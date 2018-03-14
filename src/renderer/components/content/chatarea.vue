<!-- 聊天区域 -->
<template>
	<div id="chatarea">
		<ul>
			<li id="chatarea_btns">
				<span class="iconfont icon-23jianhao" title="最小化" @click="min"></span>
				<span class="iconfont icon-fangxingweixuanzhong" title="最大化" @click="max"></span>
				<span class="iconfont icon-cuohao" title="关闭" @click="cancel"></span>
			</li>
			<li id="chatcont">
				<span class="contname"></span>
				<span class="iconfont icon-gengduo3 moreset"></span>
			</li>
		</ul>
		<div id="chat_content">
			
		</div>
		<div id="text_area">
			<div id="text_btns"></div>
			<textarea></textarea>
			<button id="send">发送(S)</button>
		</div>
	</div>
</template>
<script>
	import electron from 'electron'
	export default{
		data(){
			return{
				ismax: false
			}
		},
		methods:{
			min(){
				let win = electron.remote.getCurrentWindow();
				win.minimize();
			},
			max(){
				let win = electron.remote.getCurrentWindow();
				let vm = this;
				console.log(vm.ismax)
				let WH = win.getSize();
				if(vm.ismax){
					vm.ismax = false;
					win.unmaximize()
				}else{
					vm.ismax = true;
					win.maximize();
				}
			},
			cancel(){
				let win = electron.remote.getCurrentWindow();
				win.close();
			}
		}
	}
</script>
<style type="text/css" scoped>
	#chatarea_btns{
		display: flex;
		justify-content: flex-end;
	}
	#chatarea_btns span{
		width: 32px;
		height: 28px;
		text-align: center;
		line-height: 28px;
		font-size: 10px;
		font-weight: 100;
	}
	#chatcont{
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px 20px;
	}
	#chat_content{
		width: 100%;
		height: 57%;
		box-sizing: border-box;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	#text_area{
		width: 100%;
		height: calc(43% - 65px);
		padding: 10px 20px;
		box-sizing: border-box;
	}
	#text_btns{
		width: 100%;
		height: 25px;
	}
	#text_area textarea{
		width: 100%;
		box-sizing: border-box;
		height: calc(100% - 55px);
		border: none;
		resize: none;
		outline: none;
		font-size: 16px;
		background: #F0FFF0;
	}
	#send{
		position: absolute;
		width: 70px;
		height: 23px;
		font-size: 13px;
		letter-spacing: 1px;
		margin-left: 20px;
		outline: none;
		background: #F0FFF0;
		border: none;
		border: 1px solid #ccc;
		right: 20px;
		bottom: 6px;
	}
	#text_area textarea::-webkit-scrollbar{
		width: 7px;
	}
	#text_area textarea::-webkit-scrollbar-button{
		display: none;
	}
	#text_area textarea::-webkit-scrollbar-thumb{
		background: skyblue;
        border-radius:4px;
	}
</style>