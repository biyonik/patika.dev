/**
* Implicit Convert - Bilinçsiz Dönüşüm
* Explicit Convert - Bilinçli Dönüşün
*/

// Implicit

byte a = 5;
sbyte b = 30;
short c = 10;

int d = a + b + c;
Console.WriteLine("d: "+d);

long h = d;
Console.WriteLine("h: "+h);

float i = h;
Console.WriteLine("i: "+h);

string s = "biyonik";
char ch = 'a';

object obj = s+ ch+ d;
Console.WriteLine("obj: "+obj);

// Explicit
System.Console.WriteLine("-*-*-*-*-*-*-*-*-*-*-*-*-*-");
int x = 444;
// byte y = x; // Hata verir
byte y = (byte)x;
Console.WriteLine("y: "+y);

float z = 345.567f;
byte t = (byte)z;
Console.WriteLine("t: "+t);