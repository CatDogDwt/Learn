using System;
using Tools;
using SuperTools;

namespace HelloWorld /*名称空间 默认和创建project的时候是一样的*/
{
    internal class Program /*类*/
    {
        static void Main(string[] args)
        {
            /*console也是一个类  writeling是console类中的一个方法*/
            Console.WriteLine("Hello World!");
            Console.WriteLine(Calculator.Add(1.5, 1.5));
            Console.WriteLine(Calculator.Sub(1.5,1.5));
            Console.WriteLine(SuperCalculator.Div(1.5,1.5));
            Console.WriteLine(SuperCalculator.Mul(0,5.0));
        }
    }
}
