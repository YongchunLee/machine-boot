package com.xz.service.impl;

import com.xz.bean.City;
import com.xz.dao.CityMapper;
import com.xz.service.CityService;
import com.xz.util.PageData;
import org.apache.ibatis.session.RowBounds;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author lyc.
 * create at 2020 07 25 23:10
 */
@Service
public class CityServiceImpl implements CityService {
    @Autowired
    private CityMapper cityMapper;

    @Override
    public City getCityName(String id) {
        return cityMapper.selectById(id);
    }

    @Override
    public PageData<City> getTableData(Map<String, String> params) {
        List<City> cities;
        if (params.get("offset") == null || params.get("limit") == null) {
            cities = cityMapper.selectAll(params);
        } else {
            Integer offset = Integer.parseInt(params.get("offset"));
            Integer limit = Integer.parseInt(params.get("limit"));
            cities = cityMapper.selectAll(params, new RowBounds(offset, limit));
        }

        int total = cityMapper.selectTotal(params);
        PageData<City> page = new PageData<>();
        page.setTotal(total);
        page.setRows(cities);

        return page;
    }

    @Override
    public List<City> getAllData() {
        return cityMapper.selectAll();
    }
}
