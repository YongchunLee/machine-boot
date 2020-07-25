package com.xz.service;

import com.xz.bean.Book;

import java.util.List;

/**
 * @author lyc.
 * create at 2020 07 25 14:02
 */
public interface BookService {
    /**
     * 查询书库中所有书籍
     * @return
     */
    List<Book> selectBookData();

    Book getBookData(Long id);
}
