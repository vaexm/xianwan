/*
* @Author: Marte
* @Date:   2017-09-07 11:53:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-07 11:53:43
*/

$(function() {
    //-----------棣栭〉鐒︾偣鍥�
    $("#slider").responsiveSlides({
        auto: true,
        pager: true,
        speed: 300
     });

    //---闄愭椂鎶㈣喘鍊掕鏃�
    countDown();

    //------------妤煎眰寤舵椂鍔犺浇
    $(".switch_textarea").lazyload({
        callfloorFocus:function(){
            //---妤煎眰涓璴ogo鍒囨崲鏁堟灉
            $(".channel_logo").each(function() {
                var dBg=$(this).find("ul").attr("defaultbackdrop");
                var hBg=$(this).find("ul").attr("hoverbackdrop");
                var liA=$(this).find("ul li");
                liA.each(function() {
                    var bgX = $(this).index()*98;
                    $(this).css({"background":"url("+dBg+") no-repeat -"+bgX+"px 0"});
                });
                liA.hover(function(){
                    $(this).css({"background-image":"url("+hBg+")"})
                },function(){
                    $(this).css({"background-image":"url("+dBg+")"})
                });
            });
            //妤煎眰涓爣绛惧垏鎹㈡牱寮�
            if($("body").attr("class")!="full"){
                $(".channel_logo").each(function() {
                    $(this).find("li").slice(6).remove();
                });
                $(".activityCenter").each(function() {
                    $(this).find("li").slice(4).remove();
                });
                $(".floor8 ul").each(function() {
                    $(this).find("li").slice(4).remove();
                });
                $(".channel_main_r").remove();
                $(".channel_title").each(function() {
                    if($(this).find("ul").attr("class")!="channel_t"){
                        $(this).find("li:eq(0)").mouseover(function(){
                            channeltabHot($(this).attr("ID"),'185px','186px');
                            return false;
                        });
                        $(this).find("li:gt(0)").mouseover(function(){
                            channelTab($(this).attr("ID"),'443px','100px','100px');
                            return false;
                        });
                    }else{
                        $(this).find("li:eq(0)").mouseover(function(){
                            channeltabHot($(this).attr("ID"),'249px','248px');
                            return false;
                        });
                        $(this).find("li:gt(0)").mouseover(function(){
                            channelTab($(this).attr("ID"),'516px','110px','120px');
                            return false;
                        });
                    };
                });
            }else{
                $(".channel_title").each(function() {
                    if($(this).find("ul").attr("class")!="channel_t"){
                        $(this).find("li:eq(0)").mouseover(function(){
                            channeltabHot($(this).attr("ID"),'244px','243px');
                            return false;
                        });
                        $(this).find("li:gt(0)").mouseover(function(){
                            channelTab($(this).attr("ID"),'649px','108px','108px');
                            return false;
                        });
                    }else{
                        $(this).find("li:eq(0)").mouseover(function(){
                            channeltabHot($(this).attr("ID"),'244px','366px');
                            return false;
                        });
                        $(this).find("li:gt(0)").mouseover(function(){
                            channelTab($(this).attr("ID"),'649px','108px','219px');
                            return false;
                        });
                    };
                });
        };
        //-----妤煎眰8鍏跺畠棰戦亾閾炬帴榧犳爣鏁堟灉
        $(".floor8 ul li a").hover(function() {
            $(this).append("<b></b>");
            var othFimgW = $(this).find("img").width()-4;
            var othFimgH = $(this).find("img").height()-4;
            $(this).find("b").css({"width":othFimgW+"px","height":othFimgH+"px"})
        },function(){
            $(this).find("b").remove();
        });
        }
    });

    //---闄愭椂鎶㈣喘銆佹柊鍝佹帹鑽愭爣绛惧垏鎹�
    $(".activityTab li").live("hover",function() {
        $(".activityTab li").removeClass("active");
        $(this).addClass("active");
        $(".activityCenter").css("display","none");
        var activityTabID = $(this).attr("id");
        $("#"+activityTabID + "Center").show();
        return false;
    });


    //-------鏍规嵁鍒嗚鲸鐜囧垽鏂樉绀虹殑鍐呭鍙婂姛鑳�
    if($("body").attr("class")!="full"){
        $("#brandTab1_box li").slice(4).remove();
        $("#brandTab2_box li").slice(4).remove();
        $("#brandTab3_box li").slice(4).remove();
        $(".iBrand-item li").slice(4).remove();
    };

    //-------鐒︾偣鍥惧彸渚ч紶鏍囨晥鏋�
    $(".i_f_right img").live({
       mouseenter:function(){
           $(this).closest(".i_f_right").find("div").css({"background":"#000"}).find("img").css({"opacity":"0.4"});
           $(this).css("opacity",1);
       },
       mouseleave:function(){
          $(this).closest(".i_f_right").find("div").attr("style","").find("img").attr("style","");
       }
    });

    //-------宸︿晶鍒嗙被瀵艰埅
    var p=".pop-subcategory",
        i="ul.items li",
        s="trak",
        o="o",
        t="t"
    $(i).mouseover(function() {
        $(i).removeClass(s);
        $(this).addClass(s);
        $(p).hide();
        var activeTab = $(this).attr("id").replace("N_","");
        $("#"+activeTab).show();
        return false;
    });
    $(i).mouseout(function() {
        $(this).removeClass(s);
        $(p).hide();
        return false;
    });
    $(p).mouseover(function() {
        $(this).show();
        $(i).removeClass(s);
        var activeNav = $(this).attr("id");
        $("#N_"+activeNav).addClass(s);
        return false;
    });
    $(p).mouseout(function() {
        $(this).hide();
        var activeNav = $(this).attr("id");
        $("#N_"+activeNav).removeClass(s);
        return false;
    });
    $(".pop-subcategory").append("<b></b>");
    $(".pop-subcategory b").live("click",function(){
        $(this).parent().fadeOut();
    });

    //-------缃戠珯澶撮儴涓嬫媺鑿滃崟
    $(".menuPopup > a").hover(function(){
        $(this).addClass("trak");
        $(this).next().css("display","block");
    },function(){
        $(this).next().css("display","none");
        $(this).removeClass("trak");
    });
    $(".menuPopup > a").next().hover(function(){
        $(this).prev().addClass("trak");
        $(this).css("display","block");
    },function(){
        $(this).css("display","none");
        $(this).prev().removeClass("trak");
    });

    //-------鍝佺墝鎺ㄨ崘鍒囨崲Tab
    $("ul#brand-title li").live("hover",function() {
        $("ul#brand-title li").removeClass("active");
        $(this).addClass("active");
        $(".brand-list").css("display","none");
        var activeTab = $(this).attr("id");//.find("a").attr("id");
        $("#"+activeTab + "_box").show()//.fadeIn();
        $(this).parent().removeClass().addClass(activeTab);
        return false;
    });

    //-------鎺ㄨ崘鍝佺墝榧犳爣鏁堟灉
    $(".iBrand-item li a").hover(function(){
        var brandName = $(this).find("img").attr("title");
        $(this).append("<div></div>");
        $(this).find("div").text(brandName).show();
    },function(){
        $(this).find("div").remove();
    });

    //-------闄愭椂鎶㈣喘銆佹柊鍝佹帹鑽愪腑鍟嗗搧鍥剧墖榧犳爣鏀句笂鍘诲悗鍙樼孩鑹茶竟妗�
    $(".bWhite").hover(function(){
        $(this).addClass("bRed");
    },function(){
        $(this).removeClass("bRed")
    });




    //-------榧犳爣婊戣繃鍥剧墖娣诲姞杈规寮€濮�-----------
    $(".hover").hover(function(){
    if($(this).children(".zhao").length==0){
        $(this).append("<div class='zhao'></div>");
    }
    if($(this).css("position")!="absolute"){
        $(this).css({"position":"relative","display":"block"});
    }
        $(this).children(".zhao").css({"height":$(this).height()-2 + "px","width":$(this).width()-2 + "px","border":"solid 1px #e20c3a","position":"absolute","top":"0","left":"0","display":"block","z-index":"90000"});
    },function(){
        $(this).children(".zhao").remove();
    });

    //------杩斿洖椤甸潰椤堕儴------
    var BackTop=$('#toolBackTop');
    $(window).scroll(function(){
        var winStop=$(window).scrollTop();
        if(winStop>30){
          BackTop.fadeIn()
        }else{
          BackTop.fadeOut()
        }
    });
    $('#toolBackTop a').click(function(){
        $('html,body').animate({scrollTop: '0'}, 500);
    });

    //-------椤靛熬閭欢璁㈤槄-----------
    $(".subscribe_forindex").click(function () {
        var conObj = $("#emailAddr");
        if (conObj.val() == "" || !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.(\w)+)*(\.(\w){2,3})$/.test(conObj.val())) {
            $("#prompt").html("璇疯緭鍏ュ悎娉曢偖浠跺湴鍧€!");
            $("#prompt").css("display", "block").delay(2500).fadeOut("slow");
            return false;
        }
        $.getJSON("http://www.vjia.com/emailorder/emailsubscribe.ashx?emailsubscribe=" + encodeURIComponent(conObj.val()) + "&jsoncallback=?",
            function (resobj) {
                if (resobj != null) {
                    if (resobj.res) {
                        location.href = "http://www.vjia.com/emailorder/emailsubscribesuccess.htm?backurl=" + encodeURIComponent(conObj.val());
                        return false;
                    }
                    else {
                        $("#prompt").html(resobj.msg);
                        $("#prompt").css("display", "block").delay(2500).fadeOut("slow");
                        return;
                    }
                }
                $("#prompt").html("澶勭悊澶辫触!");
                $("#prompt").css("display", "block").delay(2500).fadeOut("slow");
            });
    });
});

//---棣栭〉妤煎眰鈥滄帹鑽愨€濇爣绛惧垏鎹㈡柟娉�
function channeltabHot(id,fWidth,liWidth){
    $("#"+id).closest(".iChannel").find(".channel_ad").css("display","none");
    $("#"+id+"_center").show();
    $("#"+id).parent().find("li").removeClass();
    $("#"+id).parent("ul").find("p").show();
    $("#"+id).addClass("r");
    $("#"+id).css({width: fWidth});
    $("#"+id).nextAll().css({width: liWidth});
    $("#"+id).closest(".iChannel").attr("id","");
    return false;
};
//---棣栭〉妤煎眰鏍囩鍒囨崲鏂规硶
function channelTab(id,mWidth,liWidth,fWidth){
    $("#"+id).css({width: mWidth})
    $("#"+id).parent().find("p").hide();
    $("#"+id).find("p").show();
    $("#"+id).addClass("on");
    $("#"+id).prevAll().css({width: liWidth}).removeClass();
    $("#"+id).nextAll().css({width: liWidth}).removeClass();
    $("#"+id).parent().find("li:first").css({width: fWidth}).removeClass();
    $("#"+id).closest(".iChannel").find(".channel_ad").css("display","none");
    $("#"+id + "_center").show();
    $("#"+id).closest(".iChannel").attr("id",id + "_box");
    return false;
};



//鏀惰棌V+
function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
try{
    window.external.addFavorite(sURL, sTitle);
}catch(e) {
    try{
        window.sidebar.addPanel(sTitle, sURL, "");
    }catch (e) {
        alert("鍔犲叆鏀惰棌澶辫触锛岃浣跨敤Ctrl+D杩涜娣诲姞,鎴栨墜鍔ㄥ湪娴忚鍣ㄩ噷杩涜璁剧疆.");
    };
};};

function countDown(){
$(".countdown").each(function(){
  //var lxfday=$(this).attr("lxfday");//鐢ㄦ潵鍒ゆ柇鏄惁鏄剧ず澶╂暟鐨勫彉閲�
  var endtime = new Date($(this).attr("endtime")).getTime();//鍙栫粨鏉熸棩鏈�(姣鍊�)
  var nowtime = new Date().getTime();        //浠婂ぉ鐨勬棩鏈�(姣鍊�)
  var youtime = endtime-nowtime;//杩樻湁澶氫箙(姣鍊�)
  var seconds = youtime/1000;
  var minutes = Math.floor(seconds/60);
  var hours = Math.floor(minutes/60);
  var days = Math.floor(hours/24);
  var CDay= days ;
  var CHour= hours % 24;
  var CMinute= minutes % 60;
  var CSecond= Math.floor(seconds%60);//"%"鏄彇浣欒繍绠楋紝鍙互鐞嗚В涓�60杩涗竴鍚庡彇浣欐暟锛岀劧鍚庡彧瑕佷綑鏁般€�
  if(endtime<=nowtime){
        $(this).html("宸茶繃鏈�")//濡傛灉缁撴潫鏃ユ湡灏忎簬褰撳墠鏃ユ湡灏辨彁绀鸿繃鏈熷暒
    }else{
        $(this).html("鍓╀綑"+days+"澶�"+CHour+"灏忔椂"+CMinute+"鍒�"+CSecond+"绉�"); //杈撳嚭鍊掕鏃剁殑鏁版嵁

    }
});
setTimeout("countDown()",1000);
};

//鐒︾偣鍥炬彃浠�
(function(b,I,A){b.fn.responsiveSlides=function(k){var a=b.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},k);return this.each(function(){A++;var f=b(this),s,q,t,l,n,p,m=0,e=f.children(),B=e.size(),g=parseFloat(a.speed),C=parseFloat(a.timeout),u=parseFloat(a.maxwidth),d=a.namespace,j=d+A,D=d+"_nav "+j+"_nav",v=d+"_here",h=j+"_on",E=j+"_s",r=b("<ul class='"+d+"_tabs "+j+"_tabs' />"),w={"float":"left",position:"relative",opacity:1,zIndex:2},x={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var c=(document.body||document.documentElement).style,a="transition";if("string"===typeof c[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),b;for(b=0;b<s.length;b++)if("string"===typeof c[s[b]+a])return!0;return!1}(),y=function(c){a.before();F?(e.removeClass(h).css(x).eq(c).addClass(h).css(w),m=c,setTimeout(function(){a.after()},g)):e.stop().fadeOut(g,function(){b(this).removeClass(h).css(x).css("opacity",1)}).eq(c).fadeIn(g,function(){b(this).addClass(h).css(w);a.after();m=c})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=E+a});f.addClass(d+" "+j);k&&k.maxwidth&&f.css("max-width",u);e.hide().css(x).eq(0).addClass(h).css(w).show();F&&e.show().css({"-webkit-transition":"opacity "+g+"ms ease-in-out","-moz-transition":"opacity "+g+"ms ease-in-out","-o-transition":"opacity "+g+"ms ease-in-out",transition:"opacity "+g+"ms ease-in-out"});if(1<e.size()){if(C<g+100)return;if(a.pager){var z=[];e.each(function(a){a+=1;z+="<li><a href='#' class='"+E+a+"'>"+a+"</a></li>"});r.append(z);p=r.find("a");k.controls?b(a.controls).append(r):f.after(r);q=function(a){p.closest("li").removeClass(v).eq(a).addClass(v)}}a.auto&&(t=function(){n=setInterval(function(){e.stop(!0,!0);var b=m+1<B?m+1:0;a.pager&&q(b);y(b)},C)},t());l=function(){a.auto&&(clearInterval(n),t())};a.pause&&f.hover(function(){clearInterval(n)},function(){l()});a.pager&&(p.bind("hover",function(c){c.preventDefault();a.pauseControls||l();c=p.index(this);m===c||b("."+h).queue("fx").length||(q(c),y(c))}).eq(0).closest("li").addClass(v),a.pauseControls&&p.hover(function(){clearInterval(n)},function(){l()}));if(a.nav){d="<a href='#' class='"+D+" prev'>"+a.prevText+"</a><a href='#' class='"+D+" next'>"+a.nextText+"</a>";k.controls?b(a.controls).append(d):f.after(d);var d=b("."+j+"_nav"),G=b("."+j+"_nav.prev");d.bind("click",function(c){c.preventDefault();if(!b("."+h).queue("fx").length){var d=e.index(b("."+h));c=d-1;d=d+1<B?m+1:0;y(b(this)[0]===G[0]?c:d);a.pager&&q(b(this)[0]===G[0]?c:d);a.pauseControls||l()}});a.pauseControls&&d.hover(function(){clearInterval(n)},function(){l()})}}if("undefined"===typeof document.body.style.maxWidth&&k.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();b(I).bind("resize",function(){H()})}})}})(jQuery,this,0);

(function(a){a.fn.slides=function(b){return b=a.extend({},a.fn.slides.option,b),this.each(function(){function w(g,h,i){if(!p&&o){switch(p=!0,b.animationStart(n+1),g){case"next":l=n,k=n+1,k=e===k?0:k,r=2*f,g=2*-f,n=k;break;case"prev":l=n,k=n-1,k=-1===k?e-1:k,r=0,g=0,n=k;break;case"pagination":k=parseInt(i,10),l=a("."+b.paginationClass+" li."+b.currentClass+" a",c).attr("href").match("[^#/]+$"),k>l?(r=2*f,g=2*-f):(r=0,g=0),n=k}"fade"===h?b.crossfade?d.children(":eq("+k+")",c).css({zIndex:10}).fadeIn(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1)}):d.children(":eq("+l+")",c).fadeOut(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing)}):d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing,function(){}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+k+")").css({left:r,display:"block"}),b.autoHeight?d.animate({left:g,height:d.children(":eq("+k+")").outerHeight()},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1}):d.animate({left:g},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1})),b.pagination&&(a("."+b.paginationClass+" li."+b.currentClass,c).removeClass(b.currentClass),a("."+b.paginationClass+" li:eq("+k+")",c).addClass(b.currentClass))}}function x(){clearInterval(c.data("interval"))}function y(){b.pause?(clearTimeout(c.data("pause")),clearInterval(c.data("interval")),u=setTimeout(function(){clearTimeout(c.data("pause")),v=setInterval(function(){w("next",i)},b.play),c.data("interval",v)},b.pause),c.data("pause",u)):x()}a("."+b.container,a(this)).children().wrapAll('<div class="slides_control"/>');var o,p,q,r,t,u,v,c=a(this),d=a(".slides_control",c),e=d.children().size(),f=d.children().outerWidth(),g=d.children().outerHeight(),h=b.start-1,i=0>b.effect.indexOf(",")?b.effect:b.effect.replace(" ","").split(",")[0],j=0>b.effect.indexOf(",")?i:b.effect.replace(" ","").split(",")[1],k=0,l=0,m=0,n=0;if(2>e)return a("."+b.container,a(this)).fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()}),a("."+b.next+", ."+b.prev).fadeOut(0),!1;if(!(2>e)){if(0>h&&(h=0),h>e&&(h=e-1),b.start&&(n=h),b.randomize&&d.randomize(),a("."+b.container,c).css({overflow:"hidden",position:"relative"}),d.children().css({position:"absolute",top:0,left:d.children().outerWidth(),zIndex:0,display:"none"}),d.css({position:"relative",width:3*f,height:g,left:-f}),a("."+b.container,c).css({display:"block"}),b.autoHeight&&(d.children().css({height:"auto"}),d.animate({height:d.children(":eq("+h+")").outerHeight()},b.autoHeightSpeed)),b.preload&&d.find("img:eq("+h+")").length){a("."+b.container,c).css({background:"url("+b.preloadImage+") no-repeat 50% 50%"});var z=d.find("img:eq("+h+")").attr("src")+"?"+(new Date).getTime();t="slides_control"!=a("img",c).parent().attr("class")?d.children(":eq(0)")[0].tagName.toLowerCase():d.find("img:eq("+h+")"),d.find("img:eq("+h+")").attr("src",z).load(function(){d.find(t+":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){a(this).css({zIndex:5}),a("."+b.container,c).css({background:""}),o=!0,b.slidesLoaded()})})}else d.children(":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()});b.bigTarget&&(d.children().css({cursor:"pointer"}),d.children().on("click",function(){return w("next",i),!1})),b.hoverPause&&b.play&&(d.bind("mouseover",function(){x()}),d.bind("mouseleave",function(){y()})),b.generateNextPrev&&(a("."+b.container,c).after('<a href="#" class="'+b.prev+'">Prev</a>'),a("."+b.prev,c).after('<a href="#" class="'+b.next+'">Next</a>')),a("."+b.next,c).on("click",function(a){a.preventDefault(),b.play&&y(),w("next",i)}),a("."+b.prev,c).on("click",function(a){a.preventDefault(),b.play&&y(),w("prev",i)}),b.generatePagination?(b.prependPagination?c.prepend("<ul class="+b.paginationClass+"></ul>"):c.append("<ul class="+b.paginationClass+"></ul>"),d.children().each(function(){a("."+b.paginationClass,c).append('<li><a href="#'+m+'">'+(m+1)+"</a></li>"),m++})):a("."+b.paginationClass+" li a",c).each(function(){a(this).attr("href","#"+m),m++}),a("."+b.paginationClass+" li:eq("+h+")",c).addClass(b.currentClass),a("."+b.paginationClass+" li a",c).on("hover",function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$"),n!=q&&w("pagination",j,q),!1}),a("a.link",c).on("click",function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$")-1,n!=q&&w("pagination",j,q),!1}),b.play&&(v=setInterval(function(){w("next",i)},b.play),c.data("interval",v))}})},a.fn.slides.option={preload:!1,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}},a.fn.randomize=function(b){function c(){return Math.round(Math.random())-.5}return a(this).each(function(){var d=a(this),e=d.children(),f=e.length;if(f>1){e.hide();var g=[];for(i=0;f>i;i++)g[g.length]=i;g=g.sort(c),a.each(g,function(a,c){var f=e.eq(c),g=f.clone(!0);g.show().appendTo(d),void 0!==b&&b(f,g),f.remove()})}})}})(jQuery);
