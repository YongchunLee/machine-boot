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

    @RequestMapping("/book/book_form")
    public String bookForm(@RequestParam Long id, Model model) {
        Book book = bookService.getBookData(id);
        model.addAttribute("book", book);
        return "bookForm";
    }
}
