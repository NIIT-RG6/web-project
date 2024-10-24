<template>
	<div id="app">
		<NavBar />
		<router-view />
		<AppFooter />
	</div>
</template>

<script>
//import "./style.css";
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
	components: {
		NavBar,
		AppFooter
	}
};
</script>

<style scoped lang="less"></style>
