<template>
	<div id="singn">
		<div id="singn_menu">
			<button title="最小化" @click="mins" class="iconfont icon-23jianhao menu_btn1 drag"></button>
			<button title="关闭" @click="quit" class="iconfont icon-cuohao menu_btn2 drag"></button>
		</div>
		<h1>欢迎注册</h1>
		<h3>
			<span>每一天，乐在沟通</span>
			<a href="#" @click="goLogin" class="drag">已有账号登录</a>
		</h3>
		<div id="singn_main">
			<div id="sing_img">
				
			</div>
			<div id="singn_content">
				<input class="drag" type="text" placeholder="昵称" v-model="userInfo.name">
				<input class="drag" type="password" placeholder="密码" v-model="userInfo.password">
				<input class="drag" type="password" placeholder="确认密码" v-model="pwd">
				<input class="drag" type="text" placeholder="手机号" v-model="userInfo.telphone">
				<input class="drag" type="button" @click="register"  value="注册">
			</div>
		</div>
	</div>
</template>
<script>
	import electron from 'electron'
	import $ from 'jquery'
	export default{
		data(){
			return{
				userInfo:{
					name: '',
					password: '',
					telphone: ''
				},
				pwd: ''
			}
		},
		methods:{
			goLogin(){
				this.$router.push({name: 'login'});
			},
			mins(){
				let win = electron.remote.getCurrentWindow();
				win.minimize()
			},
			quit(){
				let win = electron.remote.getCurrentWindow();
				win.close()
			},
			register(){
				let vm = this;
				$.ajax({
					type: 'POST',
					url: 'http://192.168.8.173:3000/singn',
					dataType: 'json',
					data: vm.userInfo,
					success(res){
						console.log(res)
					}
				})
			}
		}
	}
</script>
<style type="text/css" scoped>
	#singn{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.drag{
		-webkit-app-region: no-drag;
	}
	#singn_menu{
		display: flex;
		justify-content: flex-end;
		background: linear-gradient(skyblue 60%, #FAF0E6);
		height: 60px;
	}
	.menu_btn1, .menu_btn2{
		border: none;
		outline: none;
		background: rgba(0,0,0,0) ! important;
		width: 28px;
		height: 26px;
	}
	.menu_btn1:hover{
		background: #ccc !important;
	}
	.menu_btn2:hover{
		background: #B22222  !important;
	}
	h1{
		position: absolute;
		top: 10px;
		left: 20px;
	}
	h3{
		width: 80%;
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
	}
	#singn_main{
		height: 220px;
		display: flex;
		justify-content: space-around;
	}
	#sing_img{
		width: 200px;
		height: 220px;
		background: url('../../assets/img/timg.gif') no-repeat;
		background-size: 100% 100%;
	}
	#singn_content{
		height: 220px;
		/*background: red;*/
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	#singn_content input{
		width: 230px;
		height: 33px;
		outline: none;
		border-radius: 3px;
		font-size: 16px;
		padding-left: 5px;
		box-sizing: border-box;
		border: 1px solid #4169E1;
	}
</style>