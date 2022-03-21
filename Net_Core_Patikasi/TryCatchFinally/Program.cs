/**
*
* Try - Catch - Finally
*
*/

try
{
    System.Console.WriteLine("Bir sayı giriniz: ");
    int girilenSayi = Convert.ToInt32(Console.ReadLine());
    System.Console.WriteLine($"Girmiş olduğunuz sayı: {girilenSayi}");
}
catch (FormatException ex)
{
    System.Console.WriteLine(ex.Message);
}
finally {
    System.Console.WriteLine("İşlem sonlandı....");
}

try {
    // int a = int.Parse(null);
    int a = int.Parse("Test");
} catch(ArgumentNullException argumentNullEx) {
    System.Console.WriteLine(argumentNullEx.Message);
} catch(FormatException formatEx) {
    System.Console.WriteLine(formatEx.Message);
}