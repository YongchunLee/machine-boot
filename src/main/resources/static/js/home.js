// home.js

// js入口
$(function() {
    console.log("home");
    // initLoad();
})

/*
* 初始加载页面数据
*/
function initLoad() {
    var super_user = $("#sys_super_user").val();
    var sys_user = $("#sys_user").val();
    if (super_user != "") {
        $("#userManage").removeClass("hide");
    } else {
        $("#userManage").addClass("hide");
    }

    if (sys_user != "") {
        $("#login").show();
        $("#logout").hide();
    } else {
        $("#login").hide();
        $("#logout").show();
    }
}