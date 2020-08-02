package com.xz.controller;

import com.xz.bean.Book;
import com.xz.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

/**
 * @author lyc.
 * create at 2020 07 11 17:41
 */
@Controller
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping("/book")
    public String index() {
        return "book";
    }

    /**
     * 书库管理
     * 所有图书数据
     * @return
     */
    @RequestMapping("/book/book_data")
    @ResponseBody
    public List<Book> selectBookData() {
        return bookService.selectBookData();
    }

    /**
     * 书库管理
     * 搜索图书数据
     * @return
     */
    @RequestMapping("/book/search_data")
    @ResponseBody
    public List<Book> searchBookData(@RequestParam String findall) {
        return bookService.getSearchData(findall);
    }

    @RequestMapping("/book/book_form")
    public String bookForm(@RequestParam Long id, Model model) {
        Book book = bookService.getBookData(id);
        model.addAttribute("book", book);
        return "bookForm";
    }

    @RequestMapping("/book/move_data")
    @ResponseBody
    public String moveData(@RequestParam Long moveId1, @RequestParam Long moveId2) {
        bookService.moveup(moveId1, moveId2);
        return "ok";
    }
}
