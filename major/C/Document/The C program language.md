$$
C
$$

#### 第二章

##### 简单的C程序一般具有以下形式：

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

- ##### 编译和链接
  
  - 预处理
  
    首先预处理器会执行指令，预处理器会向程序中添加内容或者删除内容	
  
  - 编译
  
    然后进行编译，编译器会将程序翻译成机器指令(目标代码)
  
  - 链接
  
    链接器会把由编译器产生的目标代码和所需的其他附加代码(包括程序中的库函数)整合
  
- ##### C程序依赖三个关键语言特性

  1. 指令(在编译前修改程序的编辑命令)

     在编译程序之前。预处理器会首先对指令进行编辑，并将指令内包含的内容添加到程序当中

     所有的指令都是以#开头的，指令默认只占一行。

  2. 函数(被命名的可执行代码块)

     函数分为两大类，一类是由程序员构建的函数，另一类是C语言提供的库函数

  3. 语句(程序运行时执行的命令)

- ##### 每一个程序都应该包含程序名、编写日期、作者、程序的用途以及其他相关信息

- ##### 变量和赋值

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

- ##### 定义常量的名字

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

  

- ##### 标识符

  在C语言中，标识符可以含有字母、数字、下划线，但是必须以字母或者下划线开头。

  合法标识符示例：

  ​								times10	get_next_char	done	_ok

  不合法的标识符示例：

  ​								10times	get-next-char

- ##### 大小写

  C语言是区分大小写的，例如下列标识符是完全不同的：

  ​							job	joB	jOb	Job jOB	JOB

- ##### 关键字

  ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/keyword.jpg)



#### 第三章

- ##### 转换说明

  转换说明可以用%m.pX格式或%-m.pX格式，这里的m和p都是整数常量，而X是字母，m和p都是可选的

- ##### 最小字段宽度

  m指定了要显示的最少字符数量。如果要显示的数值所需的字符数少于m，那么值在字段内是右对齐的

  ###### 例如：转换说明%4d将以 *“空格123”* 的形式显示数 *“123”*

  如果要显示的值所需的字符数多于m,那么字段宽度会自动扩展为所需尺寸

  ###### 例如：转换说明%4d将以 *“12345”* 的形式显示 *“12345”*

  在m前放上一个负号会导致左对齐

  ###### 例如：转换说明%4d将以 *“123空格”* 的形式显示 *“123”*

- ##### 精度

  - d 表示十进制(基数为10)的整数。p指明了待显示的数字的最少个数(必要时在数前面加上额外的零)；如果省略p，则默认值为1

  - e 表示指数(科学计数法)形式的浮点数。p指明了小数点后应该出现的数字个数(默认值为6).如果p为0，则不显示小数点

    ###### e+002	10的2次方		e-1	10的负一次方

  - f 表示“定点十进制”形式的浮点数，没有指数。p的含义与在说明符e中的一样。

  - g 表示指数形式或者定点十进制形式的浮点数，形式的选择根据数的大小确定。p说明可以显示的有效数字(没有小数点后的数字)的最大数量。与转换说明符f不同，g的转换不会显示尾随的0，如果要显示的值后没有小数部分，g就不会显示小数点。编写程序时无法预知数的大小或者数值变化范围很大的情况下，推荐使用说明符g。在用于显示大小适中的数时，说明符g采用定点十进制形式，在显示非常大或非常小的数时，说明符g会转换成指数形式以便减少所需的字符数。

```c
//tprintf.c

#include <stdio.h>

int main(void){
    
    int i = 40;
    float x = 839.21f;
    
    printf("|%d|%5d|%-5d|%5.3d|\n",i,i,i,i);
    printf("|%10.3f|%10.3e|%-10g|\n",x,x,x);
    
    return 0;
}
```

![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/tprintf.jpg)

- ##### scanf函数的工作方法

  scanf函数本质上是一种模式匹配函数，试图把输入的字符与转换说明相匹配，如果读入数据项成功，那么scanf函数会继续处理格式串剩余部分，如果某一项读入失败，那么scanf函数将不在查看格式串剩余部分(或者余下的输入数据)而立即返回。

  当scanf函数读入整数时，scanf函数首先寻找正号或者负号(可选)，然后读入数字知道一个非数字时停止

  当scanf函数读入浮点数时，scanf函数首先寻找正负号(可选)，然后是一串数字(可能含有小数点),在后是一个指数(可选)，指数由字母e(或者E)、可选的符号和一个或多个数字构成，在用于scanf函数时，转换说明%e、%f、%g可以互换，他们在识别浮点数方面遵循相同的规则。

  当scanf函数遇到一个不可能属于当前项的字符时，他会把字符放回到缓冲区中，留给下一次函数调用。
  
  ```c
  //addfrac.c
  
  #include <stdio.h>
  
  int main(void){
  
      int mo1,de1,mo2,de2,remo,rede;
  
      printf("请输入第一个分数：");
      scanf("%d/%d",&mo1,&de1);
      printf("请输入第二个分数：");
      scanf("%d/%d",&mo2,&de2);
  
      remo = mo1*de2 + mo2*de1;
      rede = de2*de1;
  
      printf("最后结果为：%d/%d",remo,rede);
  
      return 0;
  }
  ```
  
  ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/QA.jpg)

#### 第四章

- ##### 表达式

  表达式是表示如何计算值的公式，最简单的表达式是常量和变量，复杂的表达式将运算符用于操作数(操作数自身就是表达式)。

  例如在表达式a+(b*c)中，运算符+用于操作数a和(b\*c)，而这两者自身又是表达式。

  运算符是构建表达式的基本工具。

- ##### 算术运算符

  加法类运算符和乘法类运算符都属于二元运算符(需要两个操作数)一元运算符只需要一个操作数。

  当把int型操作数和float型操作数混合在一起时，运算结果是float型的。

  - ###### 运算符/和运算符%需要注意以下几点
    
    - 当两个操作数都是整数时，运算符/会丢掉分数部分来截取结果，例如1/2的结果不是0.5，而是0。
    - 运算符%要求操作数为整数
    - 把零用作/或%的右操作数会导致未定义的行为
    - 当运算符/和运算符%用于负操作数时，其结果与具体实现有关【C99中，其结果总是向下取整】

- ##### 运算符的优先级和结合性

  当两个具有相同优先级的运算符和同一个操作数相邻时，需要注意结合性
  
  ![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/operator.jpg)

![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/upc.jpg)

```c
//upc.c
#include <stdio.h>

int main(void){

    int n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,first_sum,second_sum,total;

    printf("输入第一位数字：");
    scanf("%1d",&n1);
    printf("输入第一组五位数字：");
    scanf("%1d%1d%1d%1d%1d",&n2,&n3,&n4,&n5,&n6);
    printf("输入第二组五位数字：");
    scanf("%1d%1d%1d%1d%1d",&n7,&n8,&n9,&n10,&n11);

    first_sum = n1+n3+n5+n7+n9+n11;
    second_sum = n2+n4+n6+n8+n10;
    total = first_sum*3+second_sum;

	printf("检验位：%d\n",9-((total-1)%10));

    return 0;
}
```

- ##### 左值

  赋值运算符要求他的操作数必须为左值。左值表示存储在计算机内存中的对象，而不是常量或计算的结果变量是左值，像10或 2*i 这样的表达式则不是左值。

- ##### 自增自减运算符

  【i++】【i--】后缀自增自减，i 将在下一条语句执行前自增。

  - ##### 未定义的行为

    ```c
    int i = 2;
    int j = i * i++;
    ```

    一般情况是：

    1. 取出第二个操作数( i 的原始值)，然后i自增，
    2. 取出第一个操作数( i 的新值)。
    3. i 的原始值和新值相乘，结果为6。

    取出意味着从内存中获取变量的值，，变量的后续变化不会影响已取出的值，因为已取出的值通常存储在cpu的寄存器中。

- ##### 深入理解C语言-----副作用（Side Effect）和顺序点（Sequence Point）

  先看几个概念：

  - 引用透明：如果一个表达式（或子表达式）只计算出值而不改变环境，我们就说它是引用透明的，这种表达式早算晚算对其他计算没有影响（不改变计算的环境。当然， 它的值可能受到其他计算的影响）。比如：(a+b)*(c+d)，无论先计算乘号两边都可以


  - 副作用：如果一个表达式不仅算出一个值，还修改了环境，就说这个表达式有副作用（因为它多做了额外的事）。比如：a++ ，那么，多个副作用之间的发生顺序是怎样的？

    C 标准规定代码执行过程中的某些时刻是Sequence Point，当到达一个Sequence Point时，在此之前的Side Effect 必须全部作用完毕，在此之后的Side Effect 必须一个都没发。至于两个Sequence Point之间的多个Side Effect 哪个先发生哪个后发生则没有规定，编译器可以任意选择各Side Effect 的作用顺序。

    解释一下就是，在目标的代码里，对同一元素的多次访问（内存的访问）必然通过几段独立代码完成。现代计算机的计算都在寄存器里做，顺序点的作用就是确保在某个时刻这些改变必须反应到随后对同一存储位置的访问中。


  看看常见顺序点的位置：

  - 每个完整表达式结束时。完整表达式包括变量初始化表达式，表达式语句，return 语句的表达式，以及条件、循环和 switch 语句的控制表达式（for 头部有三个控制表达式）

  - 运算符 &&、||、?: 和逗号运算符的第一个运算对象计算之后； 

  - 函数调用中对所有实际参数和函数名表达式（需要调用的函数也可能通过表达式描述）的求值完成之后（进入函数体之前）。 

  -   在一个完整的声明末尾是Sequence Point，所谓完整的声明是指这个声明不是另外一个声明的一部分。

    比如声明int a[10], b[20];，在a[10]末尾是Sequence Point，在b[20]末尾也是。

  -   像printf 、scanf这种带转换说明的输入/ 输出库函数，在处理完每一个转换说明相关的输入/ 输出操作时是一个SequencePoint。库函数bsearch和qsort在查找和排序过程中的每一步比较或移动操作之间是一个Sequence Point。

  ###### 详见Document下的expression2009.pdf

#### 第五章

- ##### 逻辑表达式

  在C语言中，像 i < j 这样的比较运算可以产生整数  0 (假)  或  1(真) 。

  表达式 i<j<k 等价于 (i<j)<k，表达式会先计算 i<j的值，然后将结果（如果为真，结果为1，相反，结果为0）与K进行比较。

- ##### 逻辑运算符

  ###### 逻辑非  ！  逻辑与  &&  逻辑或  ||

  逻辑运算符将任何非零值操作数作为真值来处理，同时将任何零值操作数作为假值来处理

  ###### 逻辑运算符操作顺序

  - 如果表达式的值为0，那么逻辑非表达式的值为1。
  - 如果表达式1和表达式2的值都是非零值，那么表达式1 逻辑与 表达式2的结果为1。
  - 如果表达式1和表达式2的值中任意一个是（或者两者都是）非零值，那么表达式1 逻辑或 表达式2的结果为1。

  ###### 短路

  当表达式进行逻辑与运算时，只要有一个为假，总的表达式就为假，只有当所有为真时，表达式才为真。

  当表达式进行逻辑或运算时，只要有一个为真，总的表达式就为真，只有当所有为假时，表达式才为假。

  这些运算符首先计算左操作数的值，如果表达式的值可以被左操作数推导出来，那么将不计算右表达式的值

- ##### if语句

  级联式if语句不是新的语句类型，他仅仅是普通的if语句，只是碰巧有另外一条if语句作为else子句。

![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/broker.jpg)

```c
//broker.c

#include <stio.h>

int main(void){
    
    float commission,value;
    
    printf("录入交易额：");
    scanf("%f",&value);
    
    if(value < 2500.00f)
        commission = 30.00f + .017f*value;
    else if(value < 6250.00f)
        commission = 56.00f + .0066f*value;
    else if(value < 20000.00f)
        commission = 76.00f + .0034f*value;
    else if(value < 50000.00f)
        commission = 100.00f + .0022f*value;
    else if(value < 500000.00f)
        commission = 155.00f + .0011f*value;
    else
        commission = 255.00f + .0009f*value;
    
    if(commission = 39.00f)
        commission = 39.00f;
    
    printf("佣金为：%.2f\n",commission);
    
    return 0;
}
```

- ##### 悬空else问题

  C语言遵循的规则是else子句应该属于离他最近的且还未与其他else匹配的if语句

- ##### 条件表达式

  ###### 【条件表达式】 表达式1 ？表达式2：表达式3

  表达式1和表达式2表达式3可以是任何类型的表达式，条件运算符是C运算符中唯一一个要求三个操作数的运算符，因此把他称为三元运算符。

  条件表达式的求值步骤：首先计算出表达式1的值，如果为真值，那么计算表达式2的值，结束运算。

  当int型和float型的值混合在一个条件表达式中时，表达式的类型为float，如果int型变量的值为真，那么int型变量转化为floa型后的值就是表达式的值。

  ###### 许多程序猿会将类似的

  ```c
  if(i>j)
      return j;
  else
      return i;
  ```

  ###### 替换为

  ```c
  return i > j ? j : i;
  ```

- ##### switch语句

  ###### 【switch语句】switch (控制表达式) {

  ###### 							case 常量表达式 ：语句

  ###### 							...

  ###### 							case 常量表达式 ：语句

  ###### 							default：语句				

  ###### 						}

  - ##### 控制表达式	

    switch后边必须跟着由圆括号括起来的整形表达式。C语言把字符当成整数来处理，因此在switch语句中可以对字符进行判定。但是，不能用浮点数和字符串。

  - ##### 分支标号

    case 常量表达式 ：

  - ##### 常量表达式

    不能包含变量和函数调用，分支标号中的常量表达式的值必须是整数（字符也可以）。

![](https://cdn.jsdelivr.net/gh/CatDogDwt/Image-Hosting-Services/img/date.jpg)

```c
//date.c

#include <stdio.h>

int main(void){
    
    int month,day,year;
    
    printf("请输入日期(mm/dd/yy):");
    scanf("%d/%d/%d",&month,&day,&year);
    
    printf("Dated this %d",day);
    switch(day){
            case 1: case 21: case 31:
                printf("st");break;
            case 2: case 22:
                printf("nd");break;
            case 3: case 23:
                printf("rd");break;
            default:
                printf("th");break;
    }
    printf("day of");
    
    switch(month){
        	case 1: printf("Juanary\n");break;
        	case 2: printf("February\n");break;
        	case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
            case 3: printf("\n");break;
    }
    
    printf(", 20%.2d\n",year);
    
    return 0;
}
```

