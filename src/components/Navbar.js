import Icons from './Icons';

export default function Navbar() {

    const icons = ['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline'];

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icons style="" icons={["logo-instagram"]} />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <Icons style="logo-mobile" icons={['logo-instagram']} />

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <Icons style="icones" icons={icons} />

                <Icons style="icones-mobile" icons={['paper-plane-outline']} />

            </div>
        </div>
    );
}