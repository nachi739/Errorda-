require('./bootstrap');

// const app = new Vue({
//     el: '#app',
//       data: {
//         new_error: '',
//         errors: []
//       },
//       methods: {
//       fetchErrors: function(){
//         axios.get('/api/get').then((res)=>{
//           this.errors = res.data
//         })
//       }, //← カンマを忘れず！
//       app_post: function(){ //← 追記
//         axios.post('/api/add',{
//           title: this.new_error
//         }).then((res)=>{
//           this.errors = res.data
//           this.new_todo = ''
//         })
//         }
//       },
//       created() {
//         this.fetchErrors()
//       },
//     });