## C#语言入门详解笔记 [Timothy Liu]

#### 一、001

1. ###### C#语言开发环境搭建 编译器下载 https://visualstudio.microsoft.com

2. ###### 安装.net core SDK https://dotnet.microsoft.com/  建议初学者安装.net core 3.1 

   - 在cmd中输入 .net --version 查看当前安装的.net版本
   - 将当前行复制粘贴到下一行 ctrl+e+v

#### 二、002

#### 三、003

1. ###### 类 class  :  构成程序的主体  与  名称空间 namespace  :   以树形结构组织类(和其他类型)

   ```C#
   using System;/*添加名称空间引用*/
   
   namespace HelloWorld /*名称空间 名称默认和创建project的时候是一样的*/
   {
       internal class Program /*类*/
       {
           static void Main(string[] args)
           {
               /*console也是一个类  writeling是console类中的一个方法*/
               Console.WriteLine("Hello World!");
           }
       }
   }
   /*如果不引用 System 则编译器无法识别使用console类 所以想使用类 首先要引用当前需要使用的类所被包含的名称空间*/
   ```

   - 查找类所属名称空间的方法：
     1. 通过help viewer 搜索
     2. 通过编译器智能提示添加

2. ###### 类库 Assembly 的引用是使用名称空间的物理基础：

   - 通过

- ###### 常见错误：

  1. 引用不同名称空间太多导致类的冲突

#### 四、004

五、005

六、006

七、007

八、008

九、009

十、010

十一、011

十二、012

十三、013

十四、014

十五、015

十六、016

十七、017

十八、018

十九、019

二十、020

二十一、021

二十二、022

二十三、023

二十四、024

二十五、025

二十六、026

二十七、027

二十八、028

二十九、029

三十、030