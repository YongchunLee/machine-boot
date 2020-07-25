package com.xz.util;

import java.util.List;

/**
 * @author lyc.
 * create at 2019 07 28 上午 11:02
 * bootsrapTable服务器模式返回数据
 * 属性名称 total,rows一定不能写错，与bootstrapTable中data对应
 */
public class PageData<T> {
    private long total;
    private List<T> rows;

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<T> getRows() {
        return rows;
    }

    public void setRows(List<T> rows) {
        this.rows = rows;
    }
}
