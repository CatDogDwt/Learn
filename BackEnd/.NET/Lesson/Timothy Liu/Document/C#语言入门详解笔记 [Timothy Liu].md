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

   - **查找类所属名称空间的方法：**
     1. 通过help viewer 搜索
     2. 通过编译器智能提示添加

2. ###### 类库 Assembly 的引用是使用名称空间的物理基础：

   ![image-20221102095555403](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211020955694.png)

   - **黑盒引用 无源代码**

     1. 引用第三方DLL

        ![image-20221102095434822](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211020954630.png)

     2. 引用系统自带DLL

        ![image-20221102095457457](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211020954529.png)

     3. NuGet引用

        - 有时需要手动引用大量类库 这是非常麻烦同时非常危险的 可以通过NuGet引用其他作者编写好的类库

          ![image-20221102100101648](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211021001778.png)

   - **白盒引用 有源代码**

     - 项目的重用：一个项目可以被多个解决方案包含
     - 尽量追求 高内聚 低耦合

     1. 引用其他人编写的本地类库

        ![image-20221102102731942](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211021039318.png)

     2. 引用自己编写的本地类库

        ![image-20221102103901782](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211021039865.png)

- ###### 常见错误：


1. 引用不同名称空间太多导致类的冲突

#### 四、004

1. ###### 类 class 是现实世界事物的抽象模型

   - **类是对现实世界事物进行抽象所得的结果 事物包括“物质”（实体）和“运动”（逻辑）**
   - **建模是一个去伪存真、由表及里的过程**

2. ###### 类与对象的关系

   - **对象也叫实例，是类经过实例化之后得到的内存中的实体**

   - **依照类 我们可以创建对象 这就是 实例化**

   - **使用new操作符创建对象的实例**

     ```c#
     //创建类的实例 
     new Form();//构造器：（）：表示form的实例在内存中生成之后 要用什么样的方法去对它初始化
     (new Form()).ShowDialog();  
     ```

   - **引用变量与实例的关系**

     ```C#
     //声明引用变量并引用实例
     Form myform = new Form();
     myform.Text = "My dialog";
     myform.ShowDialog();
     
     //一个引用变量引用多个实例
     Form myform1;
     Form myform2;
     myform1 = new Form();
     myform2 = myform1;
     ```

3. ###### 类的三大成员

   - **属性 property      存储数据 组合起来表示类或对象当前的状态**  模型类或对象重在属性

   - **方法 method        类或对象能做什么** 							 		         工具类或对象重在方法

     - 方法的定义和调用

       ```C#
       using System;
       
       namespace MyExample
       {
           internal class Program
           {
               static void Main(string[] args)
               {
                   //函数(方法)的调用
                   Calculator calculator = new Calculator();
                   Console.WriteLine(calculator.Add(1, 2));
               }
           }
           class Calculator
           {
               //函数(方法)的定义
               public int Add(int a,int b)
               {
                   return a + b;
               }
           }
       }
       ```

       

   - **事件 event            类或对象通知其他类或对象的机制 C#特有**           通知类或对象重在事件

4. ###### **静态成员** **static**      **实例成员**  

   - **静态成员在语义上表示他是类的成员**
   - **实例成员在语义上表示他是对象的成品**
   - **绑定指的是编译器如果把一个成员与类或对象关联起来**
   - **成员访问操作符” . “**

- ###### 注意

  1. 在现实中常讨论 “类与对象”，在程序中常讨论 “类与实例”
  1. 方法的命名应该是一个动词或动词短语

#### 五、005

1. ###### 构成C#语言的基本元素   在MSDN文档查看详细内容

   ![image-20221102131200806](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211021312019.png)

#### 六、006

#### 七、007

#### 八、008

#### 九、009

#### 十、010

#### 十一、011

#### 十二、012

#### 十三、013

#### 十四、014

#### 十五、015

#### 十六、016

#### 十七、017

#### 十八、018

#### 十九、019

#### 二十、020

#### 二十一、021

#### 二十二、022

#### 二十三、023

#### 二十四、024

#### 二十五、025

#### 二十六、026

#### 二十七、027

#### 二十八、028

#### 二十九、029

#### 三十、030