using System;

namespace OverloadExmaple
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculator c = new Calculator();
            double a = c.Add(1, 2);
        }
    }

    class Calculator
    {
        public int Add(int a, int b)
        {
            return a + b;   
        }
        public int Add<T>( ref int a,ref int b,ref int c)
        {
            return a + b + c;
        }

        public double Add(double a,double b)
        {
            return a + b;
        }
    }
}
