package com.xz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author lyc.
 * create at 2020 07 26 18:17
 */
@Controller
public class DashboardController {
    @RequestMapping("/dashboard")
    public String index() {
        return "dashboard";
    }
}
