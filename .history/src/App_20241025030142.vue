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
	},
	setup() {
		// 使用 useRoute 钩子获取当前路由
		const route = useRoute();

		// 定义需要隐藏 NavBar 和 AppFooter 的路径
		const hiddenRoutes = ['/login', '/register', '/forgot', '/contract', '/privacy'];

		// 判断当前路由路径是否在隐藏列表中
		const shouldHideNavAndFooter = computed(() => hiddenRoutes.includes(route.path));

		return {
			shouldHideNavAndFooter
		};
	}
};
};
</script>

<style scoped lang="less"></style>
