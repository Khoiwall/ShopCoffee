Vue.component('menu-mobile',{
    template:`
        <div class="hidden-menu" id = "site-menu-handle">
            <div class="content-menu">
                <div class="close-menu" id="close-menu">
                    <span style="font-size: 20px"><i class="fas fa-times-circle"></i></span>
                </div>
                <div class="style-list-menu">
                    <div class="list-menu-mobile">
                        <ul>
                            <li v-for="(value,index) in menuList">{{ value.list }}
                                <span class="arrow-right" v-bind:id="clickMenu(index)">
                                    <i class="fas fa-angle-double-right"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            menuList: [
                {list: 'HOME'},
                {list: 'PAGE'},
                {list: 'PORTFOLIO'},
                {list: 'BLOG'},
                {list: 'SHOP'},
                {list: 'CONTACT'}
            ]
        }
    },
    methods:{
        clickMenu: function(k){
            return 'clickMenuFaTher' + k.toString();
        }
    }
})

var menu = new Vue({
    el: '#menu-mobile'
})

var clickMenu = document.getElementById('click-menu')
var siteMenuHandle = document.getElementById('site-menu-handle')
var shadow = document.getElementById('shadow')
var shadowNav = document.getElementById('shadow-nav')
var closeMenu = document.getElementById('close-menu')

clickMenu.addEventListener('click',function(){
    siteMenuHandle.className += ' appear-menu'
    shadow.className += ' appear-shadow'
    shadowNav.style.backgroundColor = 'rgba(110, 108, 108, 0.8)'
    clickMenu.style.display = "none"
})

closeMenu.addEventListener('click',function(){
    siteMenuHandle.className = 'hidden-menu'
    shadow.className = 'shadow-of-menu hidden'
    shadowNav.style.backgroundColor = 'rgb(255, 255, 255)'
    clickMenu.style.display = "block"
})
