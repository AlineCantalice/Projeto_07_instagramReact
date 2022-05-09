import Icons from "./Icons";
import React from "react"

export default function Post(props) {

    const [name, setName] = React.useState("heart-outline");
    const [classHeart, setClassHeart] = React.useState("md hydrated");

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
                    <div>
                        <ion-icon class={classHeart} onClick={curtir} name={name}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <Icons style="" icons={[{ nome: "bookmark-outline" }]} />
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

    function curtir() {
        (name === "heart-outline") ? setName("heart") : setName("heart-outline");
        (classHeart === "md hydrated") ? setClassHeart("md hydrated coracao-preenchido") : setClassHeart("md hydrated");
    }

    function curtirImagem() {
        setName("heart");
        setClassHeart("coracao-preenchido");
    }

    return (
        <div class="post">

            <Topo usuario={props.post.usuario} />

            <div onClick={curtirImagem} class="conteudo">
                <img src={`assets/img/${props.post.conteudo}.svg`} />
            </div>

            <Fundo usuarioCurtiu={props.post.fundo.usuarioCurtiu} outrosCurtiu={props.post.fundo.outrosCurtiu} />

        </div>
    );
}

