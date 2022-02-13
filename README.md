# Описание:

Поиск адреса и список жильцов должны быть на одном экране
Добавление/изменение/удаление данных - в модальных диалогах
API BASE URL : https://dispex.org/api/vtest
https://dispex.org/api/vtest/docs/swagger/index.html
Функционал:

##

1. Выбор адреса
   Улица -> Дом -> Квартира
   (возможность поиска)
   API:
   GET /Request/streets
   GET /Request/houses/{id}
   GET /Request/house_flats/{id}

###

2.a) Добавление и Привязка жильца к выбранной квартире
(Номер телефона , email, ФИО),
Обязательный параметр - Номер телефона
2.b) Изменение данных жильца
2.c) Отвязка жильца от квартиры
API:
POST /HousingStock/client
PUT /HousingStock/bind_client
DELETE /HousingStock/bind_client/{id}

####

3. Отображение всех жильцов в квартире
   API:
   GET /HousingStock/clients
