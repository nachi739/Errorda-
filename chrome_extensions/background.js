window.onload = function () {
  //開発用
  const baseUrl = "http://127.0.0.1:3000";
  //プロダクト用
  //const baseUrl ="https://errorda-backend.herokuapp.com/"
  //
  const url = `${baseUrl}/api/v1/user/stumblings/searching`;
  //検索窓
  const searched = document.getElementById('searched');
  //検索中
  const searching = document.getElementById('searching');
  //一覧画面に遷移するためのボタン
  const  listButton = document.getElementById('list-js');
  //一覧画面に遷移するURL
  const listURL = `${baseUrl}/api/v1/user/stumblings/`;
  //検索時のテキスト
  const postText = document.getElementById('post-text');
  //検索開始ボタン
  const postButton = document.getElementById('post-js');
  //
  const postUrl = `${baseUrl}/api/v1/user/stumblings/`;
	//
	const postUser = `${baseUrl}/api/v1/users/`;
  //
  const getButton = document.getElementById('get-js');
  //
  //const getUrl = `${baseUrl}/api/v1/user/stumblings/searching`;
  //chromeストレージの値を取得
  chrome.storage.local.get(['key'], function(result) {
    //保存されている名前の確認のため
    console.log(result.key);
    //登録されているかの有無の確認 初回のみ実行
    if(result.key === null) {
        //アラートの表示 現段階では初回表示のみ
        const name = prompt('ユーザー名を登録して下さい', 'error');
        //値をクロームストレージに保存
        chrome.storage.local.set({key: name}, function() {
            //保存された値の確認
            console.log(name);
        });
    }
    //popup.htmlで表示するための記述
    const user = document.getElementById('user');
    //そのまま文字として出力するため
    user.textContent = result.key;
    //ユーザー名をポストする
    const params = {
      method: 'POST',
      headers: {'Content-type': 'application/json;charset=utf-8'},
      body: JSON.stringify({name: result.key})
    };
    fetch(postUrl, params)
      .then(res => res.json())
			.then(function (jsonData){
				console.log(jsonData);
			})
			// fetch(url, params)
      // .then(res => res.json())
			// .then(function (jsonData){
			// 	console.log(jsonData);
			// })
    //
    if(searched.style.visibility = "hidden"){
      //
      searched.style.visibility = "visible";
      //
      searching.style.visibility = "hidden";
    }
    //ユーザ情報を認識する
    fetch(url ,params)
      //
      .then(res => res.json())
      //
      .then(function (jsonData) {
        //検索窓の表示・非表示
        if (jsonData) {
          searched.style.visibility = "hidden";
          searching.style.visibility = "visible";
        }
        //検証でどのエラーを取ってきているか確認
        console.log(jsonData);
        //検証でidを確認するため
        console.log(jsonData.id);
      })
    //一覧画面遷移
    listButton.onclick = function () {
      //
      chrome.tabs.create({ url: listURL });
    };
    //新規作成は確認　search_keyにテキスト保存確認
    postButton.onclick = res => {
      const params = {
          method: 'POST',
          headers: {'Content-type': 'application/json;charset=utf-8'},
          body: JSON.stringify({name: result.key, search_key: postText.value})
      };
      fetch(postUrl, params)
        .then(res => res.json());
        //
        const searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(postText.value);
        //新規タブでsearch_keyの内容を検索
        chrome.tabs.create({ url: searchURL });
    }
    getButton.onclick = res => {
			const params = {
				method: 'POST',
				headers: {'Content-type': 'application/json;charset=utf-8'},
				body: JSON.stringify({name: result.key})
			};
      fetch(url, params)
          //.then(function (res) {
          //    return res.json();
          //})
          //上記のコードを簡略化
          .then(res => res.json())
          .then(function (jsonData) {
              //jsonDataに入っているidを取得
              const getUrl = `${baseUrl}/api/v1/user/stumblings/${jsonData.id}`;
              //
              console.log(jsonData);
              //
              chrome.tabs.create({ url: getUrl });
          })
    }
  })
}