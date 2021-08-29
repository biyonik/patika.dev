## Soru: film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
### Cevap: 
SELECT COUNT(*) FROM film
WHERE length  >= (
	SELECT AVG(length) FROM film
)
<hr/>

## Soru: film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
### Cevap: 
SELECT * FROM film
WHERE rental_rate = (SELECT MAX(rental_rate) FROM film) ORDER BY rental_rate ASC
<hr/>

## Soru: film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
### Cevap: 
SELECT * FROM film
WHERE rental_rate = (SELECT MIN(rental_rate) FROM film) AND replacement_cost = (SELECT MIN(replacement_cost) FROM film) 
<hr/>

## Soru: payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
### Cevap: 
SELECT customer.first_name, customer.last_name, (SELECT COUNT(payment.*) FROM payment WHERE payment.customer_id = customer.customer_id) AS payment_count
FROM customer
ORDER BY payment_count DESC
<hr/>