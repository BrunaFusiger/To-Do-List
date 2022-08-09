<template>
    <div id="base">
        <nav id="base-nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Base"
}
</script>

<style scoped lang="scss">
#base {
    background: red;

    &-nav {
        background: yellow;
    }
}
</style>
