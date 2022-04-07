'use strict';
window.onload = function () {
  const baseUrl = "http://127.0.0.1:3000";
	//const baseUrl ="https://errorda-backend.herokuapp.com/";
  const searchUrl = `${baseUrl}/api/v1/user/stumblings/searching`;
  const url = `${baseUrl}/api/v1/user/stumblings/`;
  const searched = document.getElementById('searched');
  const searching = document.getElementById('searching');
  const postButton = document.getElementById('post-js');
  const postText = document.getElementById('post-text');
  const fixButton = document.getElementById('fix-js');
  const listButton = document.getElementById('list-js');
  var users;

  const getChromeName = () => {
    return chrome.storage.local.get(['key'], result => {
      if(result.key === null) {
        const name = prompt('ユーザー名を登録して下さい', 'error');
        chrome.storage.local.set({key: name});
      };
      let user = document.getElementById('user');
      user.textContent = result.key;
      users = result.key;

    })
  }

  const name = getChromeName()
  console.log(users)

  const post = () => {
    const params = {
      method: 'POST',
      headers: {'Content-type': 'application/json;charset=utf-8'},
      body: JSON.stringify({name: name})
    };
    if(searched.style.visibility = "hidden"){
      searched.style.visibility = "visible";
      searching.style.visibility = "hidden";
    };
    fetch(searchUrl ,params)
      .then(res => res.json(name))
      .then(function (jsonData) {
        if (jsonData) {
          searched.style.visibility = "hidden";
          searching.style.visibility = "visible";
        };
      })
  }

  post()

  const startSearch = () => {
    postButton.onclick = () => {
      const params = {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify({name: name, search_key: postText.value})
      };
      fetch(url, params)
        .then(res => res.json());
          const searchingUrl = 'https://www.google.com/search?q=' + encodeURIComponent(postText.value);
          chrome.tabs.create({ url: searchingUrl });
    };
  }

  startSearch()


  const endSearch = () => {
    fixButton.onclick = () => {
			const params = {
				method: 'POST',
				headers: {'Content-type': 'application/json;charset=utf-8'},
				body: JSON.stringify({name: name})
			};
      fetch(searchUrl, params)
        .then(res => res.json())
        .then(function (jsonData) {
          const getUrl = `${baseUrl}/api/v1/user/stumblings/${jsonData.id}`;
          chrome.tabs.create({ url: getUrl });
        });
    };
  }

  endSearch()


  const list = () => {
    listButton.onclick = () => {
      chrome.tabs.create({ url: url });
    };
  }
  list()

  }
