package com.xz.config;

import org.apache.ibatis.session.Configuration;
import org.mybatis.spring.boot.autoconfigure.ConfigurationCustomizer;
import org.springframework.context.annotation.Bean;

/**
 * @author lyc.
 * create at 2020 05 01 12:56
 */
@org.springframework.context.annotation.Configuration
public class MyBatisConfig {
    /**
     * 驼峰识别
     * @return
     */
    @Bean
    public ConfigurationCustomizer configurationCustomizer(){
        /*
        return new ConfigurationCustomizer(){

            @Override
            public void customize(Configuration configuration) {
                configuration.setMapUnderscoreToCamelCase(true);
            }
        };
         */
        return configuration -> configuration.setMapUnderscoreToCamelCase(true);
    }
}
