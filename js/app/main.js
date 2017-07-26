requirejs.config({
    baseUrl: "./js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

require(["jquery", "carousel",'gotop','waterfull','lazyload','loadmore'], function($, carousel,gotop,water,lazy,loadmore){
    carousel.init($(".carousel"))

    gotop.init($('body'))


    $('.ct img').on('load',function(){
    	water.init($('.ct'))
    })

    lazy.init($('.ct img'))

    loadmore.init($(".btn"), $(".ct"))

})
