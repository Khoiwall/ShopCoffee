Vue.component('content-banner',{
    template: `<div class="content-header" v-bind:id="value.id">
    <div class="logo-2">
        <div class="img-logo">
            <img src="h1-slider-img-1.png">              
        </div>
    </div>

    <div class="title-of-content">
        <span>{{ value.title }}</span>
    </div>

    <div class="logo-3">
        <div class="img-logo">
            <img src="slider-separator-img.png">              
        </div>
    </div>
    <div class="shop-here">
        <div class ="border-shop">
            <a href="#">Shop Here</a>
        </div>
    </div>
</div>`,
props:['value']
})

var componentContent = new Vue({
    el: '#contentBanner',
    data:{
        titleContent: [
            {id: 'content-banner-1' ,title: 'Coffee Masters'},
            {id: 'content-banner-2' ,title: 'Coffee Factory '},
            {id: 'content-banner-3' ,title: 'Coffee Heaven'}
        ]
    }
})

var contentBanner1 = document.getElementById('content-banner-1')
var contentBanner2 = document.getElementById('content-banner-2')
var contentBanner3 = document.getElementById('content-banner-3')
var k = 1, tmp = 0
contentBanner2.style.display = "none"
contentBanner3.style.display = "none"
setInterval(function(){
    if(k === 0 ){
        contentBanner1.style.display = "block"
        contentBanner2.style.display = "none"
        contentBanner3.style.display = "none"
        k = 1
    }
    else if (k === 1){
        contentBanner2.style.display = "block"
        contentBanner1.style.display = "none"
        contentBanner3.style.display = "none"
        k = 2
    }
    else{
        contentBanner3.style.display = "block"
        contentBanner1.style.display = "none"
        contentBanner2.style.display = "none"
        k = 0
    }
},7000)
