/*global jQuery,cyberDojo*/

var cyberDojo = (function(cd, $) {
  "use strict";

  cd.dialog_pullImageThen = function(route, f) {
    var pullDialog = makePullDialog();
    var pullOverlay = $('<div id="pull-overlay"></div>');
    var pullSpinner = $('#pull-spinner');
    pullDialog.dialog('open');
    pullOverlay.insertAfter($('body'));
    pullSpinner.show();
    $.getJSON(route, cd.chosenMajorMinor(), function() {
      pullSpinner.hide();
      pullOverlay.remove();
      pullDialog.dialog('close');
      f();
    });
  };

  cd.chosenMajorMinor = function() {
    return {
      major: cd.chosenMajor(),
      minor: cd.chosenMinor()
    };
  };

  cd.chosenMajor = function() {
    return $('[id^=major_][class~=selected]').data('major');
  };

  cd.chosenMinor = function() {
    return $('[id^=minor_][class~=selected]').data('minor');
  };

  var makePullDialog = function() {
    var html = '' +
      'This is the first time anyone has selected<br/>' +
      '&nbsp;&nbsp;&nbsp;&rarr;&nbsp;' + cd.chosenMajor() + '<br/>' +
      '&nbsp;&nbsp;&nbsp;&rarr;&nbsp;' + cd.chosenMinor() + '<br/>' +
      "It's docker image is now being pulled onto the server.<br/>" +
      'It will take a minute or two.<br/>' +
      'Please wait.';
    return $('<div>')
      .html(html)
      .dialog({
        title: cd.dialogTitle('setup a new practice session'),
        closeOnEscape: true,
        close: function() { $(this).remove(); },
        autoOpen: false,
        width: 550,
        height: 210,
        modal: true,
      });
  };

  return cd;
})(cyberDojo || {}, jQuery);