$(document).ready(function() {
    $("#leftside-navigation .sub-menu > a").click(function(e) {
      $("#leftside-navigation ul ul").slideUp();
      if (!$(this).next().is(":visible")) {
        $(this).next().slideDown();
      }
      e.stopPropagation();
    });
  });