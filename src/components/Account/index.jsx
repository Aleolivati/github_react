import style from './Account.module.css'

const Account = ({userName}) => {
    return (
        <header className={style.header}>
            <img className={style.avatar} src={`https://github.com/${userName}.png`} />
            <h1 className={style.name}>{userName}</h1>
        </header>
    )
}

export default Account ;