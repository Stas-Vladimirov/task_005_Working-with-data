export interface IUser{
    /*
    Задание 2
    Описываем тип данных, с которымы
    собираемся работать
    */
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    company:{
        bs: string;
        catchPhrase: string;
        name: string;
    };
    avatar: string;
}