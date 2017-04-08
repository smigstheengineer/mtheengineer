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
  console.log(data)

  var posts = data.items;
  // console.log(posts)

  posts.forEach(function(element, index){

  // console.log(element)

    var data =  "<div class='blogPost'><div class='blogPost__title'>" + element.title + "</div>" + 
     "<div class='blogPost__content'><img class='blogPost__content__image' src='assets/blogPhoto1.png>" +
     "<p class='blogPost__content__text'>" +
     element.content +
     "</p></div>"

    
    // $( ".blogPost__content__text" )
    //   .html(post.blog.content);
    
    // $('.blogPost__title')
    //   .html(post.blog.title);

    $('.blogPosts').append(data);
        

  });

}, "json" );



});