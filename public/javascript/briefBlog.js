Vue.component('brief-blog',{
    template:`
        <div class="style-brief-blog">
            <div class="content-brief-blog">
                <div class= "brief-blog-inner" >
                    <div class = "wrap-brief-blog">
                        <div class="tittle-brief-blog">
                            <div class="style-title">
                                <h1 class="cover">
                                    <span>THE COFFEE HERALD</span>
                                </h1>
                            </div>
                        </div>
                        <div class="logo-brief-blog">
                            <div class="image-blog">
                                <img src = "./public/image/title-separator.png" />
                            </div>
                        </div>
                        <div class="describle-blog">
                            <h5 class= "cover-blog">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selection-blogs">
                    <div class="the-blogs">
                        <div class = "wrap-blogs">
                            <div class="row">
                                <div class="col-lg-4" v-for = "value in blogs">
                                    <div class="image-of-blog">
                                        <div class="stlye-image-blog">
                                            <a class="the-link-blog" href="#">
                                                <img v-bind:src=value.image />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="title-of-blog content-of-blog">
                                        <h4 class="cover">
                                            <a class="the-link-blog" href="#">
                                                <span>{{value.title}}</span>
                                            </a>
                                        </h4>
                                        <div class="style-text-blog">
                                            <p>{{value.describle}}</p>
                                            <a href="#" class="read-continue">
                                                READ MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    `,
    data(){
        return{
            blogs: [
                {
                    image: './public/image/blog-1-img-1.jpg',
                    title: 'PREP TECHNIQUES',
                    describle: 'Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus,'
                },
                {
                    image: './public/image/blog-1-img-2.jpg',
                    title: 'FRENCH PRESS',
                    describle: 'Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus,'
                },
                {
                    image: './public/image/blog-1-img-3.jpg',
                    title: 'TURKISH IBRIK',
                    describle: 'Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus maecenas tempus,'
                },
            ]
        }
    }
})


new Vue({
    el: '#briefBlog'
})

Vue.component('brief-product',{
    template:`
    <div class="style-brief-prodcut">
        <div class="content-brief-product">
            <div class= "brief-product-inner" >
                <div class = "wrap-brief-product">
                    <div class="tittle-brief-product">
                        <div class="style-title">
                            <h1 class="cover">
                                <span>ONLINE COFFEE SHOP</span>
                            </h1>
                        </div>
                    </div>
                    <div class="logo-brief-product">
                        <div class="image-product">
                            <img src = "./public/image/title-separator.png" />
                        </div>
                    </div>
                    <div class="describle-product">
                        <h5 class= "cover-product">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="highlight-product">
            <div class="style-part">
                <div class="row style-content">
                    <div class="col-xl-3 col-lg-6 col-md-6" v-for="value in products" style="padding: 0px !important;">
                        <div class="link-product">
                            <div class="href-product"><a href="#"></a></div>
                            <div class="container-add-cart">
                                <a href="#" class="broder-cart">ADD TO CART</a>
                            </div>
                            <div class="image-of-product">
                                <img v-bind:src=value.image />
                            </div>
                            <div class="typeCoffe">
                                <h5 class="cover">
                                    <a href="#">{{value.typeCoffe}}</a>
                                </h5>
                            </div>
                            <div class="price">
                                <h5 class="cover">
                                    <span>{{value.price}}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            products:[
                {image: './public/image/product-img-1.png', typeCoffe: 'ETHIOPIA COFFEE', price: '$15.00'},
                {image: './public/image/product-img-3.png', typeCoffe: 'KENYA COFFEE', price: '$18.00'},
                {image: './public/image/product-img-5.png', typeCoffe: 'COLUMBIA COFFEE', price: '$21.00'},
                {image: './public/image/product-img-8.png', typeCoffe: 'GUATEMALA COFFEE', price: '$25.00'}
            ]
        }
    }
})

new Vue({
    el: '#briefProduct'
})