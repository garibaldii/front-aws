"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../button";
import {  useMemo, useState } from "react";

import { deleteUser } from "@/services/user/userService";

import type { IUser } from "@/interface/IUser";
import { DataTable } from "./datatable";
import { ActionModal } from "@/components/molecules/actionModal";

interface Props {
  users: IUser[];
  setUserToEdit: (user: IUser | null) => void;
  refreshUsers: () => void;
}

export default function UserDataDatable({
  users,
  setUserToEdit,
  refreshUsers,
}: Props) {
  //delete modal🗑️
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDelete = async () => {
    if (selectedId !== null) {
      try {
        await deleteUser(selectedId);
        setDeleteModal(false);
        refreshUsers();
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
        size: 1,
      },
      {
        accessorKey: "email",
        header: "E-mail",
        cell: ({ row }) => <div>{row.getValue("email")}</div>,
      },

      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const user = row.original as IUser;
          return (
            <div className="flex p-3">
              <Button
                className="mr-3"
                onClick={() => {
                  setUserToEdit(user);
                }}
              >
                ✏️
              </Button>
              <Button
                onClick={() => {
                  setSelectedId(user?._id ?? null);
                  setDeleteModal(true);
                }}
              >
                🗑️
              </Button>
            </div>
          );
        },
      },
    ],
    [setUserToEdit]
  );

  return (
    <div>
      <DataTable
        columns={columns}
        data={users}
        pageSize={5}
        searchFields={["name", "email"]}
      />

      {/* deletar 🗑️ */}
      <ActionModal
        title="Excluir Usuário"
        description="Atenção, tem certeza que deseja excluir este usuário?"
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onSubmit={handleDelete}
      />
    </div>
  );
}
