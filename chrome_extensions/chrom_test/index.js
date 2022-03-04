window.addEventListener('load', (event) => { //webページを読み込む際にアクションを行う
    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')
    const resHtml = document.getElementById('res-js')
    let time = new Date()
    let search_error;
      axios.get('http://127.0.0.1:3000/api/v1/user/stumblings/searching').then(res => search_error = res.data); //

    //console.log(search_error.id)
    getButton.addEventListener('click', event => {

      let frontSideTime= new Date()
      console.log(frontSideTime)
      axios.put(`http://127.0.0.1:3000/api/v1/user/stumblings/${search_error.id}`).then(res =>
      resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))

    });

    postButton.addEventListener('click', event => { //buttonクリック時に行うアクション
      console.log(search_error)
      axios.post('http://127.0.0.1:3000/api/v1/user/stumblings', {
        search_key: postText.value,
      }).then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))
    });

  });