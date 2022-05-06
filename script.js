const app = new Vue({

  el: '#app',

  data:{
    todos:[
      {
        text:"fare la spesa",
        done: false,
      },
      {
        text:"pagare le bollette",
        done: false,
      },
      {
        text:"sfamare il gatto",
        done: false,
      },
      {
        text:"studiare",
        done: false,
      },
    ],
    newTodo: "",
  },

  methods:{

    addTodo(){
      if (this.newTodo.length > 2) {
        this.todos.push({text:this.newTodo, done: false});
        this.newTodo= "";
      }
    },
    removeTodo(index){
      this.todos.splice(index,1);
    },
    toggleDone(index){
      this.todos[index].done = !this.todos[index].done;
    }
  }
})
