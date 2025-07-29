import { useState, FormEvent } from 'react'
import { User } from '../types/user'
import { validate } from '../utils/validate'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)

  const [erros, setErros] = useState<User | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setErros(null)

    const data: User = {
      name,
      email,
      agree
    }

    const validateErrors = validate(data)

    if (Object.keys(validateErrors).length > 0) {
      setErros(validateErrors)
      return
    }

    console.log('Dados enviados:', data)
    alert('Cadastro realizado com sucesso!')

    setName('')
    setEmail('')
    setAgree(false)
  }

  return (
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-6 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out"
      >
        <div className="flex flex-col transition-all duration-300">
          <label className="text-sm" htmlFor="name">
            Nome:
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 border border-stone-300 mt-1 focus:ring-2 focus:ring-slate-400 transition-all duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {erros?.name && (
          <small className="text-xs text-red-600 mt-1 transition-all duration-300">
            {erros.name}
          </small>
        )}

        <div className="flex flex-col transition-all duration-300">
          <label className="text-sm" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 border border-stone-300 mt-1 focus:ring-2 focus:ring-slate-400 transition-all duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erros?.email && (
            <small className="text-xs text-red-600 mt-1 transition-all duration-300">
              {erros.email}
            </small>
          )}
        </div>

        <div className="flex flex-col transition-all duration-300">
          <a href="#" className="text-xs underline mb-2">
            Leia os termos
          </a>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label className="text-sm" htmlFor="agree">
              Concordo com os termos
            </label>
          </div>
          {erros?.agree && (
            <small className="text-xs text-red-600 mt-1 transition-all duration-300">
              {erros.agree}
            </small>
          )}
        </div>

        <button
          type="submit"
          className="bg-slate-600 hover:bg-slate-500 hover:scale-105 transition-all duration-300 font-medium text-sm py-2 px-4 rounded-lg text-white"
        >
          Cadastrar
        </button>
      </form>
   
  )
}

export default Form
