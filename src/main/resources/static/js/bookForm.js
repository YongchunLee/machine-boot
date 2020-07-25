/*
nookForm.js
 */

var contextPath = $("#contextPath").val()
var bookForm = {
    updateBookUrl: contextPath + "/book/updateBook",
    updateUserBookUrl: contextPath + "/book/updateUserBook",


    returnTo: function() {
        window.location.href=contextPath + "/book";
    }

}