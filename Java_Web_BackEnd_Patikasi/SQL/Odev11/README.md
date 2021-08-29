## Soru: actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
### Cevap: (SELECT first_name FROM actor) UNION (SELECT first_name FROM customer)
<hr/>

## Soru: actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
### Cevap: (SELECT first_name FROM actor) INTERSECT (SELECT first_name FROM customer)
<hr/>

## Soru: actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
### Cevap: (SELECT first_name FROM actor) EXCEPT (SELECT first_name FROM customer)
<hr/>

## Soru: İlk 3 sorguyu tekrar eden veriler için de yapalım.
### Cevap: (SELECT first_name FROM actor) UNION ALL (SELECT first_name FROM customer)
### Cevap: (SELECT first_name FROM actor) INTERSECT ALL (SELECT first_name FROM customer)
### Cevap: (SELECT first_name FROM actor) EXCEPT ALL (SELECT first_name FROM customer)
<hr/>