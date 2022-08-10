<template>
    <div id="base">
        <section id="nav" class="flex">
            <h1>To Do List</h1>
            <div id="nav-buttons" class="flex">
                <a href="all">ALL</a>
                <a href="done">DONE</a>
                <a href="undone">UNDONE</a>
            </div>
        </section>

        <section id="nav-input" class="flex">
            <input type="text" value="" placeholder="  Digite a sua tarefa aqui" id="nav-input-text">
            <a href=""><input type="submit" value="" id="add"> ADD</a>
        </section>
    </div>
</template>

<script>

import Item from "./Item.vue";

export default {
    name: "Nav",
    components: {
        Item
    }
}
</script>

<style scoped lang="scss">
#base {
    display: block;
    margin: 5rem auto;
    max-width: 50%;

}

.flex {
    display: flex;
}

#nav {
    color: #fff;

    justify-content: space-between;
    align-items: center;

    h1 {
        font-weight: 600;
        font-size: 50px;
        line-height: 68px;
        cursor: default;
    }

    &-buttons {

        a {
            margin-left: 1rem;
            position: relative;
            text-align: center;
            width:4rem

        }
    }

    &-input {
        justify-content: space-between;

        &-text {
            background-color: rgba($color: #ffffff, $alpha: .7);
            color: #000;
            width: 80%;
            max-width: 80%;
            border-radius: 6px;
        }

        a {
            width: 10%;
            max-width: 80%;
            text-align: center;

            #add {
                display: none;

            }
        }
    }
}
</style>
