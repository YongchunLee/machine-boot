package com.xz.controller;

import com.xz.bean.City;
import com.xz.service.CityService;
import com.xz.util.PageData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

/**
 * 浏览世界城市
 * @author lyc.
 * create at 2020 07 25 22:53
 */
@Controller
public class CityController {
    @Autowired
    private CityService cityService;

    @RequestMapping("/city")
    public String index() {
        return "city";
    }

    @RequestMapping("/city/getcityname")
    public ModelAndView hello(ModelAndView mv, @RequestParam String id){
        City city = cityService.getCityName(id);
        mv.addObject("cityname",city.getName());
        mv.setViewName("cityname");
        return mv;
    }

    /**
     * city 世界城市
     * 返回所有城市数据 服务器分页
     * @return
     */
    @RequestMapping("/city/server_data")
    @ResponseBody
    public PageData<City> selectServerData(@RequestParam Map<String, String> params) {
        return cityService.getTableData(params);
    }

    /**
     * city 世界城市
     * 返回所有城市数据 客户端分页
     * @return
     */
    @RequestMapping("/city/client_data")
    @ResponseBody
    public List<City> selectClientData(@RequestParam Map<String, String> params) {
        return cityService.getAllData();
    }
}
