// js入口
$(function() {
    // initLoad();
})

/*
* 初始加载页面数据
*/
function initLoad() {
    var super_user = $("#sys_super_user").val();
    var sys_user = $("#sys_user").val();
    var activeTo = $("#activeTo").val();
    if (super_user != "") {
        $("#userManage").removeClass("hide");
    } else {
        $("#userManage").addClass("hide");
    }

    if (sys_user != "") {
        $.ajax({
            url: "/study/user/getUserId?userName=" + sys_user,
            success: function(id) {
                var str = "<a href='/study/user/userForm?id=" + id + "'>" + sys_user + "</a>用户已登录";
                $("#login span").html(str);
            }
        })
        $("#login").show();
        $("#logout").hide();
    } else {
        $("#login").hide();
        $("#logout").show();
    }

}

/**
 * 简洁提示
 *
 * @param info
 *            消息内容
 * @param type
 *            类型 BootstrapDialog.TYPE_**
 * @param time
 *            显示时间，默认为800
 */
function quickInfo(info, type, time) {
    type = type || "default";
    var quickInfo = new BootstrapDialog({
        message: info,
        closable: true
    });

    if (!time) {
        if (type == "error" || type == "warn") {
            time = 3000;
        } else {
            // time = 2000;
            time = 800;
        }
    }
    quickInfo.realize();
    quickInfo.getModalHeader().hide();
    quickInfo.getModalFooter().hide();
    if (type && type.length > 0) {
        quickInfo.getModalBody().addClass(type);
    }
    quickInfo.open();
    setTimeout(function() {
        quickInfo.close()
    }, time);
}