package com.xz.service.impl;

import com.xz.bean.Book;
import com.xz.dao.BookMapper;
import com.xz.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author lyc.
 * create at 2020 07 25 14:05
 */
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookMapper bookMapper;

    @Override
    public List<Book> selectBookData() {
        return bookMapper.selectBookData();
    }

    @Override
    public Book getBookData(Long id) {
        return bookMapper.getBookData(id);
    }
}
