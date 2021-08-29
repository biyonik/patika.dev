## Soru: film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
### Cevap: SELECT rating FROM film GROUP BY rating
<hr/>

## Soru: film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
### Cevap: SELECT COUNT(title) AS film_count, replacement_cost FROM film GROUP BY replacement_cost HAVING COUNT(title) > 50
<hr/>

## Soru: customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?
### Cevap: SELECT COUNT(customer_id) AS customer_count, store_id FROM customer GROUP BY store_id
<hr/>

## Soru: city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıra country_id bilgisini ve şehir sayısını paylaşınız.
### Cevap: SELECT COUNT(city) AS city_count, country_id FROM city GROUP BY country_id ORDER BY city_count DESC LIMIT 1
<hr/>

