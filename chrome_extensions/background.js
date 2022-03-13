// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
// chrome.omnibox.onInputEntered.addListener((text) => {
//     // Encode user input for special characters , / ? : @ & = + $ #
//     var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
//     chrome.tabs.create({ url: newURL });
// });

window.onload = function () {
    var url = "http://127.0.0.1:3000/api/v1/user/stumblings/searching/";

    fetch(url) //ユーザ情報を認識する
        .then(function (res) {
            return res.json();
        })
        .then(function (jsonData) {
            const searched = document.getElementById('searched')
            const searching = document.getElementById('searching')
            if (jsonData) { //検索窓の表示・非表示
                searched.style.visibility = "hidden";
                searching.style.visibility = "visible";
            } else {
                searched.style.visibility = "visible"
                searching.style.visibility = "hidden";
            }
            console.log(jsonData); //検証でどのエラーを取ってきているか確認
            console.log(jsonData.id); //検証でidを確認するため
        })


    document.getElementById("list-js").onclick = function () { //一覧画面遷移
        var listURL = 'http://127.0.0.1:3000/api/v1/user/stumblings/';
        chrome.tabs.create({ url: listURL });
    };

    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')

    var post_url = "http://127.0.0.1:3000/api/v1/user/stumblings/";
    postButton.onclick = function (res) { //新規作成は確認　search_keyにテキスト保存確認
        let params = {method: 'POST',headers: {'Content-type': 'application/json;charset=utf-8'},body: JSON.stringify({search_key: postText.value})};
        fetch(post_url, params)
        .then(function (res) {
            return res.json();
        })
    }

    var get_url = `http://127.0.0.1:3000/api/v1/user/stumblings/searching`; //json形式でend_timeがnullのものを取得
    getButton.onclick = function (res) {
    fetch(get_url)
        .then(function (res) {
            return res.json();
        })
        .then(function (jsonData) {
            var getUrl = `http://127.0.0.1:3000/api/v1/user/stumblings/${jsonData.id}`; //jsonDataに入っているidを取得
            chrome.tabs.create({ url: getUrl });
        })
    }
};