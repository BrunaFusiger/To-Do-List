<template>
    <header id="base">
        <section id="nav" class="flex">
            <h1>To Do List</h1>
            <div id="nav-buttons" class="flex">
                <router-link to="/">ALL</router-link>
                <router-link to="/done">DONE</router-link>
                <router-link to="/undone">UNDONE</router-link>
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
