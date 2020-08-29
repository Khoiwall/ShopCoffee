Vue.component('menu-mobile',{
    template:`
        <div class="hidden-menu" id = "site-menu-handle">
            <div class="content-menu">

            </div>
        </div>
    `
})

var menu = new Vue({
    el: '#menu-mobile'
})

var clickMenu = document.getElementById('click-menu')
var siteMenuHandle = document.getElementById('site-menu-handle')

clickMenu.addEventListener('click',function(){
    if(siteMenuHandle.className === 'hidden-menu'){
        siteMenuHandle.className += ' appear-menu'
    }
    else{
        siteMenuHandle.className = 'hidden-menu'
    }
})
