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

    /**
     * 搜索书籍
     * @param param
     * @return
     */
    List<Book> getSearchData(String param);

    Book getBookData(Long id);
}
