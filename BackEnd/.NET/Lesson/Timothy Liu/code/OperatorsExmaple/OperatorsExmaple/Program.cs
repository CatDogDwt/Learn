using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace OperatorsExmaple
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //访问外层名称空间中的子集名称空间
            //访问名称空间中的类型
            //访问类型中的静态成员
            System.IO.File.Create("Hello.txt");
            Form myForm = new Form();
            //访问引用对象的实例成员
            myForm.Text = "";
            //访问方法
            myForm.ShowDialog();
        }
    }
}
