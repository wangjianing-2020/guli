package com.atguigu.demo.excel;

import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;

@Data
public class DemoData {

    //设置excel表头
    @ExcelProperty(value = "学生编号",index = 0)
    private Integer son;
    @ExcelProperty(value = "学生姓名",index = 1)
    private String sname;

}
