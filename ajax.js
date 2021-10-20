$(document).ready(function(){
var translator_response;
$(".favorite").click(function(){
clicked = $(this).attr("name");
$.ajax({
  type : 'POST',
  url : "{{url_for('test')}}",
  contentType: 'application/json;charset=UTF-8',
  data : {'data':clicked}
});
 });
});