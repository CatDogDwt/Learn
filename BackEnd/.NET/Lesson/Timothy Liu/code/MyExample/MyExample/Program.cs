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
