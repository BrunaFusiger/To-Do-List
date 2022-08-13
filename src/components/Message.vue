<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String
    }
}
</script>

<style scoped lang="scss">
.message-container {
    color: #004085;
    font-size: .8rem;
    background-color: #cce5ff;
    border: 2px solid #bbdaff;
    border-radius: 5px;
}
</style>