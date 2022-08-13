import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoItems: [],
  }),
  actions: {
    setTodoItems(todoItems) {
      this.todoItems = [...this.todoItems, ...todoItems];
    },
    setTodoItem(todoItem) {
      this.todoItems.push(todoItem);
    },
  },
});
