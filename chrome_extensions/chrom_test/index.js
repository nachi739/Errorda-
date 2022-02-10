window.addEventListener('load', (event) => {
    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')
    const resHtml = document.getElementById('res-js')

    getButton.addEventListener('click', event => {
      axios.get('http://localhost:8000/').then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))

    });
    postButton.addEventListener('click', event => {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        text: postText.value,
      }).then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))
    });
  });