<template>
    <div>
        <iframe src="http://127.0.0.1:5501/public/Login.html" width="100%" height="600px"
            frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'EmbeddedPage',
};
</script>

<style scoped>
iframe {
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>
