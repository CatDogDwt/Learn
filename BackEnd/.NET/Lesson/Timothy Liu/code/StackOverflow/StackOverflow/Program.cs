using System;

namespace StackOverflow
{
    internal class Program
    {
        static void Main(string[] args)
        {
            BadGuy bg =new BadGuy();
            bg.BadMethod();
        }
    }

    class BadGuy
    {
        public void BadMethod()
        {
            int x = 100;
            this.BadMethod();
        }
    }
}
