using System;

namespace Operatorler
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Operatörler");

            int firstNum = 5;
            int secondNum = 6;

            if(firstNum == secondNum)
                Console.WriteLine($"{firstNum} == {secondNum}");
            else
                Console.WriteLine($"{firstNum} != {secondNum}");


            if(firstNum < secondNum)
                Console.WriteLine($"{firstNum} < {secondNum}");
            else
                Console.WriteLine($"{firstNum} > {secondNum}");

            
            if(firstNum > secondNum)
                Console.WriteLine($"{firstNum} > {secondNum}");
            else
                Console.WriteLine($"{firstNum} < {secondNum}");

            int c = 10;
            System.Console.WriteLine(c);
            c /= 3;
            System.Console.WriteLine(c);

            int d = 20;
            System.Console.WriteLine(d);
            d *= 2;
            System.Console.WriteLine(d);

        }
    }
}
