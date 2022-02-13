window.addEventListener('load', (event) => {
    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')
    const resHtml = document.getElementById('res-js')
    let time = new Date()

    getButton.addEventListener('click', event => {
      let frontSideTime= new Date()
      console.log(frontSideTime)
      axios.get('http://127.0.0.1:8000').then(res =>
      resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))

    });
    postButton.addEventListener('click', event => {
      axios.post('http://127.0.0.1:8000', {
        text: time.value,
      }).then(res =>  JSON.stringify(res.data))
    });
  });
