using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

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
