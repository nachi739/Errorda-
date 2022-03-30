//アイコンクリック時に動作するため
window.onload = function () {
    //ローカルストレージの値を取得
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
        fetch("http://127.0.0.1:3000/api/v1/user/stumblings/", params)
        .then(res => res.json());


    const searched = document.getElementById('searched');
    const searching = document.getElementById('searching');
    if(searched.style.visibility = "hidden"){
        searched.style.visibility = "visible";
        searching.style.visibility = "hidden";
    }
    const baseUrl = "http://127.0.0.1:3000"; //開発用
    //const baseUrl ="https://errorda-backend.herokuapp.com/" //プロダクト用
    const url = `${baseUrl}/api/v1/user/stumblings/searching`;
    fetch(url ,params) //ユーザ情報を認識する

        .then(res => res.json())
        .then(function (jsonData) {
            if (jsonData) { //検索窓の表示・非表示
                searched.style.visibility = "hidden";
                searching.style.visibility = "visible";
            }
            console.log(jsonData); //検証でどのエラーを取ってきているか確認
            console.log(jsonData.id); //検証でidを確認するため
        })
    const  listButton = document.getElementById('list-js');
    listButton.onclick = function () { //一覧画面遷移
        const listURL = `${baseUrl}/api/v1/user/stumblings/`;
        chrome.tabs.create({ url: listURL });
    };
    const postText = document.getElementById('post-text');
    const postButton = document.getElementById('post-js');
    const postUrl = `${baseUrl}/api/v1/user/stumblings/`;
    postButton.onclick = res => { //新規作成は確認　search_keyにテキスト保存確認
        const params = {
            method: 'POST',
            headers: {'Content-type': 'application/json;charset=utf-8'},
            body: JSON.stringify({name: result.key, search_key: postText.value})
        };
        fetch(postUrl, params)
        .then(res => res.json());
        const searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(postText.value);
        chrome.tabs.create({ url: searchURL }); //新規タブでsearch_keyの内容を検索
    }
    const getButton = document.getElementById('get-js');
    const getUrl = `${baseUrl}/api/v1/user/stumblings/searching`; //json形式でend_timeがnullのものを取得
    getButton.onclick = res => {
    fetch(getUrl, params)
        //.then(function (res) {
        //    return res.json();
        //})
        .then(res => res.json()) //上記のコードを簡略化
        .then(function (jsonData) {
            const getUrlId = `${baseUrl}/api/v1/user/stumblings/${jsonData.id}`; //jsonDataに入っているidを取得
            console.log(jsonData);
            chrome.tabs.create({ url: getUrlId });
        })

    }
});
};