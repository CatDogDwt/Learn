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