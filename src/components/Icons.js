export default function Icons({style, icons}) {
    return (        
        <div class={style ? style : ""}>
            {icons.map((name) => <ion-icon name={name} ></ion-icon>)}
        </div>
    );
}