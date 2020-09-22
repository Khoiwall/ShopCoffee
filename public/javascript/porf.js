Vue.component('portfolio',{
    template: `
        <div class="kyr-wrapper">
            <div class= "row">
                <div class = "kyr-por-item col-xl-3 col-lg-4 col-md-6" v-for="value in protfolios">
                    <article class="kyr-por-item-space">
                        <div class="kyr-por-inner">
                            <div class="kyr-por-image">
                                <a class="kyr-por-image-link"><img v-bind:src= value.image /></a>
                            </div>
                            <div class="kyr-por-text-holder">
                                <div class="kyr-por-link"><a class="kyr-por-link" href="#"></a></div>
                                <div class="kyr-por-text-wrapper">
                                    <div class="kyr-por-text">
                                        <div class="kyr-por-text-title">
                                            <h3 class = "cover">
                                                <span class="kyr-por-text-style">
                                                    {{value.title}}
                                                </span>
                                            </h3>
                                        </div>
                                        <div class="kyr-por-text">
                                            <p class = "kyr-por-text-linkStyle">Cup of Coffee/Filtered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            protfolios: [
                {image: './public/image/port-1-img-1.jpg', title: 'PERFECT CUP'},
                {image: './public/image/port-1-img-2.jpg', title: 'BREWED'},
                {image: './public/image/port-1-img-3.jpg', title: 'COFFEE DRIPS'},
                {image: './public/image/port-1-img-7.jpg', title: 'BAKED BEANS'},
                {image: './public/image/port-1-img-5.jpg', title: 'BEST AROMAS'},
                {image: './public/image/port-1-img-6.jpg', title: 'CREAMS'},
                {image: './public/image/port-1-img-4.jpg', title: 'ENJOYMENT'},
                {image: './public/image/port-1-img-8.jpg', title: 'BIG MUGS'}
            ]
        }
    }
})

new Vue({
    el: '#kyrProWrapper'
})