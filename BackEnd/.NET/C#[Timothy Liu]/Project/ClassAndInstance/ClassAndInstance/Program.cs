using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ClassAndInstance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //创建类的实例 
            new Form();//构造器：（）：表示form的实例在内存中生成之后 要用什么样的方法去对它初始化
            (new Form()).Text = "MY dialog";
            (new Form()).ShowDialog();

            //声明引用变量并引用实例
            Form myform = new Form();
            myform.Text = "My dialog";
            myform.ShowDialog();

            //一个引用变量引用多个实例
            Form myform1;
            Form myform2;
            myform1 = new Form();
            myform2 = myform1;
            myform1.Text = "My Dialog";
        }
    }
}
    