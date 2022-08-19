<template>
    <header id="base">
        <section id="nav" class="flex">
            <h1>To Do List</h1>
            <div id="nav-buttons" class="flex">
                <router-link to="/" :class="`${$route.name === 'all' ? 'active' : ''}`">ALL</router-link>
                <router-link to="/done" :class="`${$route.name === 'done' ? 'active' : ''}`">DONE</router-link>
                <router-link to="/undone" :class="`${$route.name === 'undone' ? 'active' : ''}`">UNDONE</router-link>
            </div>
        </section>

        <section id="nav-input" class="flex">
            <input type="text" v-model="task" placeholder="Digite a sua tarefa aqui" id="nav-input-text"
                autocomplete="off">
            <button @click="addTask">ADD</button>
        </section>
    </header>
</template>

<script>
import { defineComponent } from 'vue'
import Axios from 'axios';
import { useUserStore } from '@/store/userStore';
import { useTodoStore } from '@/store/todoStore';

export default defineComponent({
    name: "Nav",
    data() {
        return {
            task: "",
        }
    },
    methods: {
        addTask() {
            Axios.create().post(`https://localhost:7018/todo/create/${useUserStore().user.id}`,
                this.task,
                { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }, })
                .then(res => {
                    useTodoStore().setTodoItem(res.data.entity);
                })
                .catch(err => {
                    console.log(err);
                    this.task = err.response.data.description;
                }
                );

            this.task = "";
        },
    }
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

    @include mobile {
        display: block;
        margin-bottom: 3rem;
    }


    h1 {
        @include title;

        @include mobile {
            font-size: 2rem;
            text-align: center;
        }
    }

    &-buttons {
        a {
            @include mobile {
                text-align: center;
                margin-inline: auto;
                margin-left: .5rem;
            }

            margin-left: 1rem;
            position: relative;
            text-align: center;
            width: 4rem;
        }
    }

    &-input {
        justify-content: space-between;

        @include mobile {
            display: block;
            text-align: center;
        }

        &-text {
            @include inputForm;
            width: 80%;
            max-width: 80%;

            @include mobile {
                margin-bottom: 1rem;
            }
        }

        button {
            width: 15%;
            max-width: 80%;
            text-align: center;

            @include mobile {
                width: 80%;
                max-width: 50%;
            }

            #add {
                display: none;

            }
        }
    }
}
</style>
