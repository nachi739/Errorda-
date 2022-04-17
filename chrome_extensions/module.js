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

  //初回のみユーザー名を登録
  const setChromeName = () => {
    if(name === null) {
      const name = prompt('ユーザー名を登録して下さい', 'error');
      chrome.storage.local.set({key: name});
    };
  }

  //ユーザー名を表示
  const popUser = () => {
    let user = document.getElementById('user');
    user.textContent = name;
  }

  //ユーザー情報を投げる
  const post = () => {
    const params = {
      method: 'POST',
      headers: {'Content-type': 'application/json;charset=utf-8'},
      body: JSON.stringify({name: name})
    };
    fetch(searchUrl ,params)
      .then(res => res.json())
      .catch(function () {
        searched.style.visibility = "visible";
        searching.style.visibility = "hidden";
      })
  }

  //検索開始
  const startSearch = () => {
      const params = {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify({name: name, search_key: postText.value})
      };
      fetch(url, params)
        .then(res => res.json());
          const searchingUrl = 'https://www.google.com/search?q=' + encodeURIComponent(postText.value);
          chrome.tabs.create({ url: searchingUrl });
  }

  //検索終了・編集画面
  const endSearch = () => {
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
  }

  //一覧画面
  const list = () => {
      chrome.tabs.create({ url: url });
  };

  setChromeName();
  popUser();
  post()
  postButton.onclick = () => { startSearch() };
  fixButton.onclick = () => { endSearch() };
  listButton.onclick = () => { list() };

  }
