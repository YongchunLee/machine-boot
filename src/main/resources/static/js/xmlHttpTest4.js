var xmlhttp;
if (window.XMLHttpRequest) {// code for all new browsers
    xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {// code for IE5 and IE6
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
// xmlhttp对象简单封装
function xmlhttpInit(method, url, data, callback) {
    if (method == "POST") {
        xmlhttp.open("POST",url);
        xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    } else if (method == "GET") {
        xmlhttp.open("GET",url);
        // xmlhttp.setRequestHeader('Content-type','text/xml');
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200 || xmlhttp.status == 0) {
                callback(xmlhttp.responseText)
            }
        }
    };
    xmlhttp.send(null);
}
function callback(data) {
    var html = "";
    html += "<table><tr><th>成员名</th><th>类型</th><th>说明</th></tr>";
    var dataO = JSON.parse(data);
    // console.log(Object.keys(dataO[0]));
    for (var i=0; i<dataO.length; i++) {
        html += "<tr>";
        html += "<td>" + dataO[i].who + "</td>";
        html += "<td>" + dataO[i].className + "</td>";
        html += "<td>" + dataO[i].what + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    var info = document.getElementById("info");
    info.innerHTML = html;
}

function callback1(data) {
    var html = "";
    html += "<table><tr><th>成员名</th><th>类型</th><th>说明</th></tr>";
    var dataO = JSON.parse(data);
    // console.log(Object.keys(dataO[0]));
    for (var i=0; i<dataO.length; i++) {
        html += "<tr>";
        html += "<td>" + dataO[i].who + "</td>";
        html += "<td>" + dataO[i].className + "</td>";
        html += "<td>" + dataO[i].what + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    var info = document.getElementById("info1");
    info.innerHTML = html;
}

function check() {
    var coun = document.getElementById("coun").value;
    if (/^\s*\d+$/.test(coun) && (coun >= 0 && coun <= 14)) {
        xmlhttpInit("GET", "/study/rest/xmlHttp/request6?coun=" + coun, null, callback);
    } else {
        alert("请输入正确的数字");
    }
}

function check1(tag, Page) {
    // var up = document.querySelector("#content2 #up");
    // var down = document.querySelector("#content2 #down");
    var start = parseInt(Page.start.innerHTML);
    var beginP = (start - 1) * Page.pageLength;
    if (tag == 1 && beginP == Page.pageLength) {
        Page.up.style.display = "none";
    }

    if (tag == 2 && (beginP + Page.pageLength * 2) >= Page.nums) {
        Page.down.style.display = "none";
    }
    if (tag == 2) {
        Page.up.style.display = "inline";
        Page.start.innerHTML = start + 1;
        xmlhttpInit("GET", "/study/rest/xmlHttp/request7?start=" + (beginP + Page.pageLength) +
            "&pageLength=" + Page.pageLength, null, callback1);
    }
    if (tag == 1) {
        Page.down.style.display = "inline";
        Page.start.innerHTML = start - 1;
        xmlhttpInit("GET", "/study/rest/xmlHttp/request7?start=" + (beginP - Page.pageLength) +
            "&pageLength=" + Page.pageLength, null, callback1);
    }
}