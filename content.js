chrome.storage.sync.get('number', function(data) {
  var element = document.getElementById('request-access-icon');
  if (element != null) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const videoId = urlParams.get('id');
    if (videoId == null) {
      const url = window.location.href;
      var parts = url.split("folders/");
      if (parts.length == 1) {
        parts = url.split("file/d/");
        window.location.replace(`https://drive.google.com/u/${data.number}/file/d/${parts[1]}`);
      } else {
        window.location.replace(`https://drive.google.com/drive/u/${data.number}/folders/${parts[1]}`);
      }
    } else {
      window.location.replace(`https://drive.google.com/u/${data.number}/open?id=${videoId}`);
    }
    var num2 = data.number + 1;
    chrome.storage.sync.set({number: num2});
  } else {
    chrome.storage.sync.set({number: '0'});
  }
});
