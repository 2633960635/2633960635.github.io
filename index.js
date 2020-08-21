$(function () {
    $(document).pjax('a[data-pjax]', '#main-body-container', {
        fragment: '#main-body-container', timeout: 8000, type: 'GET'
    });
    $(document).on('pjax:send', function () {
        $("#main-body-container").addClass("pjax-active");
    });
    $(document).on('pjax:complete', function () {
        $("#main-body-container").removeClass("pjax-active");
    });
    $("body").append('<div class="back-to-top"><i class="mdui-icon material-icons">&#xe25a;</i></div>');
    $(".menu").click(function () {
        $(".menu").toggleClass("menu_open");
        $(".menu-list").toggleClass("menu-list_open");
        $(".black-bkg").toggleClass("black-bkg_open");
    })
    $(".black-bkg").click(function(){
        $(".menu").toggleClass("menu_open");
        $(".menu-list").toggleClass("menu-list_open");
        $(".black-bkg").toggleClass("black-bkg_open");
    })
    if ($(window).scrollTop() !== 0) {
        $(".white-bkg").addClass("white-bkg-open");
        $(".navbar").addClass("navbar-small");
        $(".menu-list").addClass("menu-list-small");
    } else {
        $(".white-bkg").removeClass("white-bkg-open");
        $(".navbar").removeClass("navbar-small")
        $(".menu-list").removeClass("menu-list-small");
    }
    AOS.init();
    //点击返回顶部
  $(".back-to-top").click(function(){
    $('html,body').animate({'scrollTop':'0'},500,)
   })
   
})

$(".link-to-this-page-element").click(function(){
    var objName = this.dataset.position;
    var obj = document.getElementById(objName);
    var positionTop = obj.offsetTop;
    $('html,body').animate({'scrollTop':positionTop - 20},500,)
})





//加载条
$('body').show();
NProgress.start();
setTimeout(function () { NProgress.done(); $('.fade').removeClass('out'); }, 1000);
window.onscroll = function () {
    if ($(window).scrollTop() !== 0) {
        $(".white-bkg").addClass("white-bkg-open");
        $(".navbar").addClass("navbar-small");
        $(".menu-list").addClass("menu-list-small");
    } else {
        $(".white-bkg").removeClass("white-bkg-open");
        $(".navbar").removeClass("navbar-small")
        $(".menu-list").removeClass("menu-list-small");
    }
}
