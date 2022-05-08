import Icons from "./Icons";

export default function Stories({ srcs }) {

    function Story({ src }) {
        return (
            <div class="story">
                <div class="imagem">
                    <img src={`assets/img/${src}.svg`} />
                </div>
                <div class="usuario">
                    {src}
                </div>
            </div>
        );
    }

    return (
        <div class="stories">

            {srcs.map(itens => <Story src={itens} />)}

            <Icons style="setinha" icons={["chevron-forward-circle"]} />

        </div>
    );
}