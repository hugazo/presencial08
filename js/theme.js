$(function(){
  if(!supports_storage) {
    $('#theme-dropdown').hide();
  }
  if (localStorage.theme) {
    var themesheet = $('<link href="'+localStorage.theme+'" rel="stylesheet" />');
  } else {
    var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
  }
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')];
        themesheet.attr('href',themeurl);
        if (supports_storage) {
          localStorage.theme = themeurl;
        }
    });
});

var themes = {
  "default" : "css/bootstrap.min.css",
  "bootstrap" : "./css/bootstrap/bootstrap.min.css",
  "slate" : "./css/slate/bootstrap.min.css",
  "sandstone" : "css/sandstone/bootstrap.min.css",
  "spacelab" : "css/bootstrap.min.css"
};

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
};

var supports_storage = supports_html5_storage();
