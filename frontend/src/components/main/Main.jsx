import React from 'react';
import "./Main.css"

const Main = () => {
        const headings = [
            "Предмет",
            "Викладачі",
            "Завдання",
            "Дедлайн",
            "Замітки",
            "Посилання на пару"
        ]
    return (
        <main>
                {headings.map(heading => <div className={"subject"}>{heading}</div>)}
        </main>
    );
};

export default Main;