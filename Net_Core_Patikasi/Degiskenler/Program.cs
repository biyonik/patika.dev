using System;

namespace Degiskenler
{
    class Program
    {
        static void Main(string[] args)
        {
            string fullName = "Ahmet";
            System.Console.WriteLine("Full name is : {0}", fullName);

            int maxInt = int.MaxValue;
            int minInt = int.MinValue;

            System.Console.WriteLine($"Integer min value is: {minInt}");
            System.Console.WriteLine($"Integer max value is: {maxInt}");

            byte minByte = byte.MinValue;
            byte maxByte = byte.MaxValue;

            System.Console.WriteLine($"Byte min value is: {minByte}");
            System.Console.WriteLine($"Byte max value is: {maxByte}");

            short minShort = short.MinValue;
            short maxShort = short.MaxValue;

            System.Console.WriteLine($"Short min value is: {minShort}");
            System.Console.WriteLine($"Short max value is: {maxShort}");

            decimal minDecimal = decimal.MinValue;
            decimal maxDecimal = decimal.MaxValue;

            System.Console.WriteLine($"Decimal min value is: {minDecimal}");
            System.Console.WriteLine($"Decimal max value is: {maxDecimal}");
        }
    }
}
