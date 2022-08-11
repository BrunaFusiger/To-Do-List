<template>
    <div id="base">
        <section id="nav" class="flex">
            <h1>To Do List</h1>
            <div id="nav-buttons" class="flex">
                <router-link to="/">ALL</router-link>
                <router-link to="/done">DONE</router-link>
                <router-link to="/undone">UNDONE</router-link>
            </div>
        </section>

        <section id="nav-input" class="flex">
            <input type="text" value="" placeholder="  Digite a sua tarefa aqui" id="nav-input-text">
            <a href=""><input type="submit" value="" id="add"> ADD</a>
        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Nav"
});
</script>

<style scoped lang="scss">
@use '@/assets/style/mixins' as *;

#base {
    @include base;
}

.flex {
    display: flex;
}

#nav {
    color: #fff;

    justify-content: space-between;
    align-items: center;

    h1 {
        @include title;
    }

    &-buttons {
        a {
            margin-left: 1rem;
            position: relative;
            text-align: center;
            width: 4rem
        }
    }

    &-input {
        justify-content: space-between;

        &-text {
            @include inputForm;
            width: 80%;
            max-width: 80%;
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
