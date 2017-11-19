var app = new Vue ({
    el: '#app',
    data: {
      message: 'hello',
      title: 'hela',
      welcome:true
    },
    methods: {
      logMessage() {
        console.log(this.message)
      }
    }
})
