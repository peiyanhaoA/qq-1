<template>
	<div id="home">
		<router-view></router-view>
	</div>
</template>
<script>
	import electron from 'electron'
	export default{
		data(){
			return{

			}
		},
		mounted(){
			let win = electron.remote.getCurrentWindow();
			win.setResizable(false);
		}
	}
</script>
<style scoped>
	#home{
		-webkit-app-region: drag;
		width: 450px;
		height: 330px;
		position: relative;
		background-color: #FAF0E6;
        box-shadow: 0 0 3px 3px rgba(0,0,0,.4);
        border-radius: 4px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
	}
</style>