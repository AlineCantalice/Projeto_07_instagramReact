export default function Posts() {

    const srcImagemUsuario = ["assets/img/meowed.svg", "assets/img/barked.svg"];
    const nomeUsuario = ["meowed", "barked"];
    const srcImagemConteudo = ["assets/img/gato-telefone.svg", "assets/img/gato-telefone.svg"];
    const usuarioCurtiu = ["respondeai", "adorable_animals"];
    const outrosCurtiu = ["101.523", "99.159"];

    const componentSrcImagemUsuario = srcImagemUsuario.map(items => <img src={items} />);
    const componentNomeUsuario = nomeUsuario.map(items => <p>{items}</p>);

    function Post(props) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.srcImgUsuario} />
                        {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.srcImgConteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.srcImgCurtidas} />
                        <div class="texto">
                            Curtido por <strong>{props.usuarioCurtiu}</strong> e <strong>outras {props.outrosCurtiu} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="posts">
            <Post srcImgUsuario="assets/img/meowed.svg" nomeUsuario="meowed"
            srcImgConteudo="assets/img/gato-telefone.svg" srcImgCurtidas="assets/img/respondeai.svg"
            usuarioCurtiu="respondeai" outrosCurtiu="101.523" />

            <Post srcImgUsuario="assets/img/barked.svg" nomeUsuario="barked"
            srcImgConteudo="assets/img/dog.svg" srcImgCurtidas="assets/img/adorable_animals.svg"
            usuarioCurtiu="adorable_animals" outrosCurtiu="99.159" />         
        </div>
    );
}