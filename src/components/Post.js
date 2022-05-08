import Icons from "./Icons";
import React from "react"

export default function Post(props) {

    const [name, setName] = React.useState("heart-outline");
    const [classHeart, setClassHeart] = React.useState("");
    const [nomeFuncao, setNomeFuncao] = React.useState("");

    const icons = [
        {
            nome: name,
            classe: classHeart,
            funcao: nomeFuncao,
        },
        { nome: "chatbubble-outline" },
        { nome: "paper-plane-outline" }
    ];

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
                        <Icons style="" icons={icons} />
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

    function nomeFuncaoCurtir(nome){
        if(nome === "curtir"){
            setNomeFuncao(curtir);
        } else if(nome === "curtirImagem"){
            setNomeFuncao(curtirImagem);
        }
    }

    function curtir() {
        (name === "heart-outline") ? setName("heart") : setName("heart-outline");
        (classHeart === "") ? setClassHeart("coracao-preenchido") : setClassHeart("");
    }

    function curtirImagem() {
        setName("heart");
        setClassHeart("coracao-preenchido");
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

