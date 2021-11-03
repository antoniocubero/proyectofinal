$(document).ready(function(){
    console.log("Documento cargado")
    
    $("#nav_main").click(function(){
        $("#nav_main").addClass("scrolling")
        $("#intro h1").addClass("scrolling")
    })

    $("#btn_open_priv").click(function(){
        $("#politica_priv").addClass("opened")
    })
    $("#btn_close_priv i").click(function(){
        $("#politica_priv").removeClass("opened")
    })

    $("#min_supra").click(function(){
        $("#stock_car1").addClass("opened")
    })
    $("#stock_car1").click(function(){
        $("#stock_car1").removeClass("opened")
    })

    $("#min_240z").click(function(){
        $("#stock_car2").addClass("opened")
    })
    $("#stock_car2").click(function(){
        $("#stock_car2").removeClass("opened")
    })

    $("#min_rx8").click(function(){
        $("#stock_car3").addClass("opened")
    })
    $("#stock_car3").click(function(){
        $("#stock_car3").removeClass("opened")
    })

    $("#min_integra").click(function(){
        $("#stock_car4").addClass("opened")
    })
    $("#stock_car4").click(function(){
        $("#stock_car4").removeClass("opened")
    })

    $("#burguer_mobile").click(function(){
        $("#burguer_mobile").toggleClass("clicked")
        $("#nav_content").toggleClass("clicked")
    })
})


$(window).scroll(function(){
    var pixel = $(window).scrollTop()
    //console.log( pixel )

    if ( pixel <= 1 ) {
//        $("#nav_main").removeClass("scrolling")
        $(".fondoscroll").removeClass("scrolling")
    } else {
        $("#nav_main").addClass("scrolling")
        $(".fondoscroll").addClass("scrolling")
}
    if ( pixel > 1 ){
        $("#intro h1").addClass("scrolling")
    }

    if ( pixel > 1150 ){
        $("#info #info_marcas #logos_main").addClass("scrolling")
        $("#info_marcas h3").addClass("scrolling")
    }
    if ( pixel > 800 ){
        $("#info #info_content #info_img #coche_anim1_svg1").addClass("scrolling")
        $("#info #info_content #info_img #coche_anim1_svg2").addClass("scrolling")
        $("#info #info_content #info_img #coche_anim1_svg3").addClass("scrolling")
        $("#info #info_content #info_img #coche_anim1_svg4").addClass("scrolling")
        $("#info #info_content #info_img #coche_anim1_svg5").addClass("scrolling")
        $("#info #info_content #info_img #coche_anim1_svg6").addClass("scrolling")
    }
})
