// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
});

window.onload = function () {
document.getElementById("itiran").onclick = function () {
    var newURL = 'http://127.0.0.1:3000/api/v1/user/stumblings/';
    chrome.tabs.create({ url: newURL });
};
};

//window.onload = function () {
    const getButton = document.getElementById('get-js')
    const postText = document.getElementById('post-text')
    const postButton = document.getElementById('post-js')
    const resHtml = document.getElementById('res-js')
    let searching;

        axios.get('http://127.0.0.1:3000/api/v1/user/stumblings/searching/').then(res => searching = res.data);

        getButton.addEventListener('click', event => {
            axios.get(`http://127.0.0.1:3000/api/v1/user/stumblings/${searching.id}`)
            .then(res =>resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))});

        postButton.addEventListener('click', event => { //buttonクリック時に行うアクション
            axios.post('http://127.0.0.1:3000/api/v1/user/stumblings', {
                search_key: postText.value,
            }).then(res => resHtml.insertAdjacentText('afterbegin', JSON.stringify(res.data)))
        });
  //  };