import userEvent from '@testing-library/user-event'
import React, { FC, useMemo, useState, ChangeEvent, FormEvent} from 'react'
import { IUser } from './IUser';
import {USERS} from './usersData';
import { initialUser } from './initialUser';

const Users:FC = () => {

    /* 
    FC - Function Components
    (Функциональная компонента)
    */

    /*
    Задание 4
    Реализуем State
    */
    const [users, setUsers] = useState<IUser[]>(USERS);

    /*
    Задание 5

    Безопасный способ удаления пользователя.
    Функция confirm отображает модальное окно с текстовым
    вопроса question и двумя кнопками: OK и Отмена.
    
    confirm - возвращант true или false
    
    Возвращаем тех пользователей 
    у которого user.id не совпадает id
    */

    const deleteUser = (id:number) =>{
        const isDelet = window.confirm('Do you really delete this user?');
        if(isDelet){
          setUsers(users.filter(user => user.id !== id));
        }
      };

    /*
    Задание 7
    Создадим ф-цию для поиска,
    которая будет забирать
    значения с <input></input>

    Еслт мы говорим про работу поиска
    значения то это будет filter

    Мы каждого пользователя приводим к нижнему
    регистру
    
    Метод tolocalowerCase() - приводит все символы
    к нижнему регистру.

    Метод includes() - проверяет вхождение символа

    Есть проблема:
    Мы изменили state, стёрли и всё
    пользователи пропали

    Создадим отдельное состояние
    search - относится к пустому полю

    Закрепляем поле для поиска
    в отдельный state.

    На основе изменения state
    можно сделать логику.
    */

    const[search, setSearch] = useState('');

    const searchedUsers = useMemo(() => {
      if(search){//Если есть search, то возвращаем отфильтрованных пользователей
          return users.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase()));
      }
      //Иначе обычных
      return users;
    },[search, users]);
    /*
    При добавлении search работает поиск
    При добавлении users работает удаление
    */

    /*
    Задание 8
    Показать форму для изменения пользователя
    */
    const[showUserForm, setShowUserForm] = useState(false);

    /* ***** Задание 10 ***** 
    Теперь мы говорим не о пользователях
    а о пользователе
    */

    const [user, setUser] = useState(initialUser);


    /*  ***** Задание 10.1 ***** 
    
    Создадим ф-цию onChange
    Принимаем event с типом ChangeEvent<HTMLInputElement>
    */

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
    /*
    console.log(event.target.id);
    В результате каждый id инпута меняется
    */
  
    /*
    Создадим поле fild, которое хотим менять
    */
    const field = event.target.id;
    /*
    Подготавливаем новый набор данных и
    после нажатии на кнопку Add
    добавится новый пользователь.
  
      Остаточные параметры(...) используется в js либо
    для аргументов ф-ции когда мы незнаем их кол-во
    либо для итурируемых объектов.
      Итурируемые объекты - перебираемые объекты (массив)
    Js spread (Троеточие) перечисляет все параметры, все элементы массива
    и разворачивает их в одну строку.
      В setUser сделаем новый объект, в котором развернём
    старый стейт и для поля field ставим event.target.value
      В результате 
       - в name добавляется а
       - в address добавляется b
      и т.д.
   
      Разварачиваем новый объект {} в котором развернём
      старый стейт user и для поля field ставим
      event.target.value
      */
      setUser({...user,[field]: event.target.value});
    }

    const addUser = (event: FormEvent) =>{
      event.preventDefault();
      /*
      В массив пользователей
      после addUser нужно добавить
      нового пользователя
      Разворачиваем пользователей
      в новый массив
      */
      setUsers([...users, user]);
      setUser(initialUser);
    };
    console.log(user);
      



    /*  ***** Задание 1 *****

    В components создадим новую директорию
    Users в Users файл Users.tsx
    В файл Users.tsx вставляем карточку 
    из bootstrap.

    Вставляем компоненту Users в App.tsx
    и в файле App.tsx (сверху) импортируем
    компоненту Users
    import Users from './Users/Users';

    Обернём карточки в контейнер

    Важно:
    Все компоненты называем с большой буквы
    С маленькой буквы можем назвать ф-ции
    */

    /*  ***** Задание 2 *****

    Описываем тип пользователей, с
    которымы будем работать
    Создадим новый файл IUser.ts
    Создадим новый файл usersData.ts
    В файл usersData.ts вставляем
    псевдо пользователей
    Теперь говорим что эти прользователи
    будут определённого типа
    ts - TypeScript (Статическая типизация)
    Интерфейс - описание того кем данные
    будут использованы
    */

    /*  ***** Задание 3 *****

    Метод map - проходит по
    текущему массиву и создаёт новый.
    */

    /*  ***** Задание 4 *****

    Реализуем state и поместим его
    в пользователь.
    */

    /*  ***** Задание 5 *****

    Реализуем удаление 
    пользователя.
    */

    /*  ***** Задание 6 *****

    Если вдруг данных пользователей нет
    мы должны что то выводить в ответ.
    В React это наз-ся условный рендеринг
    Render - если чего-то ещё нет мы показываем одно,
    а если эти данные есть выводим другое.
    Рендеринг основывается на if else.
    */
   
    /*  ***** Задание 7 *****

    Поиск пользователей
    Сверху делаем строку поиска
    В неё будем что то вводить.
    В соответствии по найденым значениям в impoot 
    По имени пользователя сортируем массив

    Создадим ф-цию, которая будет забирать
    значения с <input></input>
    Это делается спомощью onChange
    */

    /*  ***** Задание 8 *****

      Мемоизация — в программировании сохранение
    результатов выполнения функций для предотвращения
    повторных вычислений.
      Мемоизация служит для того, что бы мы могли
    в зависимости от конкретного изменённого
    значения вызывать рендеринг.
      Если это значение не меняется рендеринг
    не вызывается.

    Вызываем useMemo()
    В searchedUsers будет храниться результат ф-ции

    deps:[search, users] - оператор зависимрсти
    */
   
    /*  ***** Задание 9 *****

    Добавляем кнопку, которая при нажатии
    форма сворачивается.
    При повторном нажатии форма разворачивается
    */

    /*  ***** Задание 10 ***** 

    Делаем формы, в которых будем собирать
    данные пользователей
    После собрания данных о пользователе
    нажимаем на кнопку Add new User
    появится новый пользователь и он
    добавляется в общий State 
    */
  return (
    <>
    {/*  ***** Задание 7 *****

       Строка поиска
       Весь блок окутываем в <> </> скобки
       т.к return возвращает один div
    */}
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">Search</span>
      <input type="text"
             className="form-control"
             placeholder="Username"
             aria-label="Username"
             aria-describedby="basic-addon1"
             /*onChange={(event) => console.log(event.target.value)}
             На каждое изменение input в console.log выводим изменение*/
             onChange={(event) => setSearch(event.target.value)}
             ></input>
    </div>


    {/*  ***** Задание 9 *****

      Добавдяем кнопку,при нажатии которого
      разварачивается / сварачивается форма.
      mt - margin-top
      mb - margin-bottom
    */}
    <button type="button" className = "btn btn-success mt-3 mb-3"
    onClick={() => setShowUserForm(!showUserForm)}
    >Add new User
    </button>
    {/*
       Было false станет true, Было true станет false
    */}
    {/*Добавим логику что бы форма показывалась
       Код пишем в фигурных скобочках, что бы
       Реакту дать понять что мы будем обращаться к JS
    
       Если true то в дальнейшем код 
       отображается.
       Пример:
       {showUserForm &&<h2>form</h2>};
    */}

    {/*  ***** Задание 10 *****  
    
    */}
    {showUserForm &&
    /* Заводим начальное значение ползователя
       с нашими полями
       Создаём файл initialUser.ts
    */
    <form onSubmit = {(event) => addUser(event)}>
      {Object.keys(user).map(field =>{
        {/*Если мы используем фигурные скобки
           то в них должно быть ключевое слово return
           Если field равно id то мы всё пропускаем
           или field равно address и т.д.
        */}
      if(field === "id" || field === "company") return;
      return <div className = "mb-3" key = {field}>
        <label htmlFor = {field} 
               className = "form-label">{field}
        </label>
        {/*  ***** Задание 10.1 *****
          У каждого поля есть event.target.value
          И нам нужно, чтобы к полям присваивалось
          какоето значение
          Создадим ф-цию onChange
        */}
        <input type="text" 
               className="form-control" 
               id = {field}
               required
               value = {user[field as keyof Omit<IUser, 'id' | 'company'>]}
               /*Omit говорит какие ключи
               мы не будем использовать
               */
               onChange={(event) => onChange(event)}
               ></input>
      </div>
      }
        )}
      {/*
      Для того, чтобы не повторять форму с Email; City -//-
      заводим начальное значение пользователя
      Делаем файл TypeScript initialUser.ts
      (какой-то пользователь с пустыми полями, данными)

      */}
      
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
    }


    



    <div className="row row-cols-1 row-cols-md-3 g-4">
        {/*
        Задание 3
        Обращаемся к ползователям
        На каждого user (пользователя) мы
        вернём col (колонки)
        */}
        {/*
        Задание 6
        Если есть такие пользователи т.е
        есть ли у пользователя длинна users.length
        то делаем users.map
        users явл-ся массивом объекта
        Иначе 
        */}

        {users.length ?

        searchedUsers.map(user =>

        <div className="col" key={user.id}>
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{/*Номер пользователя и Имя пользователя*/`№ ${user.id} - ${user.first_name}`}</h5>
                    <h5 className="card-title">{user.last_name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Company: {user.company.name}</p>
                    <img src = {user.avatar} className="card-text"/>
                </div>
                <div className="card-footer">
                    <button type="button" className = "btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>{/*Кнопка для удалентя пользователя. Удаляем по id*/}
                </div>
            </div>
        </div>
        )
        /* Задание 6 Если пользователя нет отправляем заголовок*/
        :<h2>Users not exist</h2>
    }
    </div>
    </>
  )
}

export default Users