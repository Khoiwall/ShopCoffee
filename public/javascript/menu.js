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
                            <li v-for="(value,index) in menuList" style="z-index: 300; background-color: #fff;"><a href="#" v-bind:id="clickMenu(index)">{{ value.list }}</a>
                                <span class="border-bottom"></span>
                                <span class="arrow-right" v-bind:class="hiddenArrow(index)">
                                    <i class="fas fa-angle-double-right"></i>
                                </span>
                                <ul class = "menu-mobile-children" v-bind:id="clickMenuChilderen(index)" style="z-index: 200;">
                                    <li v-for="valueChildren in menuChildren(index)"><a href="#">{{ valueChildren.list }}</a></li>
                                </ul>
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
            ],
            homes:[
                {list: 'Mocha'},
                {list: 'Espresso'},
                {list: 'Robusta'},
                {list: 'Landing'}
            ],
            pages:[
                {list: 'About US'},
                {list: 'About Me'},
                {list: 'Our Team'},
                {list: 'What We Offer'},
                {list: 'Our Menu'},
                {list: 'Locations'}
            ],
            portfolios:[
                {list: 'Standard'},
                {list: 'Gallery'},
                {list: 'Masonry'}
            ],
            blogs:[
                {list: 'Right Sidebar'},
                {list: 'Left Sidebar'},
                {list: 'Without Sidebar'}
            ]
        }
    },
    methods:{
        clickMenu: function(k){
            return 'clickMenuFaTher' + k.toString();
        },
        hiddenArrow: function(k){
            if (k === 4 || k === 5){
                return 'hidden-arrow'
            }
            return ''
        },
        menuChildren(k){
            if (k === 0){
                return this.homes
            }
            else if(k === 1){
                return this.pages
            }
            else if(k === 2){
                return this.portfolios
            }
            else if(k === 3){
                return this.blogs
            }
            else{
                return []
            }
        },
        clickMenuChilderen(k){
            return 'appear-menu-children' + k.toString()
        }
    },
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

var clickMenuFaTher0 = document.getElementById('clickMenuFaTher0');
var appearMenuChildren0 = document.getElementById('appear-menu-children0')
var clickMenuFaTher1 = document.getElementById('clickMenuFaTher1');
var appearMenuChildren1 = document.getElementById('appear-menu-children1')
var clickMenuFaTher2 = document.getElementById('clickMenuFaTher2');
var appearMenuChildren2 = document.getElementById('appear-menu-children2')
var clickMenuFaTher3 = document.getElementById('clickMenuFaTher3');
var appearMenuChildren3 = document.getElementById('appear-menu-children3')

clickMenuFaTher0.addEventListener('click',function(){
    if (appearMenuChildren0.className === 'menu-mobile-children'){
        appearMenuChildren0.className += ' abc'
    }
    else{
        appearMenuChildren0.className = 'menu-mobile-children'
    }
})
clickMenuFaTher1.addEventListener('click',function(){
    if (appearMenuChildren1.className === 'menu-mobile-children'){
        appearMenuChildren1.className += ' abce'
    }
    else{
        appearMenuChildren1.className = 'menu-mobile-children'
    }
})
clickMenuFaTher2.addEventListener('click',function(){
    if (appearMenuChildren2.className === 'menu-mobile-children'){
        appearMenuChildren2.className += ' abcd'
    }
    else{
        appearMenuChildren2.className = 'menu-mobile-children'
    }
})
clickMenuFaTher3.addEventListener('click',function(){
    if (appearMenuChildren3.className === 'menu-mobile-children'){
        appearMenuChildren3.className += ' abcd'
    }
    else{
        appearMenuChildren3.className = 'menu-mobile-children'
    }
})
