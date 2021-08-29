## Soru: city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
### Cevap: SELECT city, country FROM country LEFT JOIN city ON city.country_id = country.country_id
<hr/>

## Soru: customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
### Cevap: SELECT first_name, last_name, payment_id FROM customer RIGHT JOIN payment ON payment.customer_id = customer.customer_id
<hr/>

## Soru: customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.
### Cevap: SELECT first_name, last_name, rental_id FROM customer FULL JOIN rental ON rental.customer_id = customer.customer_id
<hr/>