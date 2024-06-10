function Main() {
    return (
        <div className="main">
            <div className='center'>
                <div className='menu'>
                    <div className='logo'>
                        <img fetchpriority="high" width="200" height="50"
                            src="https://treinarecife.com.br/wp-content/uploads/2020/12/treinaRecife_quadrada.png" class="attachment-large size-large wp-image-1420"
                            srcset="https://treinarecife.com.br/wp-content/uploads/2020/12/treinaRecife_quadrada.png, https://treinarecife.com.br/wp-content/uploads/2020/12/treinaRecife_quadrada-300x69.png">
                        </img>
                    </div>
                    <div className='item-menu'>
                        <a href='#'>Cursos</a>
                    </div>
                </div>

                <div className='form'>
                    <h2>Entre em Contato</h2>
                    <form>
                        <div className='items-form'>
                            <input placeholder='Seu nome...' type='text' />
                            <input placeholder='Seu sobrenome...' type='text' />
                            <input placeholder='Seu e-mail...' type='text' />
                            <input placeholder='Celular...' type='text' />
                            <input type='submit' />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Main;