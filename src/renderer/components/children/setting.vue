<template>
	<div id="setting">
		
	</div>
</template>
<script>
	import electron from 'electron';
	import path from 'path';
	export default {
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){
			let win = electron.remote.BrowserWindow;
		}
	}
</script>
<style type="text/css" scoped>
	#setting{
		width: 600px;
		height: 500px;
		background: #fefefe;
	}
</style>