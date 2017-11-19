Vue.component('comment',{
  props: ['comment'],
  template: '<li> {{ comment.content}} </li>'
})
var app = new Vue ({
    el: '#app',
    data: {
      message: 'hello',
      title: 'hela',
      welcome:true,
      comments: [
        { content: 'nice'},
        { content: 'great'},
        { content: 'apple'}
      ]
    },
    methods: {
      logMessage() {
        console.log(this.message)
      }
    }
})
