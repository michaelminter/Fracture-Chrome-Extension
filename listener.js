chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.getSelected(null, function(tab) {
    postToFracture(tab.url).done(function(msg) {
      copyToClipboard(msg.fractured_url);
    });
  });
});

function postToFracture(url) {
  request = $.ajax({
    type: "POST",
    url: "http://fracture-url.herokuapp.com",
    dataType: 'json',
    data: { url: url }
  });
  return request;
}

function copyToClipboard(text) {
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}
