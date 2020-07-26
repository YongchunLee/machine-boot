package com.xz.dao;

import com.xz.bean.Book;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author lyc.
 * create at 2020 07 25 14:06
 */
public interface BookMapper {
    @Select("select id, ISBN, book_name, author, publish, category, edition, book_info, book_cover,user_count from book where is_del='0'")
    List<Book> selectBookData();

    @Select(" select id, ISBN, book_name, author, publish, category, " +
            "edition, book_info, book_cover,create_time, modify_time, remark " +
            "from book where id=#{id}")
    Book getBookData(Long id);

    List<Book> selectSearchData(String param);
}
