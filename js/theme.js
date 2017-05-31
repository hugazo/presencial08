var themes = {
  "default" : "css/bootstrap.min.css",
  "bootstrap" : "./css/bootstrap/bootstrap.min.css",
  "slate" : "./css/slate/bootstrap.min.css",
  "sandstone" : "css/sandstone/bootstrap.min.css",
  "spacelab" : "css/bootstrap.min.css"
}


$(function(){
   var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')];
        themesheet.attr('href',themeurl);
    });
});
