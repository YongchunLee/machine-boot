/**
 * city
 */
var contextPath = $("#contextPath").val()
$(function() {
    initTable();

    //查询按钮事件
    $("#findall").keyup(function(event) {
        if (event != undefined) {
            if(event.keyCode != 13) {
                return;
            }
        }
        $('#world_city').bootstrapTable('refresh', {
            url: contextPath + '/city/server_data'
        });
    });
    $('#search_btn').click(function() {
        $('#world_city').bootstrapTable('refresh', {
            url: contextPath + '/city/server_data'
        });
    });

})

function initTable() {
    $('#world_city').bootstrapTable({
        url: contextPath + '/city/server_data',               //请求后台的URL（*）
        method: 'GET',                              //请求方式（*）
        dataType:'json',
        cache: false,                               //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        striped: true,                              //是否显示行间隔色
        sidePagination: "server",                   //分页方式：client客户端分页，server服务端分页（*）
        showColumns: true,                          //是否显示所有的列（选择显示的列）
        pagination:true,                            //是否显示分页（*）
        sortable: true,                             //是否启用排序
        sortOrder: "asc",                          //排序方式
        pageNumber:1,                               //初始化加载第一页，默认第一页
        pageSize: 20,                               //每页的记录行数（*）
        pageList: [10, 25, 50, 100],                //可供选择的每页的行数（*）
        uniqueId: "id",                             //每一行的唯一标识，一般为主键列
        search: false,                              //是否显示表格搜索
        showColumns: true,                          //是否显示所有的列（选择显示的列）
        showRefresh: true,                          //是否显示刷新按钮
        minimumCountColumns:2,                      //最少允许的列数
        clickToSelect: true,                        //是否启用点击选中行
        showToggle: true,                           //是否显示详细视图和列表视图的切换按钮
        cardView: false,                            //是否显示详细视图
        detailView: false,                          //是否显示父子表
        showExport: true,
        exportDataType: 'basic', // //导出表格方式（默认basic：只导出当前页的表格数据；all：导出所有数据；selected：导出选中的数据）
        exportTypes:[ 'csv', 'txt', 'doc', 'excel', 'xlsx', 'pdf'],  //导出文件类型
        /*
        默认值为 'limit' ,在默认情况下 传给服务端的参数为：offset,limit,sort
        设置为 ''  在这种情况下传给服务器的参数为：pageSize,pageNumber
         */
        // queryParamsType:'',
        // 得到查询的参数
        queryParams : function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            var temp = { //如果是在服务器端实现分页，limit、offset这两个参数是必须的
                limit : params.limit, // 每页显示数量
                offset : params.offset, // SQL语句起始索引
                // page: (params.offset / params.limit) + 1,   //当前页码
                sort: params.sort,      //排序列名
                sortOrder: params.order, //排位命令（desc，asc）
                findall: $("#findall").val()
            };
            return temp;
        },
        columns: [{
            field: 'id',
            title: '编号',
            sortable : true
        }, {
            field: 'name',
            title: '名称',
            sortable : true
        }, {
            field: 'countrycode',
            title: '城市编码',
            sortable : true
        }, {
            field: 'district',
            title: '地区',
            sortable : true
        }, {
            field: 'population',
            title: '人口',
            sortable : true
        }]
    });
}
