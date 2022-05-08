export default function Icons(props) {
    return (        
        <div class={props.style ? props.style : ""}>
            {props.icons.map((itens) => <ion-icon class={itens.classe ? itens.classe : ""} onClick={itens.funcao ? itens.funcao : ""} name={itens.nome} ></ion-icon>)}
        </div>
    );
}