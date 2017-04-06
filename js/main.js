$(function(){


var grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});


$(".showAll").click(function() {
  // console.log("showAll clicked")
  grid.isotope({ filter: '*' })
})

$(".showProTools").click(function() {
  // console.log("showProTools clicked")
  grid.isotope({ filter: '.proTools' })
})

$(".showLogicProX").click(function() {
  // console.log("showLogicProX clicked")
  grid.isotope({ filter: '.logicProX' })
})
 
$.get( "https://www.googleapis.com/blogger/v3/blogs/8527536267022331932/posts?key=AIzaSyCqUTx5RlpApPEXXEmg0266lnUKLGV3vkY", function( data ) {
  var blogPost = data.items[2];
  var blogPostContent = blogPost.content;
  var blogPostTitle = blogPost.title;
  
  $( ".blogPost__content__text" )
    .html(blogPostContent);
  
  $('.blogPost__title')
    .html(blogPostTitle);
}, "json" );




});