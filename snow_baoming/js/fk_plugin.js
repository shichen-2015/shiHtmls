/**!
 * by fankai
 * myself plug-in library
 * begin 2016.7.29——
 */
/**
 * 2016-07-29 v1.0  弹框
 */
/*
① 弹框效果。需要在页面加上遮罩层，a就是弹框的class或者id
 */
function fixed(a){
    var bwidth = $(window).width();
    var bheight = $(window).height();
    var fwidth = $(a).width();
    var fheight = $(a).height();
    var fleft = (bwidth - fwidth)/2;
    var ftop = (bheight - fheight)/2;
    $(a).css({
        left: fleft,
        top: ftop
    });
}
//fixed('.fix');
