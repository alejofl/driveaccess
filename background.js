chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({number: '0'});
  chrome.tabs.create({ url: "http://misterflores.com/alejo/driveaccess/"});
});
