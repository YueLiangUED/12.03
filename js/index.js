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
    /*//搜索下拉
    $('#searchBox').on('input',function () {
        var $resultList = $('#resultList'),
            $this = $(this);
        $resultList.slideDown();
        $('#resultList').find('li').removeClass('active');
        if($this.val() == ''){
            $resultList.slideUp();
        }
    });
    //搜索下拉列表点击事件
    //获取焦点
    $('input').focus(function () {
        $('#resultList').slideDown();
        $('#resultList').find('li').removeClass('active');
    });
    //失去焦点
    $('input').blur(function () {
        $('#resultList').slideUp();
    });
    $('#resultList').on('click','li',function () {
        $(this).addClass('active');
        $('#searchBox').val($(this).text());
        $('#resultList').slideUp();
        $('#communityList').slideDown();
        $('#communityList li').slideDown();
        $('#floorNumList').slideUp();
    });*/
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
