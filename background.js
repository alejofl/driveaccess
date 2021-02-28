chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({number: '0'});
  chrome.tabs.create({ url: "http://misterflores.com/alejo/driveaccess/"});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.notif != null) {
      chrome.notifications.clear("daNotif");
      tries = request.notif;
      msg = ""
      if (tries === 1) {
        msg = "Resource accessed after 1 try."
      } else {
        msg = `Resource accessed after ${tries} tries.`

      }
      chrome.notifications.create("daNotif", {
        type: "basic",
        iconUrl: "icons/drive-access128.png",
        title: "Drive Access",
        message: msg,
      });
    }
  }
);
