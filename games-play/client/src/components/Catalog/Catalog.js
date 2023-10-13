import { Game } from "./game"


export const Catalog = ({
    games
}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.length > 0 ? games.map(games => <Game key={games._id}{...games} />) : <h3 className="no-articles">No articles yet</h3>}
        </section>
    )
}