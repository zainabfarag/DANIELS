$(".navbar a").click(function(eInfo){
    let x= eInfo.target.getAttribute("href");
    let xTop = $(x).offset().top
    $("html,body").animate({scrollTop: xTop}, 2000)
    console.log(x);
})