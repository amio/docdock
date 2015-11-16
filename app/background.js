chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('dock.html', {
    'id': 'dock',
    'outerBounds': {
      'width': 1024,
      'height': 640
    }
  }, function (appWindow) {
    appWindow.contentWindow.addEventListener('focus', function () {
      var webview = this.document.getElementsByTagName('webview')[0]
      webview.focus()
    })
  })
})
