function disableSelection(target) {
  $(function () {
    $(this).bind("contextmenu", function (e) {
      e.preventDefault();
    });
  });
  if (typeof target.onselectstart != "undefined")
    //For IE
    target.onselectstart = function () {
      return false;
    };
  else if (typeof target.style.MozUserSelect != "undefined")
    //For Firefox
    target.style.MozUserSelect = "none";
  //All other route (For Opera)
  else
    target.onmousedown = function () {
      return false;
    };
  target.style.cursor = "default";
}

$(document).ready(function () {
  disableSelection(document.body);
});
