var appearSearch= document.getElementById('appear-search');
var findInfo = document.getElementById('find-info');
var exit = document.getElementById('exit');
var hideNav = document.getElementById('hide-nav');
appearSearch.addEventListener('click',function(){
    if(findInfo.className === "search-info"){
        findInfo.className += " appear-search-info";
        hideNav.style.display = "none"
    }
});

exit.addEventListener('click', function(){
    findInfo.className = "search-info";
    hideNav.style.display = "block"
})

var i = 1

var ImageOne = document.getElementById('imageOne')
var ImageTwo = document.getElementById('imageTwo')
var ImageThree = document.getElementById('imageThree')

setInterval(function(){
    if (i === 1){
        if (ImageOne.className === 'none star skip-image'){
            ImageTwo.className = 'none star skip-image'
            ImageOne.className = 'none'
            ImageThree.className = 'none'
        }
        else{
            ImageOne.className = 'none'
            ImageTwo.className = 'none star skip-image'
            ImageThree.className = 'none'
        }
        i = 2
    }
    else if(i === 2){
        ImageTwo.className = 'none'
        ImageOne.className ='none'
        ImageThree.className = 'none star skip-image'
        i = 3
    }
    else{
        ImageThree.className = 'none'
        ImageTwo.className = 'none'
        ImageOne.className = 'none star skip-image'
        i = 1
    }
},7000)

// button on top

var btn = $('#myBtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});