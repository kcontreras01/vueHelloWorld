var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

app3.todos.push({ text: 'New item'})

var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app5 = new Vue ({
  el: '#app-5',
  data: {
    message: 'Replace these words'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    groceryList: [
      {id: 0, text: 'Vegetables'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
})

Vue.component('app-nav', {
  props: ['nav'],
  template: '<nav>{{ nav.text }}</nav>'
})

var app = new Vue({
  el: '#nav',
  data: {
    navList: [
      { id: 0, text: 'Welcome' }
    ] 
  }
})

