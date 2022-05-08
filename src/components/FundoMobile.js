import Icons from "./Icons";

export default function FundoMobile() {

    const icons = [
        { nome: "home" },
        { nome: "search-outline" },
        { nome: "add-circle-outline" },
        { nome: "heart-outline" },
        { nome: "person-outline" }
    ];

    return (
        <Icons style='fundo-mobile' icons={icons} />
    );
}