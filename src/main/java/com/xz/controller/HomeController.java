package com.xz.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping("/home")
    @ResponseBody
    public String home() {
        log.info("ok");
        return "hi, baby!!!";
    }

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("now", new Date());
        return "index";
    }
}
