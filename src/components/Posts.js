export default function Posts() {

    function Post(props) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.srcImagemUsuario} />
                        {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.srcImagemConteudo} />
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
                        <img src={props.srcImagemCurtidas} />
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
            <Post srcImagemUsuario="assets/img/meowed.svg" nomeUsuario="meowed" srcImagemConteudo="assets/img/gato-telefone.svg" srcImagemCurtidas="assets/img/respondeai.svg" usuarioCurtiu="respondeai" outrosCurtiu="101.523" />
            <Post srcImagemUsuario="assets/img/barked.svg" nomeUsuario="barked" srcImagemConteudo="assets/img/dog.svg" srcImagemCurtidas="assets/img/adorable_animals.svg" usuarioCurtiu="adorable_animals" outrosCurtiu="99.159" />         
        </div>
    );
}