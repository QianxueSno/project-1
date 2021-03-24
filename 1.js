$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

var $to = $("<div/>",{id:"to"}).on("click", function(){
    $(this).removeClass("on");
}).appendTo("body");
$('img[data-darkbox]').css({cursor:"pointer"}).on("click",function(){
    var o=this.getBoundingClientRect();
    $about.css({
        transition:"0s",
        backgroundImage:"url("+this.src+")",
        left:o.left, top:o.top,
        height:this.height, width:this.width
    });
    setTimeout(function(){
        $about.css({transition:".8s"}).addClass("on");
    },5);
});
