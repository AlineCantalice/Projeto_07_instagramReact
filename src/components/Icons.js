export default function Icons(props) {
    return (        
        <div class={props.style ? props.style : ""}>
            {props.icons.map((name) => <ion-icon name={name} ></ion-icon>)}
        </div>
    );
}