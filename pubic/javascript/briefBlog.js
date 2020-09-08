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
                                <img src = "./pubic/image/title-separator.png" />
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
        </div>
    `
})


new Vue({
    el: '#briefBlog'
})