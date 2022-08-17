<template>
    <div class="item">
        <section class="todoItem">
            <div>
                <input @focusout="editItem" v-if="isEditMode" type="text" v-model="editDescription" />
                <p v-else> {{ todoItem.description }} </p>
            </div>
            <div>
                <button @click="setEditMode(true)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 2H4C2.9 2 2 2.9 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2ZM9.08 15H7V12.91L13.17 6.72L15.24 8.8L9.08 15ZM16.84 7.2L15.83 8.21L13.76 6.18L14.77 5.16C14.97 4.95 15.31 4.94 15.55 5.16L16.84 6.41C17.05 6.62 17.06 6.96 16.84 7.2Z"
                            fill="#4ECB71" />
                    </svg>
                </button>

                <button @click="deleteItem">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="#F24E1E" />
                    </svg>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import { useTodoStore } from '@/store/todoStore';
import Axios from 'axios';

export default defineComponent({
    name: "item",
    data() {
        return {
            editDescription: this.todoItem.description,
            isEditMode: false,
        }
    },
    methods: {
        setEditMode(isEditMode) {
            this.isEditMode = isEditMode;
        },
        deleteItem() {
            Axios.create().delete(`https://localhost:7018/todo/delete/${this.todoItem.id}`,
                { headers: { "Access-Control-Allow-Origin": "*" } })
                .then(() => {
                    useTodoStore().deleteTodoItem(this.todoItem.id);
                })
                .catch(err => console.log(err));
        },
        editItem() {
            this.setEditMode(false);
            var editedTodoItem = this.todoItem;
            editedTodoItem.description = this.editDescription;
            Axios.create().put("https://localhost:7018/todo/update",
                editedTodoItem,
                { headers: { "Access-Control-Allow-Origin": "*" } })
                .then(() => {
                    useTodoStore().editTodoItem(editedTodoItem);
                })
                .catch(err => console.log(err));
        }
    },
    props: {
        todoItem: Object
    }
})
</script>

<style scoped lang="scss">
@use '@/assets/style/mixins' as *;

.item {
    @include base;
    margin-bottom: -3rem;

    .todoItem {
        margin: 0;
        padding: 1rem;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        border: 1px solid rgba($color: #fff, $alpha: .1);
        box-shadow: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));


        border-left: .2rem solid #00FF19;


        p {
            color: rgba($color: #fff, $alpha: .8);
            overflow: hidden;
        }

        div {
            button {
                background-color: transparent;
                border: transparent;
                padding: 0;

                svg {
                    margin-right: 1rem;
                    transition: .5s;

                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
}
</style>

