## Soru: film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
### Cevap: SELECT DISTINCT replacement_cost FROM film
<hr/>

## Soru: film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
### Cevap: SELECT COUNT(DISTINCT replacement_cost) FROM film
<hr/>

## Soru: film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
### Cevap: 9, "SELECT COUNT(title) FROM film WHERE title LIKE 'T%' AND rating='G'"
<hr/>

## Soru: country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
### Cevap: 13, "SELECT COUNT(country) FROM country WHERE LENGTH(country) = 5"
<hr/>

## Soru: city tablosundaki şehir isimlerinin kaçtanesi 'R' veya r karakteri ile biter?
### Cevap: 33, "SELECT COUNT(city) FROM city WHERE city ILIKE '%R'"
<hr/>