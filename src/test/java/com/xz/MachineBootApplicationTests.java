package com.xz;

import com.xz.dao.BookMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MachineBootApplicationTests {
    @Autowired
    BookMapper bookMapper;

	@Test
	public void contextLoads() {
//        bookMapper.updateById(1L, 10);
        System.out.println(bookMapper.selectByOrderSeq(1));
    }

}
