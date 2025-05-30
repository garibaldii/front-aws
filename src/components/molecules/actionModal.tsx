import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type Props = {
    onClose: () => void
    onSubmit: () => void
    title: string
    description: any
    open: boolean
}

export function ActionModal({
    onClose,
    onSubmit,
    title,
    description,
    open,
}: Props) {
    return (
        <AlertDialog open={open}>
            <AlertDialogContent className="max-w-4xl w-full ">
                <AlertDialogHeader >
                    <AlertDialogTitle className="mb-8">{title}</AlertDialogTitle>
                    <AlertDialogDescription className="text-lg w-full flex justify-center ">{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmit}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}