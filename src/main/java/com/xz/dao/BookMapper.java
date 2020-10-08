package com.xz.dao;

import com.xz.bean.Book;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @author lyc.
 * create at 2020 07 25 14:06
 */
public interface BookMapper {
    @Select("select id, ISBN, book_name, author, publish, category, edition, book_info, book_cover, remark from book where is_del='0' order by order_view")
    List<Book> selectBookData();

    @Select(" select id, ISBN, book_name, author, publish, category, " +
            "edition, book_info, book_cover,create_time, modify_time, remark " +
            "from book where id=#{id}")
    Book getBookData(Long id);

    List<Book> selectSearchData(String param);

    /**
     * 查询排序号
     * @param id
     * @return
     */
    @Select("select order_view from book where id=#{id}")
    Integer selectOrderSeq(Long id);

    /**
     * 通过序号查询id
     * @param id
     * @return
     */
    @Select("select id from book where order_view=#{seq}")
    Long selectByOrderSeq(Integer seq);

    /**
     * 根据id更改排序号
     * @param id
     * @param orderSeq
     * @return
     */
    @Update("update book set order_view=#{order_seq} where id=#{id}")
    Integer updateById(@Param("id") Long id,@Param("order_seq") Integer orderSeq);
}
