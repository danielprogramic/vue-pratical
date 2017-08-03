Vue.component('task-list', {
  //slot prepara esse selector para ser persistido em outra camada
  template: `<div>
               <task v-for="task in tasks">{{task.description}}</task>
             </div>`,

  data() {

    return {
      tasks: [{
          description: 'Go to store',
          completed: true
        }, {
          description: 'Finish screencast',
          completed: true
        }, {
          description: 'Make donation',
          completed: false
        }, {
          description: 'Clear inbox',
          completed: false
        }, {
          description: 'Make dinner',
          completed: true
        }, {
          description: 'Clean room',
          completed: false
        }, {
          description: 'Go to store',
          completed: true
        },

      ]
    }
  }

})

Vue.component('task', {
  //slot prepara esse selector para ser persistido em outra camada
  template: `<li><slot></slot></li>`,

})


new Vue({
  el: '#root'
});