/* eslint-disable react/prop-types */
import { Square } from "./Square.jsx"

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ha ganado: '
    const winnerClasses = winner === false ? 'win noborder' : 'win'

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className={winnerClasses}>
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}