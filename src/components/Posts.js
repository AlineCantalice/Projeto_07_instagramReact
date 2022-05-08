import Post from "./Post";

export default function Posts({ posts }) {

    posts = [
        {
            usuario: 'meowed',
            conteudo: 'gato-telefone',
            fundo: { usuarioCurtiu: 'respondeai', outrosCurtiu: '101.523' }
        },
        {
            usuario: 'barked',
            conteudo: 'dog',
            fundo: { usuarioCurtiu: 'adorable_animals', outrosCurtiu: '99.159' }
        }
    ]



    return (
        <div class="posts">
            {posts.map(itens => <Post post={itens} />)}
        </div>
    );
}