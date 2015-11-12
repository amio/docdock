chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('dock.html', {
    'id': 'dock',
    'outerBounds': {
      'width': 1024,
      'height': 640
    }
  })
})
