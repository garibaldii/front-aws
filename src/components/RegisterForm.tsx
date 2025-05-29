import { useState } from 'react'

export const RegisterForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // evita refresh da página

    try {
      const response = await fetch('http://localhost:3000/dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      if (!response.ok) {
        throw new Error('Erro no envio')
      }

      const data = await response.json()
      console.log('Resposta da API:', data)
      alert('Cadastro enviado com sucesso!')

      // Limpar formulário
      setName('')
      setEmail('')
    } catch (error) {
      console.error(error)
      alert('Erro ao enviar cadastro')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </div>
    </form>
  )
}
