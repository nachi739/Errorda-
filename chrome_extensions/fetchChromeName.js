let name
async function fetchChromeStorage() {
	await chrome.storage.local.get(['key'], result => {
			name = result.key
	})
}
fetchChromeStorage()
