import { asideStyles } from "../../styles/aside.styles"

export const Aside = () => {
    const { aside, strong } = asideStyles();

    return (
        <aside className={aside}>
            <h3 className={strong}>Any question has an answer.</h3>
            <span>Learn and share knowledge with another people</span>
        </aside>
    )
}