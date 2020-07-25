package com.xz.dao;

import com.xz.bean.City;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.session.RowBounds;

import java.util.List;
import java.util.Map;

/**
 * @author lyc.
 * create at 2020 07 25 23:14
 */
public interface CityMapper {
    @Select("select ID, Name, CountryCode, District, Population from city where ID = #{id}")
    City selectById(String id);

    int deleteByPrimaryKey(Integer id);

    int insert(City record);

    List<City> selectAll();

    List<City> selectAll(Map<String, String> params, RowBounds rowBounds);

    List<City> selectAll(Map<String, String> params);

    int updateByPrimaryKey(City record);

    int selectTotal(Map<String, String> params);
}
