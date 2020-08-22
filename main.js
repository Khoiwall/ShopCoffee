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
                        <span class="arrowRight" v-if="number(key) === 3">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                        <span class="arrowRight-1" v-else-if="number(key) === 4">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                        <ul v-if="number(key) === 3" class="menu-children-of-portfolio">
                            <li v-for="column in columns"><a href="#">{{column.list.toLocaleUpperCase()}}</a></li>
                        </ul>
                        <ul v-if="number(key) === 4" class="menu-children-of-portfolios">
                            <li v-for="columnO in columnOs"><a href="#">{{columnO.list.toLocaleUpperCase()}}</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">BLOG</a>
                <ul class="menu-of-blog">
                    <li v-for="(value,key) in blogs" v-bind:class="appearBlogs(key)"><a href="#">{{value.list.toLocaleUpperCase()}}</a>
                        <span class="arrowRight-2" v-if="number(key) === 3">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                        <ul class="menu-children-of-blog" v-if="number(key) === 3">
                            <li v-for="value in childBlogs"><a href="#">{{value.list.toLocaleUpperCase()}}</a></li>
                        </ul>
                    </li>
                 </ul>
            </li>
            <li><a href="#">SHOP</a>
                <ul class="menu-of-shop">
                    <li v-for="(value,key) in shops" v-bind:class="appearShops(key)"><a>{{value.list.toLocaleUpperCase()}}</a>
                        <span class="arrowRight-3" v-if="number(key) === 3">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                        <ul class="menu-children-of-shop" v-if="number(key) === 3">
                            <li v-for="value in childShops"><a href="#">{{value.list.toLocaleUpperCase()}}</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">CONTACT</a>
            </li>
        </ul>

`,
data(){
    return{
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
            {list: 'Locations'},
            {list: 'Contact US'}
        ],
        portfolios:[
            {list: 'Standard'},
            {list: 'Gallery'},
            {list: 'Masonry'},
            {list: 'Layouts'},
            {list: 'Single'}
        ],
        columns:[
            {list: 'Two Columns'},
            {list: 'Three Columns'},
            {list: 'Three Columns Wide'},
            {list: 'Four Columns'},
            {list: 'Four Columns Wide'},
            {list: 'Five Columns Wide'}
        ],
        columnOs:[
            {list: 'Small Images'},
            {list: 'Small slider'},
            {list: 'Big Images'},
            {list: 'Big Slider'},
            {list: 'Small Gallery'},
            {list: 'Big Gallery'}
            
        ],
        blogs:[
            {list: 'Right Sidebar'},
            {list: 'Left Sidebar'},
            {list: 'Without Sidebar'},
            {list: 'Post Types'}
        ],
        childBlogs:[
            {list: 'Standard'},
            {list: 'Gallery'},
            {list: 'Link'},
            {list: 'Quote'},
            {list: 'Video'},
            {list: 'Audio'}
        ],
        shops:[
            {list: 'Product List'},
            {list: 'Product Single'},
            {list: 'Shop Layouts'},
            {list: 'Shop Pages'}
        ],
        childShops:[
            {list: 'My Account'},
            {list: 'Cart'},
            {list: 'Checkout'}
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