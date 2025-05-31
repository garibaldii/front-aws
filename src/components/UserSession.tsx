import { UserForm } from "./UserForm"
import type { IUser } from "@/interface/IUser"
import { useState } from "react"
import UserDataDatable from "./ui/datatable/user-datatable"
import { useUsersData } from "@/hooks/useUsersData"


export const UserSession = () => {

    const [userToEdit, setUserToEdit] = useState<IUser | null>(null)
    //retorna os usuários via hook 
    const { users, refreshUsersData } = useUsersData()


    return (
        <div className="flex  w-full justify-center">
            <div className="flex justify-center bg-gray-950 w-3/4 rounded-2xl p-3">

                <div className="w-1/3 flex flex-col justify-center ">
                    <div>
                        <UserForm userToEdit={userToEdit} setUserToEdit={setUserToEdit} refreshUsers={refreshUsersData}  />
                    </div>
                </div>


                <div className=" pl-10">
                    <UserDataDatable users={users} setUserToEdit={setUserToEdit} refreshUsers={refreshUsersData} />
                </div>

            </div>
        </div>
    )
}