<template>
	<view class="container">


		<DanmuVue></DanmuVue>

	</view>
</template>

<script>
import danmuVue from '@/components/DanmuCards.vue'
export default {
	components: {
		DanmuVue
	},

}
</script>

<style>
.container {
	padding: 20px;
	font-size: 14px;
	line-height: 24px;
}
</style>
