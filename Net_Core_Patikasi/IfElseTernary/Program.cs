int time = DateTime.Now.Hour;

if(time >= 6 && time < 11)
    System.Console.WriteLine("Günaydın");
else if(time >= 11 && time <= 18)
    System.Console.WriteLine("İyi günler.");
else
    System.Console.WriteLine("İyi geceler.");

string sonuc = time >= 6 && time < 11 ? "Günaydın" : time >= 11 && time <= 18 ? "İyi günler" : "İyi geceler";
System.Console.WriteLine("Sonuç: "+sonuc);