package com.xz.service.impl;

import com.xz.bean.Book;
import com.xz.dao.BookMapper;
import com.xz.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public List<Book> getSearchData(String param) {
        return bookMapper.selectSearchData(param);
    }

    @Override
    public Book getBookData(Long id) {
        return bookMapper.getBookData(id);
    }

    @Transactional
    @Override
    public void moveup(Long id1, Long id2) {
        Integer orderSeq1 = bookMapper.selectOrderSeq(id1);
        Integer orderSeq2 = bookMapper.selectOrderSeq(id2);
        bookMapper.updateById(id1, -1);
        bookMapper.updateById(id2, orderSeq1);
        bookMapper.updateById(id1, orderSeq2);
    }
}
