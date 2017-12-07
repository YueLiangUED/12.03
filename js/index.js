(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    
    
    //选择城区
    $('#urbanList').on('click','li',function () {
        var $this = $(this),
            $urban = $('#urban');
        $this.addClass('active');
        $urban.text($this.text());
        $('#urbanList').slideUp();
    });
    //显示城区列表
    $('.triangle').on('click',function () {
        $('#urbanList').slideToggle();
        $('#urbanList').find('li').removeClass('active');
    });
    //点击搜索结果列表项
    $('#ui-id-1').on('click','li',function () {
        $('#communityList').slideDown();
        $('#floorNumList').slideUp();
        $('#search').attr('value',$(this).children().text());
        $('#search').val($(this).children().text());
        $(this).parent().hide();
    });
    //搜索按钮
    $('#searchBtn').on('click',function () {
        $('#communityList').slideDown();
        $('#communityList li').slideDown();
        $('#floorNumList').slideUp();
    });
    //点击小区名称展示楼号
    $('#communityList').on('click','li',function () {
        $(this).siblings('li').slideUp();
        $(this).addClass('act');
        $('#floorNumList').slideDown();
    });
    //点击楼号弹出业务办理弹窗
    $('#floorNumList').on('click','li',function () {
        $('.tcWrap').slideDown();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('#selected').text($('#communityList li.act').text() + " " + $(this).text());
        showMask();
    });
    //点击暂不报装按钮
    $('#default').on('click',function () {
        $('#floorNumList li').removeClass('active');
        $('.tcWrap').slideUp();
        hideMask();
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
