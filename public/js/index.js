$(document).ready(function(){
  $('.btn-signup').click(function(){
    if(!$('.login').hasClass('unvisible')){
      $('.login').addClass('unvisible');
      $('.signup').removeClass('unvisible');
    }
  });
  $('.btn-signin').click(function(){
    if(!$('.signup').hasClass('unvisible')){
      $('.signup').addClass('unvisible');
      $('.login').removeClass('unvisible');
    }
  });
});