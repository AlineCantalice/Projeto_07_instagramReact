export default function Icons(props) {
    return (
        <div class={props.style ? props.style : ""}>
            {props.icons.map((itens) => <ion-icon name={itens.nome} ></ion-icon>)}
        </div>
    );
}