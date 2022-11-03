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

- ###### 类型 Type

  - **类型又名数据类型 是数据在内存中存储的型号**
    - 小内存容纳大尺寸数据会丢失精确度、发生错误 、大内存容纳小尺寸数据会造成浪费
  - **stack 栈 和 Heap 堆**
    - stack overflow

- ###### C#的类型系统

  - **C#的五大数据类型**

    ![image-20221103141937402](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211031419535.png)

- ###### 变量、对象与内存

  - **什么是变量**：变量表示了存储位置，每个变量都有一个类型 以决定什么样的值能够存入变量

    ​						变量=以变量名所对应的内存地址为起点、以其数据类型所要求的存储空间为长度的一块内存区域

  - **变量的声明**：有效的修饰符组合   类型   变量名   初始化器

  ```C#
  			  public static   int  Amount   = 0
  ```

  - **七种变量**：静态变量、实例变量(成员变量，字段)、数组元素、值参数、引用参数、输出参数、局部变量

  ```C#
  namespace TypelnCSharp
  {
      internal class Program
      {
          static void Main(string[] args)
          {
              //静态变量
              Student.Amount();
              //实例变量(成员变量，字段)
              Student stu = new Student();
              stu.Age=10;
              stu.Name = "学生";
              //数组元素
              int[] array = new int[1];
              array[0] = 1;
              //局部变量
              int x;
  
          }
      }
  
      class Student
      {
          //静态变量
          public static int Amount()
          {
              int x=0;
              return x;
          }
          //实例变量(成员变量，字段)
          public int Age;
          public string Name;
          //值参数
          public double Add(double a,double b)
          {
              return a + b;   
          }
          //引用参数
          public double Add(ref double a, ref double b)
          {
              return a + b;
          }
          //输出参数
          public double Add2(out double a,out double b)
          {
              a = 0;
              b = 0;
              return a + b;
          }
      }
  }
  ```

  - **引用类型的变量与实例**：引用类型变量里存储的数据是对象的内存地址

  - **局部变量是在stack上分配内存**

  - **常量 const** xxx

  - **装箱与拆箱**

    ```C#
    //装箱：将栈上的值类型的值封装成一个object类型的实例到堆上
    int x = 100;
    object obj = x;//复制变量x的值到某块内存空间 再将这块内存空间的地址存入obj变量所在的内存空间
    //拆箱：将堆上object类型的实例里的值按照要求拆成目标数据类型 存储到栈中
    int y = (int)obj;
    Console.WriteLine(y);
    ```

- ###### 注意：

  1. 如果想知道是什么类型 可以按F12观察跳转
  2. 值类型没有实例

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