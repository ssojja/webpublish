
export function List({titles}) {
    return (
        <ul>
            {titles && titles.map((title, index) =>
                <li key={index}>{title}</li>
            )}
        </ul>
    );
}