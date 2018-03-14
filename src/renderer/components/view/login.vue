<template>
	<div id="login">
		<div id="menu">
			<div id="login_btns">
				<button title="设置" class="iconfont icon-htmal5icon03 menu_btn1"></button>
				<button title="最小化" @click="mins" class="iconfont icon-23jianhao menu_btn1"></button>
				<button title="关闭" @click="quit" class="iconfont icon-cuohao menu_btn2"></button>
			</div>
		</div>
		<div id="content">
			<div class="contentD">
				<img class="headerImg" src="../../assets/img/head.jpg" height="666" width="1024" alt="">
			</div>
			<div class="contentD">
				<div id="username" class="homeInp drag">
					<input type="text" v-model="user.telphone" placeholder="手机号">
					<a href="#" @click="regist">注册账号</a>
				</div>
				<div id="pwd" class="homeInp drag">
					<input type="password"  v-model="user.password" placeholder="密码">
					<a href="#" title="">忘记密码</a>
				</div>
				<div id="checkboxs">
					<div class="drag">
						<input id="getpwd" type="checkbox">
						<label for="getpwd" class="homeText">记住密码</label>
					</div>
					<div class="drag">
						<input id="runlog" type="checkbox">
						<label for="runlog" class="homeText">立即登录</label>
					</div>
				</div>
				<div id="contentBtn">
					<button @click="login" class="drag" type="button">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import electron from 'electron'
	import $ from 'jquery'
	import crypto from 'crypto'
	export default{
		data(){
			return{
				user:{
					telphone: '',
					password: ''
				},
				key: ''
			}
		},
		mounted(){
			// let vm = this;
			// $.ajax({
			// 	type: 'POST',
			// 	url: 'http://192.168.8.173:3000/home',
			// 	dataType: 'json',
			// 	success(res){
			// 		vm.key = res.key;
			// 	}
			// })
		},
		methods:{
			mins(){
				let win = electron.remote.getCurrentWindow();
				win.minimize()
			},
			quit(){
				let win = electron.remote.getCurrentWindow();
				win.close()
			},
			login(){
				let win = electron.remote.getCurrentWindow();
				let vm = this;
				
				$.ajax({
					type: 'POST',
					url: 'http://192.168.8.173:3000/login',
					dataType: 'json',
					data: vm.user,
					success(res){
						console.log(res)
					}
				})
				// win.hide();
				// setTimeout(function(){
				// 	win.show();
				// 	vm.$router.push({name: 'main'});
				// },2000)
			},
			regist(){
				this.$router.push({name: 'singn'})
			}
		}
	}
</script>
<style type="text/css">
	#login{
		width: 100%;
		height: 100%;
	}
	#menu{
		width: 100%;
		height: 50%;
		background: url('../../assets/img/login-bg.gif') no-repeat;
		background-size: 100% 100%;
	}
	#login_btns{
		display: flex;
		justify-content: flex-end;
	}
	#login_btns button{
		border: none;
		outline: none;
		background-color: rgba(0,0,0,0);
		-webkit-app-region: no-drag;
		color: #fff;
		width: 28px;
		height: 25px;
	}
	.menu_btn1:hover{
		background: #ccc !important;
	}
	.menu_btn2:hover{
		background: #B22222  !important;
	}	
	.headerImg{
		width: 90px;
		height: 90px;
		border-radius: 50%;
	}
	#content{
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.contentD{
		margin-left: 20px;
	}
	.homeInp input{
		width: 170px;
		height: 20px;
		font-size: 14px;
		padding-left: 5px;
	}
	#checkboxs{
		width: 170px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding: 5px 0;
		color: #8cc5c5;
	}
	#checkboxs input{
		width: 14px;
		height: 14px;
		vertical-align: bottom;
		border: none;
	}
	.drag{
		-webkit-app-region: no-drag;
	}
	a{
		text-decoration:none;
		font-size: 12px;
	}
	#contentBtn button{
		width: 170px;
		height: 24px;
		outline: none;
		background: #4169E1;
		border: none;
		border-radius: 4px;
		color: #fff;
	}
</style>