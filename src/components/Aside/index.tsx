import { asideStyles } from "src/styles/aside.styles"

export const Aside = () => {
    const { aside } = asideStyles();

    return (
        <aside className={aside}>
            <h3>Any question has an answer.</h3>
            <span>Learn and share knowledge with another people</span>
        </aside>
    )
}