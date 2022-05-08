import Icons from "./Icons";

export default function Post(props) {

    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    function Topo(props) {
        return (
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.usuario}.svg`} />
                    {props.usuario}
                </div>

                <Icons style="acoes" icons={["ellipsis-horizontal"]} />

            </div>
        );
    }

    function Fundo(props) {
        return (
            <div class="fundo">
                <div class="acoes">
                    <Icons style="" icons={icons} />
                    <Icons style="" icons={["bookmark-outline"]} />
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.usuarioCurtiu}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.usuarioCurtiu}</strong> e <strong>outras {props.outrosCurtiu} pessoas</strong>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="post">

            <Topo usuario={props.post.usuario} />

            <div class="conteudo">
                <img src={`assets/img/${props.post.conteudo}.svg`} />
            </div>

            <Fundo usuarioCurtiu={props.post.fundo.usuarioCurtiu} outrosCurtiu={props.post.fundo.outrosCurtiu} />

        </div>
    );
}

