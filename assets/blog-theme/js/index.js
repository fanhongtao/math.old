/**
 * 页面ready方法
 */
$(document).ready(function() {
    generateQRcode();
    generateContent();
    backToTop();
    changeEmptyHeadTable();
});

/**
 * 生成二维码
 */
function generateQRcode() {
    var opt = { text : window.location.href, width:150, height:150, background: "#f0f0f0" };
    try {
        document.createElement("canvas").getContext("2d");
    } catch (e) {
        $.extend(opt,{ render : "table" });
    }
    $('.qrcode').html('').qrcode(opt);
}

/**
 * 生成侧边目录
 */
function generateContent() {
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $('#content').hide();
    } else {
        $('#content .content-text').html('<ul>' + $('#markdown-toc').html() + '</ul>');
    }
}

/**
 * 回到顶部
 */
function backToTop() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#back-top").fadeIn(500);
        } else {
            $("#back-top").fadeOut(500);
        }
    });
    $("#back-top").click(function() {
        $("body").animate({
            scrollTop: "0"
        }, 500);
    });
}

// 修改表头字段为空的表格：删除表头，并隐藏表格线
function changeEmptyHeadTable() {
  $("table").each(function (tabindex, tabitem) {
    var clean = false;
    $(tabitem).find("th").each(function (thindex, thitem) {
      if ($.trim($(thitem).text()).length==0){
        $(thitem).parent().remove();
        clean = true;
      }
    });
    if (clean) {
      $(tabitem).css("border","0");
    }
  });
}