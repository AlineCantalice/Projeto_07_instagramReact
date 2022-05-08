import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Corpo() {

    const srcs = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];

    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories srcs={srcs}/>
                <Posts />
            </div>
            <Sidebar />
        </div>
    );
}