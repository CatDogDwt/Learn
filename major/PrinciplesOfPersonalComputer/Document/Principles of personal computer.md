$$
微机原理与接口（含汇编语言）
$$

#### 一、内容概述与要求

​	参加本课程考试的考生从理论和实践上应掌握《微机原理与接口》中微型计算机的基本组成及工作原理、汇编语言程序设计及常用接口技术，建立微机系统整体概念。重点掌握8086 微处理器基本结构及工作原理，存储器的构成及扩展技术，汇编语言程序设计（包括寻址方式、指令系统及程序设计方法），输入输出方式、中断系统及常用接口技术，使学生具备微机应用系统软、硬件开发的初步能力。

#### 二、知识要点与考核要求

- ##### 微型计算机基础

  - 知识范围
    1. 微型计算机的基本组成及各部分的功能与作用；
    2. 微型机的基本工作过程；
    3. 计算机中的编码、数制及其转换；
    4. 无符号二进制数的算术运算和逻辑运算；
    5. 运算中的溢出；
    6. 机器数的表示及运算；
    7. 基本逻辑门及常用逻辑部件。

  - 考核要求
    1. 理解微处理器、微型计算机和微型计算机系统的概念及其相互关系。
    2. 理解微机系统各部件的功能分工及计算机的工作过程。
    3. 掌握计算机中各种信息的表示及运算。
    4. 熟悉基本逻辑门及常用逻辑部件的使用。

- ##### 80X86微处理器

  - 知识范围
    1. 8086/8088CPU的内部结构和外部引线； 
    2. 8086/8088CPU的工作方式；
    3. 8086/8088CPU系统总线的形成；
    4. 8086/8088的存储器结构；
    5. 总线操作及时序。

  - 考核要求
    1. 掌握8086/8088CPU的功能构成及流水线技术，理解流水线管理规则。
    2. 掌握 8086/8088CPU寄存器的组成及其应用。
    3. 理解8086/8088CPU的内存分配，掌握实地址模式下的存储器地址变换方法。
    4. 掌握8086/8088CPU的引脚构成，理解其引脚复用的特性。

- ##### 指令系统与汇编语言程序设计

  - 知识范围
    1. 指令系统的概念、指令格式；
    2. 对操作数的寻址方式；
    3. 常用指令（传送指令、算术运算指令、逻辑运算和移位指令、串操作指令、程序控制指令与处理器控制指令）；
    4. 汇编语言程序的基本结构；
    5. 常用伪指令（数据定义、符号定义、段定义、设定段寄存器）；
    6. DOS功能调用（输入/输出字符、输入/输出字符串、结束程序）；
    7. 三种结构（顺序结构、分支结构和循环结构）程序设计；
    8. 常用程序设计举例。
  - 考核要求
    1. 理解指令系统的概念及指令格式。
    2. 掌握常用的寻址方式并能熟练地使用它们。
    3. 掌握常用指令的格式、功能和使用方法，分析各种指令执行后的结果。
    4. 掌握指令对状态标志的影响。
    5. 掌握常用伪指令的格式和功能。
    6. 掌握汇编语言源程序的构成，熟练掌握汇编语言程序上机调试运行过程。
    7. 理解程序的三种基本结构，能够使用汇编语言解决常见的问题。

- ##### 存储器系统

  - 知识范围
    1. 存储器体系相关概念；
    2. 半导体存储器的分类及其特点；
    3. 常见半导体存储芯片的外部特性及其与系统的连接；
    4. 存储器接口设计（存储器扩展技术）；
    5. 高速缓存。
  - 考核要求
    1. 理解存储器三级存储体系的构成：外存、内存、高速缓冲存储器的概念。
    2. 掌握存储器的性能指标，半导体存储器的分类。
    3. 理解静态与动态存储器的构成及其特点。
    4. 掌握典型的存储芯片（SRAM 6264、DRAM 2164A）的引脚构成。
    5. 了解高速缓冲存储器。

- ##### 输入输出及中断技术

  - 知识范围
    1. 输入/输出概述；
    2. I/O接口的基本构成与功能；
    3. 端口概念及端口编址方式；
    4. 三态门接口与锁存器接口的构成；
    5. 基本输入/输出方式（无条件传送方式、查询方式、中断方式与直接存储器存取方式）；
    6. 中断技术，包括：中断的概念、中断的全过程、8086/8088中断系统；
    7. 中断控制器8259基本结构及工作原理。
  - 考核要求
    1. 了解外设为什么不能直接与总线连接，接口起什么作用，了解接口完成的功能。
    2. 掌握接口内部基本组成；掌握端口的概念，明确端口与接口的关系；掌握端口的2种编址方式及各自特点。
    3. 掌握常用的输入/输出方法，理解其各自特点及应用场合。要求深入理解条件传送方式和中断传送方式的区别。
    4. 要求深入理解中断的概念，掌握中断全过程包含的步骤，掌握8086CPU响应中断的条件及响应过程，理解中断服务程序的一般构成。
    5. 了解8086系统中断源的分类，掌握8086CPU对它们的管理方法。
    6. 了解中断控制器8259A的基本结构与工作原理。

- ##### 常用接口技术

  - 知识范围
    1. 并行通信与串行通信；
    2. 可编程并行通信接口芯片8255A的结构、控制字及工作方式；
    3. 可编程计数/定时器8253的结构、初始化编程和工作方式。
  - 考核要求
    1. 了解微机并行通信的基本概念，了解在并行通信过程中“联络”信号及其作用，理解并行通信（并行输入和输出）的实现过程。
    2.  掌握并行接口8255A的内部结构与引脚结构，了解8255A的功能特性。
    3. 掌握8255A的方式控制字和C口的按位置位/复位控制的格式及使用。
    4. 重点掌握8255A的工作方式0和方式1，掌握8255A与系统总线及外设的连接方法。
    5. 了解计数/定时的具体应用，理解计数/定时的实现原理。
    6. 掌握定时/计数器8253的内部结构与引脚结构，掌握其工作原理。

