Vue.component('describle',{
    template:`
        <div class ="style-wrap-describle col-lg-3 col-md-6">
            <div class ="wrap-describle">
                <div class="style-image">
                    <div class = "cover">
                        <img v-bind:src="value.image"/>
                    </div>
                </div>
                <div class="title-describle">
                    <h4 class = "cover">
                        <span>{{value.title}}</span>
                    </h4>
                </div>
                <div class="content-describle">
                    <div class="cover">
                        <p>{{value.describle}}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    props:['value']
})

var describle = new Vue({
    el: '#Describle',
    data:{
        describle:[
            {
                image: './public/image/describle1.png',
                title: 'TYPES OF COFFEE',
                describle: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo'
            },
            {
                image: './public/image/describle2.png',
                title: 'BEAN VARIETIES',
                describle: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo'
            },
            {
                image: './public/image/describle3.png',
                title: 'COFFEE & PASTRY',
                describle: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo'
            },
            {
                image: './public/image/describle4.png',
                title: 'COFFEE TO GO',
                describle: 'Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo'
            }
        ]
    }
})