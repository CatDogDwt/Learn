$$
C
$$

简单的C程序一般具有以下形式：

```c

#include <stdio.h>//指令
/*指令是必不可少的，它包含了C标准输入输出库的相关信息，程序的可只想代码都在main函数中，这个函数代表主程序。*/
int main(void){//函数
    printf("To C, or not to C: that is a question\n");//语句
    return 0;
    /*
    有两个作用：
    一是让函数终止；
    二是程序终止时会向操作系统返回值0.
    */
}
```

- 编译和链接
  - 预处理

    首先预处理器会执行指令，预处理器会向程序中添加内容或者删除内容	

  - 编译

    然后进行编译，编译器会将程序翻译成机器指令(目标代码)

  - 链接

    链接器会把由编译器产生的目标代码和所需的其他附加代码(包括程序中的库函数)整合

- C程序依赖三个关键语言特性

  1. 指令(在编译前修改程序的编辑命令)

     在编译程序之前。预处理器会首先对指令进行编辑，并将指令内包含的内容添加到程序当中

     所有的指令都是以#开头的，指令默认只占一行。

  2. 函数(被命名的可执行代码块)

     函数分为两大类，一类是由程序员构建的函数，另一类是C语言提供的库函数

  3. 语句(程序运行时执行的命令)

- 每一个程序都应该包含程序名、编写日期、作者、程序的用途以及其他相关信息

- 变量和赋值

  临时存储数据的存储单元称为变量

  - 类型

    每一个变量都必须有一个类型，类型用来说明变量所存储的数据种类，数据类型会影响变量的存储方式以及所被允许的操作，数值类型还会限制变量所能存储的最大值与最小值，同时也决定了是否允许在小数点后出现数字

  - 声明

    <数据类型><变量名> = <初始值>

    使用变量之前必须对其声明

  - 赋值

    将初始值赋值给变量，这样的数值叫做常量

    当把包含小数点的常量赋值给float型变量时，应该在常量后加上f

    赋值运算的右侧可以是一个含有常量、变量和运算符的公式(在C语言中称为表达式)

  - 显示变量的值

    %f默认显示小数点后六位的值，%.xf显示小数点后x位的值

    ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/dweight.jpg)

    ```c
    //dweight.c
    #include <stdio.h>
    
    int main(void){
        
        int length = 12,height = 8,width = 10,volume,weight;
        
        volume = length*height*width;
        weight = (volume+165)/166;
        //在C语言中，如果两个整数相除，那么结果会被截短，小数点后的所有数字都会丢失，结果会向下取整
        /*向下取整960/166=5.783≈5 向上取整5.783≈6*/
        printf("箱子的空间重量为：%d",weight);
        
        return 0;
    }
    ```
    
    ```c
    //dweight2.c
    #include <stdio.h>
    
    int main(void){
        int length,height,width,volume,weight;
        
        printf("请输入行李高：");
        scanf("%d",&height);
        printf("请输入行李宽：");
        scanf("%d",&width);
        printf("请输入行李长");
        scanf("%d",&length);
        
        printf("箱子的空间重量为：%d",weight = (length*height*width+165)/166);
        
        return 0;
    }
    ```

- 定义常量的名字

  可以采用宏定义的方式给常量命名：

  ```c
  #define N 166//这里的#define是预处理指令，
  ```

  当对程序进行编译时，预处理会把每一个宏替换为其表示的值

  ```c
  weight = (volume + N - 1) / N;
  ```

  👇

  ```c
  weight = (volume + 166 - 1) / 166;
  ```

  还可以定义宏表达式

  ```c
  #define N (1.0f / 3.14159f)
  ```

  当宏包含运算符时，必须用括号将表达式括起来

  ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/celsius.jpg)

  ```c
  //celsius.c
  #include <stdio.h>
  
  #define FREEZING_PT 32.0f
  #define SCALE_FACTOR (5.0f / 9.0f)
  
  int main(void){
      float fahrenheit,celsius;
      
      printf("请输入华氏温度：");
      scanf("%f",&fahrenheit);
      
      celsius = (fahrenheit - FREEZING_PT) * SCALE_FACTOR;
      
      printf("转换成摄氏温度为：%.1f\n",celsius);
      
      return 0;
  }
  ```

- 标识符

  在C语言中，标识符可以含有字母、数字、下划线，但是必须以字母或者下划线开头。

  合法标识符示例：

  ​								times10	get_next_char	done	_ok

  不合法的标识符示例：

  ​								10times	get-next-char

- 大小写

  C语言是区分大小写的，例如下列标识符是完全不同的：

  ​							job	joB	jOb	Job jOB	JOB

- 关键字

  ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/keyword.jpg)

