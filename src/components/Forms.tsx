import { useState, FormEvent } from 'react'
import {User} from '../types/user'
import { validate } from '../utils/validate';



const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);

    const [erros, setErros ] = useState<User| null>(null)

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        setErros(null);

        const data: User = {
            name,
            email,
            agree
        };

        

        const validateErrors = validate(data);

            if(Object.keys(validateErrors).length > 0){
                setErros(validateErrors)
                return;

            }

            setName('')
            setEmail('')
            setAgree(false)


            alert('obrigado por se inscrever!')
        


        
    }



    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name" >Nome</label>
                <input type="text" placeholder="Digite seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 border-1 mt-1" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            {erros?.name && (<small className='text-xs text-red-600 mt-1'>{erros?.name}</small>) }
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email" >Email:</label>
                <input type="email" placeholder="Digite seu email"  className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 border-1 mt-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <label className="text-sm" htmlFor="agree">Concordo com os termos</label>

                </div>
               
            </div>
            <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
        </form>
        
    )
}

export default Form