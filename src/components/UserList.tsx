import UserDataDatable from "./ui/datatable/user-datatable"
import { useEffect } from "react"
import { useUsersData } from "@/hooks/useUsersData"


export const UserList = () => {

    const { users, refreshUsersData } = useUsersData()

    useEffect(() => {
        refreshUsersData()
    }, [])

    return (
        <UserDataDatable users={users} />
    )
}