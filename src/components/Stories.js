import Icons from "./Icons";

export default function Stories(props) {

    function Story(props) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${props.src}.svg`} />
                </div>
                <div class="usuario">
                    {props.src}
                </div>
            </div>
        );
    }

    return (
        <div class="stories">

            {props.srcs.map(itens => <Story src={itens} />)}

            <Icons style="setinha" icons={[{ nome: "chevron-forward-circle" }]} />

        </div>
    );
}