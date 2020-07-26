/*
book.js
 */
var contextPath = $("#contextPath").val()
var bookList = {
    dataUrl: contextPath + "/book/book_data",
    searchUrl: contextPath + "/book/search_data",
    userDataUrl: contextPath + "/book/user_book_data",
    delBookUrl: contextPath + "/book/del_book",
    addBookUrl: contextPath + "/book/add_book",
    delUserBookUrl: contextPath + "/book/del_user_book",
    addUserBookUrl: contextPath + "/book/add_user_book",
    bookFormUrl: contextPath + "/book/book_form",
    userBookFormUrl: contextPath + "/book/userBookForm",
    checkedData: [],  // 多选删除数据
    user: "",
    super_user: "",
}


bookList.loadTable = function(data) {
    var blankHTML = "<tr><td colspan='7' style='text-align: center;'>无数据</td></tr>";
    // if (bookList.super_user != "") {
    //     var blankHTML = "<tr><td colspan='9' style='text-align: center;'>无</td></tr>";
    // } else if (bookList.user != "" && bookList.super_user == "") {
    //     var blankHTML = "<tr><td colspan='8' style='text-align: center;'>无</td></tr>";
    // } else {
    //     var blankHTML = "<tr><td colspan='7' style='text-align: center;'>无</td></tr>";
    // }

    var $tbody = $("table#bookList tbody");
    $tbody.empty();
    if (data.length == 0) {
        $tbody.html(blankHTML);
    } else {
        $.each(data, function(i, val) {
            var $tr = $("<tr></tr>");
            // if (bookList.super_user != "") {
            //     $tr.append("<td><input class='is_del' type='checkbox' value='" + val.id + "' ></td>");
            // }
            $tr.append("<td>" + (i+1)  + "</td>");
            $tr.append("<td><a href='" + bookList.bookFormUrl + "?id=" + val.id + "' >" +  val.isbn  + "</a></td>");
            $tr.append("<td>" + val.bookName + "</td>");
            $tr.append("<td>" + (val.author==null || val.author=='' ? '——':val.author) + "</td>");
            $tr.append("<td>" + (val.publish==null || val.publish=='' ? '——':val.publish) + "</td>");
            $tr.append("<td>" + (val.category==null || val.category=='' ? '——':val.category) + "</td>");
            $tr.append("<td>" + (val.edition==null || val.edition=='' ? '——':val.edition) + "</td>");
            // if (bookList.user != "" && bookList.super_user == "") {
            //     var $button1 = $('<button value="'+ val.id +'" class="btn btn-primary">加入</button>');
            //     var $button2 = $('<button value="'+ val.id +'" class="btn btn-danger">移除</button>');
            //     var $td = $("<td></td>");
            //     if (val.userCount == 0) {
            //         $td.append($button1);
            //     } else {
            //         $td.append($button2);
            //     }
            //     $tr.append($td);
            //
            //     // 加入书架
            //     $button1.click(function() {
            //         bookList.joinIn($(this));
            //     })
            //
            //     // 单个删除
            //     $button2.click(function() {
            //         bookList.removeOut($(this));
            //     })
            // }
            // if (bookList.super_user != "") {
            //     $tr.append("<td>" + val.userCount + "</td>");
            // }
            if (i == 0) {
                $tbody.empty();
            }
            $tbody.append($tr);
        })
    }
}

bookList.loadUserTable = function(data) {
    var blankHTML = "<tr><td colspan='9' style='text-align: center;'>无</td></tr>";
    var $tbody = $("table#bookList tbody");
    $tbody.empty();
    if (data.length == 0) {
        $tbody.html(blankHTML);
    } else {
        $.each(data, function(i, val) {
            var $tr = $("<tr></tr>");
            $tr.append("<td><input class='is_del' type='checkbox' value='" + val.id + "' ></td>");
            $tr.append("<td>" + (i+1)  + "</td>");
            $tr.append("<td><a href='" + bookList.userBookFormUrl + "?id=" + val.id + "' target='_blank'>" +  val.book.isbn  + "</a></td>");
            $tr.append("<td>" + val.book.bookName + "</td>");
            $tr.append("<td>" + (val.book.author==null || val.book.author=='' ? '——':val.book.author) + "</td>");
            $tr.append("<td>" + (val.book.publish==null || val.book.publish=='' ? '——':val.book.publish) + "</td>");
            $tr.append("<td>" + (val.book.category==null || val.book.category=='' ? '——':val.book.category) + "</td>");
            $tr.append("<td>" + (val.book.edition==null || val.book.edition=='' ? '——':val.book.edition) + "</td>");

            var $button = $('<button value="'+ val.book.id +'" class="btn btn-danger">移除</button>');
            var $td = $("<td></td>");
            $td.append($button);
            $tr.append($td);
            // 单个删除
            $button.click(function() {
                bookList.removeOut($(this));
            })

            $tbody.append($tr);
        })
    }
}

bookList.searchData = function(dataUrl, callback) {
    $.ajax({
        url: dataUrl,
        success: function(data) {
            callback(data);
        }
    })
}

bookList.add = function() {
    var userData = {};
    userData[$("#isbn").attr("name")] = $("#isbn").val();
    userData[$("#bookName").attr("name")] = $("#bookName").val();
    userData[$("#author").attr("name")] = $("#author").val();
    userData[$("#publish").attr("name")] = $("#publish").val();
    userData[$("#category").attr("name")] = $("#category").val();
    userData[$("#edition").attr("name")] = $("#edition").val();
    userData[$("#bookInfo").attr("name")] = $("#bookInfo").val();
    userData[$("#remark").attr("name")] = $("#remark").val();

    $.ajax({
        url: bookList.addBookUrl,
        data: userData,
        type: 'POST',
        success: function(message) {
            if (message == "success") {
                $("#close1").click();
                bookList.searchData(bookList.dataUrl, bookList.loadTable);
                quickInfo("添加成功!");
            } else {
                $("#bookAdd .error").html("添加失败！");
            }
        },
        error: function() {
            $("#bookAdd .error").html("添加失败！");
        }
    })
}

// 图书删除
bookList.book_del = function() {
    $.ajax({
        url: bookList.delBookUrl,
        data: JSON.stringify(bookList.checkedData),
        type: 'POST',
        // 发送的数据格式
        contentType : 'application/json;charset=utf-8',
        success: function(message) {
            if (message == "success") {
                quickInfo("删除成功！");
                bookList.searchData(bookList.dataUrl, bookList.loadTable);
            } else {
                quickInfo("<span style='color: red'>删除失败！</span>", "error");
            }
        },
        error: function() {
            quickInfo("<span style='color: red'>删除失败！</span>", "error");
        }
    })
    $("#close2").click();
}

// 用户图书记录删除
bookList.book_user_del = function() {
    $.ajax({
        url: bookList.delUserBookUrl,
        data: JSON.stringify(bookList.checkedData),
        type: 'POST',
        // 发送的数据格式
        contentType : 'application/json;charset=utf-8',
        success: function(message) {
            if (message == "success") {
                quickInfo("批量移除成功！");
                bookList.searchData(bookList.userDataUrl, bookList.loadUserTable);
            } else {
                quickInfo("<span style='color: red'>批量移除失败！</span>", "error");
            }
        },
        error: function() {
            quickInfo("<span style='color: red'>批量移除失败！</span>", "error");
        }
    })
    $("#close2").click();
}



bookList.joinIn = function(element) {
    $.ajax({
        url: bookList.addUserBookUrl + "?id=" + element.val(),
        success: function() {
            quickInfo("加入成功！");
            element.removeClass("btn-primary").addClass("btn-danger").html("移除");
            element.unbind();
            element.click(function() {
                bookList.removeOut(element);
            })

        },
        error: function() {
            quickInfo("加入失败！");
        }
    })
}

bookList.removeOut = function(element) {
    $("#delBook").unbind();
    $("#delBook").click(function() {
        bookList.delBook(element);
    })
    $("#myModal3").modal("show");
}

bookList.delBook = function(element) {
    $.ajax({
        url: bookList.delUserBookUrl + "?id=" + element.val(),
        success: function() {
            quickInfo("移除成功！");
            element.removeClass("btn-danger").addClass("btn-primary").html("加入");
            element.unbind();
            element.click(function() {
                bookList.joinIn(element);
            })
            if ($("#show_store").is(":checked")) {
                bookList.searchData(bookList.userDataUrl, bookList.loadUserTable);
            }
        },
        error: function() {
            quickInfo("移除失败！");
        }
    })
    $("#close3").click();
}




function init_data() {
    if (bookList.user != "") {
        if (bookList.super_user == "") {
            $("#show_store").parent().removeClass("hide");
            $("#update_user_book").removeClass("hide");
        } else {
            $("#addModal").removeClass("hide");
            $("#delModel").removeClass("hide");
            $("#delAll").parent().removeClass("hide")
            $("#show_user_count").removeClass("hide");
        }
    }

    if ($("#showUser").val() == "true") {
        $("#show_store").click();
        bookList.searchData(bookList.userDataUrl, bookList.loadUserTable);
    } else {
        bookList.searchData(bookList.dataUrl, bookList.loadTable);
    }
}

function search_data() {
    var bookUrl = bookList.searchUrl + "?findall=" + $("#input-search").val()
    bookList.searchData(bookUrl, bookList.loadTable);
}

$(function() {
    bookList.searchData(bookList.dataUrl, bookList.loadTable);
    $("#search-data").click(function () {
        search_data()
    })
    $("#input-search").keydown(function(event) {
        var theEvent = window.event || event
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            search_data()
        }
    })

    // bookList.user = $("#sys_user").val();
    // bookList.super_user = $("#sys_super_user").val();
    // init_data();

    // $("#show_store").click(function() {
    //     var addElement = $("table#bookList tbody tr");
    //     if ($(this).is(":checked")) {
    //         $("#delModel").removeClass("hide");
    //         $("#delModel").html("多选移除");
    //         $("#delAll").parent().removeClass("hide");
    //         bookList.searchData(bookList.userDataUrl, bookList.loadUserTable);
    //
    //     } else {
    //         $("#delModel").addClass("hide");
    //         $("#delAll").prop("checked", false);
    //         $("#delAll").parent().addClass("hide");
    //
    //         bookList.searchData(bookList.dataUrl, bookList.loadTable);
    //     }
    // })
    //
    // // 点击全选
    // $("#delAll").click(function() {
    //     if ($(this).is(":checked")) {
    //         $("#bookList .is_del").prop("checked", true);
    //     } else {
    //         $("#bookList .is_del").prop("checked", false);
    //     }
    // })

    // // 多选删除
    // $("#delModel").click(function() {
    //     var checkedData = $("#bookList .is_del:checked");
    //     bookList.checkedData = [];
    //     if (checkedData.length == 0) {
    //         quickInfo("至少选择一项!");
    //         return;
    //     } else {
    //         checkedData.each(function () {
    //             bookList.checkedData.push($(this).val());
    //         });
    //         $("#myModal2").modal("show");
    //     }
    // })
    // $("#del").click(function() {
    //     if (bookList.user != "") {
    //         if (bookList.super_user != "") {
    //             bookList.book_del();
    //         } else {
    //             bookList.book_user_del();
    //         }
    //     }
    // })
    //
    // // 添加书籍，只有超级管理员才可以
    // if (bookList.super_user != "") {
    //     /**
    //      * 下面是进行插件初始化
    //      * 你只需传入相应的键值对
    //      * */
    //     $('#bookAdd').bootstrapValidator({
    //         message: 'This value is not valid',
    //         feedbackIcons: {/*输入框不同状态，显示图片的样式*/
    //             valid: 'glyphicon glyphicon-ok',
    //             invalid: 'glyphicon glyphicon-remove',
    //             validating: 'glyphicon glyphicon-refresh'
    //         },
    //         fields: {/*验证*/
    //             isbn: {/*键名和input name值对应*/
    //                 message: 'The ISBN is not valid',
    //                 validators: {
    //                     notEmpty: {/*非空提示*/
    //                         message: 'ISBN不能为空'
    //                     },
    //                     regexp: {/* 只需加此键值对 */
    //                         regexp: /^[0-9-]+$/,
    //                         message: '只能是数字和-.'
    //                     }
    //                 }
    //             },
    //             bookName: {/*键名和input name值对应*/
    //                 message: 'The bookName is not valid',
    //                 validators: {
    //                     notEmpty: {/*非空提示*/
    //                         message: '书名不能为空'
    //                     }
    //                 }
    //             }
    //         }
    //     })
    //
    //     $("#add").click(function() {
    //         $('#bookAdd').data('bootstrapValidator').validate();//启用验证
    //         var flag = $('#bookAdd').data('bootstrapValidator').isValid()//验证是否通过true/false
    //         if (flag) {
    //             bookList.add();
    //         }
    //     })
    // }

})






