using System;

namespace CSharpMethosExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculator c = new Calculator();
            Console.WriteLine(c.GetCylinderVolume(10,100));
        }
    }

    class Calculator
    {
        public double GetCircleArea(double r)
        {
            return Math.PI *r *r;
        }
        public double GetCylinderVolume(double r,double h)
        {
            return GetCircleArea(r) * h;
        }
        public double GetConeVolume(double r,double h)
        {
            return GetCylinderVolume(r, h) / 3;
        }
    }
}
