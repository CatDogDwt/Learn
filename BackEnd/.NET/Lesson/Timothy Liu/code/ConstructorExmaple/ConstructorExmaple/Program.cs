using System;

namespace ConstructorExmaple
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Student student = new Student();
            Student2 student2 = new Student2(2, "张三");
            Student3 student3 = new Student3();
            Console.WriteLine();
        }
    }

    class Student
    {
        //自定义不带参数的构造器
        public Student()
        {
            this.Id = 1;
            this.Name = "NoName";
        }
        public int Id;  
        public string Name;
    }

    class Student2
    {
        //自定义带参数的构造器
        public Student2(int initId,string initName)
        {
            this.Id = initId;
            this.Name = initName;
        }
        public int Id;
        public string Name;
    }

    class Student3
    {
        public Student3(int initId, string initName)
        {
            this.Id = initId;
            this.Name = initName;
        }
        public Student3()
        {
            this.Id = 1;
            this.Name = "NoName";
        }
        public int Id;
        public string Name;
    }
}
