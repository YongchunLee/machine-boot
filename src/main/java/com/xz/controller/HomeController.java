package com.xz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

/**
 * @author lyc.
 * create at 2020 07 11 17:41
 */
@Controller
public class HomeController {
    @RequestMapping("/home")
    @ResponseBody
    public String home() {
        return "hi, baby!!!";
    }

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("now", new Date());
        return "index";
    }
}
