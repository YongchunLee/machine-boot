package com.xz.service;

import com.xz.bean.City;
import com.xz.util.PageData;

import java.util.List;
import java.util.Map;

/**
 * @author lyc.
 * create at 2020 07 25 23:06
 */
public interface CityService {
    City getCityName(String id);

    /**
     * 返回city表分页查询数据  服务器端分页
     * @param params
     * @return
     */
    PageData<City> getTableData(Map<String, String> params);

    /**
     * 客户端分页
     * @return
     */
    List<City> getAllData();
}
