Cсылка на макет приложения(Figma):
https://www.figma.com/design/fXOVDKva1PjUhzPAw449Ba/%D0%9C%D0%B0%D1%80%D0%B8%D1%8F?node-id=20076-1192&t=E5s5IHcddDllfJh2-0



Тех.Задание проекта << Зеленый ресурс >>:
-4. Загрузочный экран:
--логотип и название приложения

-3.Первый экран <Сортировка> (Заставка):
--возможность пропустить всю заставку
--возможноть перехода на следущую страницу заставки
--счетик страницы по счету в виде полосок(первая полоска)

-3.Второй экран <Переработка> (Заставка):
--возможность пропустить всю заставку
--возможноть перехода на следущую страницу заставки
--счетик страницы по счету в виде полосок(вторая полоска)

-1.Третий(последний) экран <Вторичный ресурс> (Заставка):
--возможноть перехода авторизации по номеру телефона
--счетик страницы по счету в виде полосок(третья полоска)

1. Авторизация по номеру телефона(дефолт):
--2 инпута: телефон,пороль
--валидвация заполнения полей
--возможность перехода на страницу авторизации по почте
--возможность входа в учетную запись

2. Авторизация по почте:
--2 инпута: почта,пороль
--валидвация заполнения полей
--возможность обратного перехода на страницу авторизации по номеру телефона
--возможность входа в учетную запись

2. Регестрация-нового-аккаунта:
--2 инпута: номер телефона,cоглашение с политикой конф.
--возможность смены страны для регестрации номера телефона
--автопереход после регестрации на страницу подтверждения номера телефона
--возможность перехода на страницу авторизации
--возможность перехода на страницу авторизации с помощью Google,Apple,Facebook
--валидвация заполнения полей

3. Подтверждение номера телефона(Регестрация):
--1 инпут который принимает 4 цифры(которые приходят в смс)
--валидвация заполнения полей
--возможность получения нового проверочного кода по истичению 30 секунд после предидущей попытки
--возможность перехода по кнопке на страницу заполнения инфо о себе

5. Заполение инфо о себе:
--3 инпута:имя,фамилия,email
--валидация заполнения полей
--возможность перехода по кнопке на страицу подтверждения почты

6. Подтверждение почты(Регестрация):
--1 инпут который принимает 6 цифр(которые приходят на почту)
--валидация заполнения полей
--возможность перехода по кнопке на страницу создания пороля

7. Создание пороля:
--2 инпута: пороль,повтор пороля
--2 индикатора условия полей: Минимум 8 символов,Заглавные и строчные буквы;при выполнении условии поле перед ними становится галочкой
--возможность просмотра пороля по кнопке
--валидация заполнения полей
--возможность перехода по кнопке на страицу об успешной или не успешной регестрации

8. Результат регестрации:
--2 состояния:не успешная регестрация,успешная регестрация
--возможность перехода по кнопке на главную страницу(успешная регестрация)
--возможность перехода по кнопке обратно на страницу авторизации по номеру телефона(не успешная регестрация)

9. Главная страница:
--хотбар снизу экрана дающий возможность перехода на страницу профиля,сканера вида мусора,карты с точками сдачи мусора,и перехода на главную страницу
--Список полезной информации дающий возможность перехода на страницу "советы по переработке и утилизации","информация о пунктах приема"
--Список с видами мусора которые хотел бы переработать пользователь


