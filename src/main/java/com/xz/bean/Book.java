package com.xz.bean;

import java.util.Date;

public class Book {
    /**
     * id
     */
    private Long id;

    /**
     * ISBN
     */
    private String isbn;

    /**
     * 书名
     * book_name
     */
    private String bookName;

    /**
     * 作者
     * author
     */
    private String author;

    /**
     * 出版社
     * publish
     */
    private String publish;

    /**
     * 类别
     * category
     */
    private String category;

    /**
     * 版本号
     * edition
     */
    private String edition;

    /**
     * 书的简介
     * book_info
     */
    private String bookInfo;

    /**
     * 封面路径
     * book_cover
     */
    private String bookCover;

    /**
     * 创建时间
     * create_time
     */
    private Date createTime;

    /**
     * 修改时间
     * modify_time
     */
    private Date modifyTime;

    /**
     * 备注
     * remark
     */
    private String remark;

    /**
     * 用户量
     * userCount
     */
    private Integer userCount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn == null ? null : isbn.trim();
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName == null ? null : bookName.trim();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public String getPublish() {
        return publish;
    }

    public void setPublish(String publish) {
        this.publish = publish == null ? null : publish.trim();
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category == null ? null : category.trim();
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition == null ? null : edition.trim();
    }

    public String getBookInfo() {
        return bookInfo;
    }

    public void setBookInfo(String bookInfo) {
        this.bookInfo = bookInfo == null ? null : bookInfo.trim();
    }

    public String getBookCover() {
        return bookCover;
    }

    public void setBookCover(String bookCover) {
        this.bookCover = bookCover == null ? null : bookCover.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getUserCount() {
        return userCount;
    }

    public void setUserCount(Integer userCount) {
        this.userCount = userCount;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", isbn='" + isbn + '\'' +
                ", bookName='" + bookName + '\'' +
                ", author='" + author + '\'' +
                ", publish='" + publish + '\'' +
                ", category='" + category + '\'' +
                ", edition='" + edition + '\'' +
                ", bookInfo='" + bookInfo + '\'' +
                ", bookCover='" + bookCover + '\'' +
                ", createTime=" + createTime +
                ", modifyTime=" + modifyTime +
                ", remark='" + remark + '\'' +
                ", userCount=" + userCount +
                '}';
    }
}