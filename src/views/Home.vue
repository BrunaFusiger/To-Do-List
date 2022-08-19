<template>
  <div class="home">
    <Nav />
    <Item v-for="todoItem in todoStore.todoItems" :key="todoItem.id" :todoItem="todoItem" autocomplete="off" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Item from '@/components/Item.vue';
import Axios from 'axios';
import Nav from "@/components/Nav.vue";
import { useTodoStore } from '@/store/todoStore';
import { useUserStore } from '@/store/userStore';
// import { homedir } from 'os';


export default defineComponent({
  data() {
    return {
    }
  },
  computed: {
    todoStore() {
      return useTodoStore()
    }
  },
  beforeMount() {
    this.getItems();
  },
  components: {
    Nav,
    Item
  },
  methods: {
    getItems() {
      Axios.create().get(`https://localhost:7018/todo/${useUserStore().user.id}`,
        { headers: { "Access-Control-Allow-Origin": "*" } })
        .then(res => {
          useTodoStore().setTodoItems(res.data.entity);
        })
        .catch(err => console.log(err));
    }
  },
});
</script>

<style lang="scss">
a,
button {
  text-decoration: none;
  color: #000355;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: .1rem;
  transition: .5s;

  &:hover {
    background-color: rgb(139, 145, 169);
    border-color: rgba($color: #ffffff, $alpha: .2);
    color: #fff;
    transform: scale(1.05);
  }
}

svg {
  margin-right: 1rem;
  transition: .8s;
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    transform: scale(1.2);
  }
}
</style>



