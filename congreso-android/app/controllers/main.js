var args = arguments[0] || {};

/**
 * opens a new window that should act as a second-level view
 */
function openWindow(){
  var win = Alloy.createController('secondWindow').getView();
  win.open();
}

/**
 * Callback for Android OptionsMenu
 */
function onCreateOptionsMenu(e) {
  if (e.actionBar) {
    e.actionBar.title = "Inicio";
  }
  

}

/**
 * Cleans up the controller
 * 
 * http://www.tidev.io/2014/09/18/cleaning-up-alloy-controllers/
 */
function destroy() {
  $.off();
}

/**
 * Initializes the controller
 */
function init() {

  $.on('createOptionsMenu', onCreateOptionsMenu);

}

// PUBLIC
exports.destroy = destroy;
exports.init = init;