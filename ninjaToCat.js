console.log("script loading")
$(document).ready(function (){
$('img').click(function(){
$(this).attr("src", $(this).attr('altsrc'));
});
});

  