//厳格モードのため記述
'use strict';
//アイコンクリック時に動作するため記述
window.onload = function () {
//開発用
  const baseUrl = "http://127.0.0.1:3000";
//プロダクト用
	//const baseUrl ="https://errorda-backend.herokuapp.com/";
//検索中errorを認識するため
  const searchUrl = `${baseUrl}/api/v1/user/stumblings/searching`;
//新規検索・一覧画面遷移
  const url = `${baseUrl}/api/v1/user/stumblings/`;
//検索窓
  const searched = document.getElementById('searched');
//検索中
  const searching = document.getElementById('searching');
//検索開始ボタン
  const postButton = document.getElementById('post-js');
//検索時のテキスト
  const postText = document.getElementById('post-text');
//error解決時のボタン
  const fixButton = document.getElementById('fix-js');
//一覧画面に遷移するためのボタン
  const  listButton = document.getElementById('list-js');
//chromeストレージの値を取得
  chrome.storage.local.get(['key'], function(result) {
  //検証で保存された値の確認
    console.log(result.key);
  //登録されているかの有無の確認 初回のみ実行
    if(result.key === null) {
    //アラートの表示 現段階では初回表示のみ
      const name = prompt('ユーザー名を登録して下さい', 'error');
    //値をクロームストレージに保存
      chrome.storage.local.set({key: name}, function() {
      //検証で値の確認
        console.log(name);
      });
    };
  //popup.htmlで表示するための記述
    const user = document.getElementById('user');
  //そのまま文字として出力する
    user.textContent = result.key;
  //ユーザー名をポストする
    const params = {
      method: 'POST',
      headers: {'Content-type': 'application/json;charset=utf-8'},
      body: JSON.stringify({name: result.key})
    };
  //検索窓が非表示の場合
    if(searched.style.visibility = "hidden"){
    //検索窓　表示
      searched.style.visibility = "visible";
    //検索中　非表示
      searching.style.visibility = "hidden";
    };
  //ユーザ情報を認識する
    fetch(searchUrl ,params)
      .then(res => res.json())
      .then(function (jsonData) {
      //検索窓の表示・非表示
        if (jsonData) {
        //検索窓　非表示
          searched.style.visibility = "hidden";
        //検索中　表示
          searching.style.visibility = "visible";
        };
      //検証で該当データの確認
        console.log(jsonData);
      //検証でidを確認
        console.log(jsonData.id);
      })
  //error検索ボタンクリック時イベント
    postButton.onclick = res => {
      const params = {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=utf-8'},
        body: JSON.stringify({name: result.key, search_key: postText.value})
      };
      fetch(url, params)
        .then(res => res.json());
      //Chrome検索するために定義
        const searchingUrl = 'https://www.google.com/search?q=' + encodeURIComponent(postText.value);
      //新規タブで入力された文字列をChrome検索
        chrome.tabs.create({ url: searchingUrl });
    };
  //error解決ボタンクリック時イベント
    fixButton.onclick = res => {
			const params = {
				method: 'POST',
				headers: {'Content-type': 'application/json;charset=utf-8'},
				body: JSON.stringify({name: result.key})
			};
      fetch(searchUrl, params)
        .then(res => res.json())
        .then(function (jsonData) {
        //jsonDataに入っているidを取得
          const getUrl = `${baseUrl}/api/v1/user/stumblings/${jsonData.id}`;
        //新規タブで編集画面に遷移
          chrome.tabs.create({ url: getUrl });
        });
    };
  //一覧画面ボタンクリック時イベント
    listButton.onclick = function () {
    //一覧画面に新規タブでアクセスする
      chrome.tabs.create({ url: url });
    };
  });
};