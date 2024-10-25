<template>
	<div id="app">
		<!-- Appears only if the current path is not part of the hidden list NavBar -->
		<NavBar v-if="!shouldHideNavAndFooter" />

		<!-- Route view -->
		<router-view />

		<!-- Appears only if the current path is not part of the hidden list AppFooter -->
		<AppFooter v-if="!shouldHideNavAndFooter" />
	</div>
</template>

<script>
//import "./style.css";
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


export default {
	components: {
		NavBar,
		AppFooter
	},
	setup() {
		// Use the useRoute hook to get the current route
		const route = useRoute();

		// Define the path where you want to hide the NavBar and AppFooter
		const hiddenRoutes = ['/login', '/register', '/forgot', '/about-us/contract', '/about-us/privacy'];

		// Check whether the current route path is in the hidden list
		const shouldHideNavAndFooter = computed(() => hiddenRoutes.includes(route.path));

		return {
			shouldHideNavAndFooter
		};
	}
};
</script>

<style scoped lang="less"></style>
