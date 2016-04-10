var $ = require('jquery');
var anchorLink = function(opt){
    opt = opt || {};
    opt.speed = opt.speed || 500;
    opt.offset = opt.offset || 500;
    $(function(){
        $(".anchorlink").on('click', function(e){
            e.preventDefault();
            var href = $(this).attr("href");
            var speed = opt.speed;
            var easing = 'swing';
            var target = $(href == "#" || href == "" ? 'html' : href);
            var animateParam = {
                scrollTop: target.offset().top - opt.offset
            };
            $("html, body").animate(animateParam, speed, easing);
        });
    });
}
module.exports = anchorLink;
