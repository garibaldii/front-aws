import { useState } from 'react'
import type { IUser } from '../interface/IUser'
import { postUser } from '../services/user/userService'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { toast } from 'sonner'
import { useUsersData } from '@/hooks/useUsersData'

export const RegisterForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const { refreshUsersData } = useUsersData()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // evita refresh da página

    try {
      const user: IUser = { name, email }
      await postUser(user)
      toast.success("Usuário Cadastrado com sucesso!")
      refreshUsersData()

      setName("")
      setEmail("")
    }
    catch (error) {
      console.error(error)
      toast(`Erro ao cadastrar: ${error}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card w-full max-w-sm"
    >
      <h2 className='text-2xl'>Cadastro de Usuários</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Label className="text-sm font-medium  mb-1">Nome</Label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <Label className="text-sm font-medium  mb-1">Email</Label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          variant={"ghost"}
          type="submit"
          className='text-white'
        >
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
