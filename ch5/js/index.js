/**
 * 乐购商城首页
 * 2022-10-26 by 坚决打击
 */ 
//当页面加载成功
$(function(){
    /*首页大图轮播 */
    $('#bannerInner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    //  图书电子书轮播
    $('#ebooksbanner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
         // 服装轮播
    $('#fzbanner').tyslide({
        boxh:380,//盒子的高度
        w:380,//盒子的宽度
        h:298,//图片的高度
        isShow:false,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });

    // 电子书table切换
    var $lis=$('.ebooks .ebooks-nav>li');
    $lis.mouseover(function(){
        // 给自己添加激活类active 把兄弟干掉
        $(this).addClass('active').siblings().removerClass('active');
        // 获取index
        var index=$(this).index();
        // 选中内容
        var $ebooksList=$(".ebooks-list");
        $ebooksList.eq(index).show().siblings('.ebooks-list').hide();
    })
    // 新书列表手风琴效果
    $('.ebooks .right-box ul>li').mouseenter(function(){
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();//隐藏详情
        $(this).siblings().find('.ebooks-title').show();//显示详情
        // 当前:隐藏标题 显示详情
        $(this).find('.ebooks-title').hide();//隐藏详情
        $(this).find('.desc').show(); // 显示详情
    })
})