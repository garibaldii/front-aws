"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../button";
import { useEffect, useMemo, useState } from "react";

import { deleteUser, getUsers } from "@/services/user/userService";

import type { IUser } from "@/interface/IUser";
import { DataTable } from "./datatable";
import { ActionModal } from "@/components/molecules/actionModal";


interface Props {
    users: IUser[];
}

export default function UserDataDatable({ users }: Props) {
    const [modal, setModal] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => { getUsers() });

    const handleDelete = async () => {
        if (selectedId !== null) {
            try {
                await deleteUser(selectedId);
                setModal(false);
            } catch (err) {
                console.error("Erro ao deletar:", err);
            }
        }
    };

    const columns = useMemo<ColumnDef<IUser>[]>(
        () => [
            {
                accessorKey: "name",
                header: "Name",
                cell: ({ row }) => <div>{row.getValue("name")}</div>,
            },
            {
                accessorKey: "email",
                header: "email",
                cell: ({ row }) => <div>{row.getValue("email")}</div>,
            },

            {
                accessorKey: "actions",
                header: "Ações",
                cell: ({ row }) => {
                    const user = row.original as IUser;
                    return (

                        <div className="flex p-3">
                            <Button
                                className="mr-3"
                            // onClick={() => router.push(`/pages/article/edit/${user.id}`)}
                            >
                                ✏️
                            </Button>
                            <Button
                                onClick={() => {
                                    setSelectedId(user?.id ?? null);
                                    setModal(true);
                                }}
                            >
                                🗑️
                            </Button>
                        </div>
                    );
                },
            },
        ],
        []
    );

    return (
        <>
            <DataTable
                columns={columns}
                data={users}
                pageSize={5}
                searchFields={["name", "email"]}
            />
            <ActionModal
                title="Excluir Usuário"
                description="Atenção, tem certeza que deseja excluir este usuário?"
                open={modal}
                onClose={() => setModal(false)}
                onSubmit={handleDelete}
            />
        </>
    );
}