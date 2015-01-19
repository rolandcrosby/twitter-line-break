var tweets = document.getElementsByClassName("js-tweet-text");
for (var i = 0; i < tweets.length; i++) {
  var tweet = tweets[i];
  if (tweet.textContent.indexOf("\n\n") != -1) {
    for (var j = 0; j < tweet.childNodes.length; j++) {
      var el = tweet.childNodes[j];
      if ((el.nodeType == Node.TEXT_NODE) && (el.textContent.indexOf("\n\n") != -1)) {
        var txt = el.textContent.replace(/\n{2,}/g, "\n\nWAIT FOR IT…WAIT FOR IT…\n\n");
        el.textContent = txt;
      }
    }
  }
}
