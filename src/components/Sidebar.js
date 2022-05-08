export default function Sidebar() {

    const sugestoes = [
        { usuario: 'bad.vibes.memes' },
        { usuario: 'chibirdart' },
        { usuario: 'razoesparaacreditar', ehNovo: true },
        { usuario: 'adorable_animals' },
        { usuario: 'smallcutecats' }
    ];

    function Sugestao(props) {
        return (
            <div class="sugestao">
                <div class="usuario">
                    <img src={`assets/img/${props.usuario}.svg`} />
                    <div class="texto">
                        <div class="nome">{props.usuario}</div>
                        {(props.ehNovo) ? <div class="razao">Novo no Instagram</div> : <div class="razao">Segue você</div>}
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        );
    }

    function Sugestoes(props) {
        return (
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {props.usuarios.map(itens => <Sugestao usuario={itens.usuario} ehNovo={itens.ehNovo} />)}

            </div>
        );
    }

    function Usuario(props) {
        return (
            <div class="usuario">
                <img src={`assets/img/${props.usuario}.svg`} />
                <div class="texto">
                    <strong>{props.usuario}</strong>
                    {props.nomeUsuario}
                </div>
            </div>
        );
    }

    return (
        <div class="sidebar">

            <Usuario usuario='catanacomics' nomeUsuario='Catana' />

            <Sugestoes usuarios={sugestoes} />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}