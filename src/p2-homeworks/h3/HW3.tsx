import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types описываем объект юзер
export type UserType = {
    _id: string // need to fix any
    name: string// need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    //массив имен изначальное пустой
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any
//когда придет имя создадим объект и засунем в массив
// храним имена в  виде объектов типа UserType
    const addUserCallback = (name: string) => { // need to fix any
        const user = {
            _id: v1(),
            name: name,
        }
        setUsers([...users, user])
        // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
