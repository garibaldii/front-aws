"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "../button";
import { useMemo, useState } from "react";

import { deleteUser } from "@/services/user/userService";

import { DataTable } from "./datatable";
import { ActionModal } from "@/components/molecules/actionModal";
import type { IBucketContent } from "@/interface/IBucketContent";

interface Props {
  contents: IBucketContent[];
  refreshContents: () => void;
}

export default function BucketContentDatatable({
  contents: users,
  refreshContents,
}: Props) {
  //delete modal🗑️
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDelete = async () => {
    if (selectedId !== null) {
      try {
        await deleteUser(selectedId);
        setDeleteModal(false);
        refreshContents();
      } catch (err) {
        console.error("Erro ao deletar:", err);
      }
    }
  };

  const columns = useMemo<ColumnDef<IBucketContent>[]>(
    () => [
      {
        accessorKey: "Key",
        header: "Key",
        cell: ({ row }) => <div>{row.getValue("Key")}</div>,
        size: 1,
      },
      {
        accessorKey: "LastModified",
        header: "Last Modified",
        cell: ({ row }) => <div>{row.getValue("LastModified")}</div>,
        size: 1,
      },
      {
        accessorKey: "ChecksumAlgorithm",
        header: "Checksum Algorithm",
        cell: ({ row }) => <div>{row.getValue("ChecksumAlgorithm")}</div>,
        size: 1,
      },
      {
        accessorKey: "Size",
        header: "Size",
        cell: ({ row }) => <div>{row.getValue("Size")}</div>,
        size: 1,
      },
      {
        accessorKey: "StorageClass",
        header: "StorageClass",
        cell: ({ row }) => <div>{row.getValue("StorageClass")}</div>,
        size: 1,
      },

      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const content = row.original as IBucketContent;
          return (
            <div className="flex p-3">
              <Button
                onClick={() => {
                  setSelectedId(content?.Key ?? null);
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
    []
  );

  return (
    <div>
      <DataTable columns={columns} data={users} pageSize={5} />

      {/* deletar 🗑️ */}
      <ActionModal
        title="Excluir Conteúdo"
        description="Atenção, tem certeza que deseja excluir este conteúdo?"
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onSubmit={handleDelete}
      />
    </div>
  );
}
