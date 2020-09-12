Vue.component('nav-bar',{
    template: `
        <ul class="category" style="margin: 0; height: 100%; text-align: center; display: inline-block;">
            <li><a href="#">HOME</a>
                <ul class="menu-of-home">
                    <li v-for="home in homes">
                        <a href="#">{{home.list.toLocaleUpperCase()}}</a>
                    </li>
                </ul>
            </li>
            <li><a href="#">PAGES</a>
                <ul class="menu-of-page">
                    <li v-for="page in pages">
                        <a href="#">{{page.list.toLocaleUpperCase()}}</a>
                    </li>
                </ul>
            </li>
            <li><a href="#">PORTFOLIO</a>
                <ul class="menu-of-portfolio">
                    <li v-for="(portfolio,key) in portfolios" v-bind:class="appearPortfolio(key)">
                        <a href="#">{{portfolio.list.toLocaleUpperCase()}}</a>
                    </li>
                </ul>
            </li>
            <li><a href="#">BLOG</a>
                <ul class="menu-of-blog">
                    <li v-for="(value,key) in blogs" v-bind:class="appearBlogs(key)"><a href="#">{{value.list.toLocaleUpperCase()}}</a>
                 </ul>
            </li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>

`,
data(){
    return{
        homes:[
            {list: 'Mocha'},
            {list: 'Espresso'}
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
    appearArrow(key){
        if (key >= 3){
            return true
        }
        return false
    },
    number(key){
        if (key === 3){
            return 3
        }
        else if (key === 4){
            return 4
        }
        return 0
    },
    appearPortfolio(key){
        if (key === 3){
            return 'appear-layout'
        }
        else if (key === 4){
            return 'appear-single'
        }
        return ''
    },
    appearBlogs(key){
        if (key === 3){
            return 'appear-post-types'
        }
    },
    appearShops(key){
        if (key === 3){
            return 'appear-shop-pages'
        }
    }
}
})

var childMenu = new Vue({
    el: '#childmenu'
})