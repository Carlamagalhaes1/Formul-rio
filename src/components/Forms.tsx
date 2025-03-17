const Form = () => {
    return (
        <form>
            <div>
                <label >Nome:</label>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div>
                <label >Email:</label>
                <input type="email" placeholder="Digite seu email" />
            </div>
            <div>
                <a href="#">Leia os termos</a>
                <input type="checkbox"  />
                <label >Concordo com os termos</label>
            </div>
            <button >Cadastrar</button>
        </form>
        
    )
}

export default Form