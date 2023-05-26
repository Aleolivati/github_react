import { useEffect, useState } from "react";
import style from "./RepoList.module.css";

    const RepoList = ({ userName }) => {
    const [repo, setRepo] = useState([]);
    const [errorLoading, setErrorLoading] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Invalid username");
                }
            })
            .then((resJson) => {
                setRepo(resJson);
                setErrorLoading(false);
            })
            .catch((e) => {
                setErrorLoading(true);
                setRepo([]);
            });
    }, [userName]);

return (
    <div className="container">
        {errorLoading ? (
            <div className="alert">
                <h2>Usuário não encontrado!</h2>
                <p>Parece que não encontramos o usuário referido... Por favor, tente novamente com um nome de usuário válido!</p>
            </div>
        ) : ( repo.length === 0 ? (
                <h2 className="alert">Este usuário não possui nenhum repositório Git! </h2>
            ) : (
                <ul className={style.list}>
                {repo.map(({ id, name, language, html_url }) => (
                    <li key={id} className={style.listItem}>
                        <div className={style.itemName}>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div className={style.itemLanguage}>
                            <b>Linguagem:</b>
                            {language}
                        </div>
                        <a target="_blank" href={html_url} className={style.itemLink}>
                        Visitar no Github
                        </a>
                    </li>
                ))}
            </ul>
        ))}
    </div>
    );
};

// const RepoList = ({userName}) => {
//     const [repo, setRepo] = useState([]) ;
//     const [errorLoading, setErrorLoading] = useState(false) ;

//     useEffect(() => {
//         fetch(`https://api.github.com/users/${userName}/repos`)
//             .then(res => res.json())
//             .then(resJson => {
//                 setRepo(resJson)
//                 console.log(errorLoading)
//             })
//             .catch ((e) => {
//                 alert('Ops!')
//                 setErrorLoading((prevErrorLoading) => true) ;
//                 setRepo([]) ;
//                 console.log(errorLoading)
//             }) ;
//     }, [userName])

//     return (
//         <div className="container">
//             {errorLoading ? (
//                 <h1>HELP</h1>
//             ) : (
//                 <ul className={style.list}>
//                     {repo.map(({id, name, language, html_url}) => (
//                         <li key={id} className={style.listItem}>
//                             <div className={style.itemName}>
//                                 <b>Nome:</b>
//                                 {name}
//                             </div>
//                             <div className={style.itemLanguage}>
//                                 <b>Linguagem:</b>
//                                 {language}
//                             </div>
//                             <a target="_blank" href={html_url} className={style.itemLink}>Visitar no Github</a>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     )
// }

export default RepoList;
