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
    deleteTodoItem(todoItemId) {
      for (let i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].id == todoItemId) {
          this.todoItems.splice(i, 1);
          return;
        }
      }
    },
    editTodoItem(todoItem) {
      for (let i = 0; i < this.todoItems.length; i++) {
        if (this.todoItems[i].id == todoItem.id) {
          this.todoItems[i].description = todoItem.description;
          return;
        }
      }
    },
  },
});
