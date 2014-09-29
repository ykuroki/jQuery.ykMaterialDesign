/*!
 * jQuery.ykMaterialDesign
 * Version: 0.1
 * memo
 * as is
 * 1.ボタンクリックで波紋が広がるアクション
 *
 * Copyright(c) 2014 YUKI KUROKI <mmng.3000@gmail.com>
 * MIT Licensed
 */
(function ($) {

    $.ykMaterialDesign = function (element, options) {

        var defaults = {}
        var plugin = this;
        plugin.settings = {}

        var $element = $(element),
            element = element,
            $circle   = $('.btnCircle');
        var timerId = 0;

        //init function
        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);

            // 指定したクラスがある要素にてそれぞれの要素を追加する
            $('.md-button').each(function(i){

                if($(this).hasClass('md-circle-white')){

                    //エフェクト用の要素を作成してappendする            
                    $("<span class='circle white'></span>").appendTo($(this));
                    $circle   = $('.circle');

                }else if($(this).hasClass('md-circle-gray')){

                    //エフェクト用の要素を作成してappendする            
                    $("<span class='circle gray'></span>").appendTo($(this));
                    $circle   = $('.circle');                    

                }else if($(this).hasClass('md-icon-rotate')){

                    $("<span class='rotate-before'></span>").css({
                        "background" : "url(" + $(this).data('md-before-img') + ")",
                        "backgroundSize" : "50px 50px",
                        "width"      : "50px",
                        "height"     : "50px"
                    }).appendTo($(this));

                    $("<span class='rotate-after'></span>").css({
                        "background" : "url(" + $(this).data('md-after-img') + ")",
                        "backgroundSize" : "50px 50px",
                        "width"      : "50px",
                        "height"     : "50px"
                    }).hide().appendTo($(this));

                }
            });

            var filterClassName = 'filter_' + plugin.settings.filter;
            
            $('.md-button').on({
                'click':function(e){
                    var target = $(this);
                    var areaOffset = target.offset(); 

                    if(target.hasClass('md-icon-rotate')){

                        _actionRotate( target );

                    }else{
                        target.addClass('eff-white');                    
                        
                        target.find('.circle').css({
                            'top'  : e.pageY - areaOffset.top - $circle.height()/2,
                            'left' : e.pageX - areaOffset.left - $circle.width()/2,
                            'opacity' : 1
                        }).stop().animate({
                            'top': e.pageY - areaOffset.top - 300/2,
                            'left': e.pageX - areaOffset.left - 300/2,
                            'width' : "300px",
                            'height' : "300px",
                            'opacity' : 0
                        },200, function(){
                            $circle.css({
                                'width'  : '50px',
                                'height' : '50px',
                                'opacity': 0
                            })
                            target.removeClass('eff-white');
                        });  
                    }      
                }
            });

        }
        
        function _actionRotate ( target ){

            if(target.find('.rotate-before').is(':visible')){

                target.addClass('action_rotate');
    
                setTimeout(function(){
                    target.removeClass('action_rotate');
                },500);

                target.find('.rotate-after').fadeIn(500);
                target.find('.rotate-before').fadeOut(500);            
            }else{

                target.addClass('back_rotate');
    
                setTimeout(function(){
                    target.removeClass('back_rotate');
                },500);

                target.find('.rotate-before').fadeIn(500);
                target.find('.rotate-after').fadeOut(500);
            }
        }
        
        plugin.init();
    }

    $.fn.ykMaterialDesign = function (options) {

        return this.each(function () {
            if (undefined == $(this).data('ykMaterialDesign')) {
                var plugin = new $.ykMaterialDesign(this, options);
                $(this).data('ykMaterialDesign', plugin);
            }
        });

    }

})(jQuery);
