import Icons from './Icons';

export default function Navbar() {

    const icons = [
        { nome: "paper-plane-outline" },
        { nome: "compass-outline" },
        { nome: "heart-outline" },
        { nome: "person-outline" }
    ];

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icons style="" icons={[{ nome: "logo-instagram" }]} />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <Icons style="logo-mobile" icons={[{ nome: 'logo-instagram' }]} />

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <Icons style="icones" icons={icons} />

                <Icons style="icones-mobile" icons={[{ nome: 'paper-plane-outline' }]} />

            </div>
        </div>
    );
}