## Soru: film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
### Cevap: SELECT AVG(rental_rate) FROM film
<hr/>

## Soru: film tablosunda bulunan filmlerden kaçtanesi 'C' karekteri ile başlar?
### Cevap: SELECT COUNT(*) FROM film WHERE title LIKE 'C%'
<hr/>

## Soru: film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
### Cevap: SELECT MAX(length) FROM film WHERE rental_rate = 0.99
<hr/>

## Soru: film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?
### Cevap: SELECT COUNT(DISTINCT replacement_cost) FROM film WHERE length > 150
<hr/>

