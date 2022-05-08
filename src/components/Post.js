import Icons from "./Icons";

export default function Post({ post: { usuario, conteudo, fundo } }) {

    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    function Topo({ usuario }) {
        return (
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${usuario}.svg`} />
                    {usuario}
                </div>

                <Icons style="acoes" icons={["ellipsis-horizontal"]} />

            </div>
        );
    }

    function Fundo({ usuarioCurtiu, outrosCurtiu }) {
        return (
            <div class="fundo">
                <div class="acoes">
                    <Icons style="" icons={icons} />
                    <Icons style="" icons={["bookmark-outline"]} />
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${usuarioCurtiu}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{usuarioCurtiu}</strong> e <strong>outras {outrosCurtiu} pessoas</strong>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="post">

            <Topo usuario={usuario} />

            <div class="conteudo">
                <img src={`assets/img/${conteudo}.svg`} />
            </div>

            <Fundo usuarioCurtiu={fundo.usuarioCurtiu} outrosCurtiu={fundo.outrosCurtiu} />

        </div>
    );
}

