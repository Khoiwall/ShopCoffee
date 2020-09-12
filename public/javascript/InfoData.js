Vue.component('info-data',{
    template: `
        <div class="row container-wrap">
            <div class="style-wrap-describle col-xl-3 col-lg-6 col-md-6" v-for="value in data">
                <div class = "wrap-describle">
                    <div id="counter" class="counter">
                        <div class="counter-value" v-bind:data-count=value.counter>
                        </div>
                    </div>
                    <div class="counter-title">
                        <h4 class="cover" style="display: inline-block;">{{value.title}}</h4>
                    </div>
                    <div class="counter-describle">
                        <p>{{value.describle}}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            data:[
                {number: 0,counter: 250, title: 'VARIETIES OF COFFEE', describle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean'},
                {number: 0,counter: 123, title: 'HOURS OF TESTING', describle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean'},
                {number: 0,counter: 452, title: 'COFFEE MARKETS', describle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean'},
                {number: 0,counter: 32, title: 'COFFEE BRANDS', describle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean'}
            ]
        }
    }
})

new Vue({
    el: '#infoData'
})

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});