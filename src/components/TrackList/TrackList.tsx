import './TrackList.css' //aqui se traen todos los estilos que le corresponden

type TrackListProps = { //typescript, es como un contrato que dice que quien quiera usar el componente tracklist
    //está obligado a darle estos datos
    tracks: string[]; //lista de canciones
    variant: "wide" | "compact"; //una variante que solo puede usar el texto wide o compact
    theme: string; //un tema
};

function TrackList({tracks, variant, theme}: TrackListProps){ //se crea el componente como función
    //y se le da la "forma" de los props

    const isWide = variant === "wide"; //hace la comparación de que si la variant es wide,
    //entonces se guarda true si es exactamente "wide"

    return(

        <ul className={isWide ? "track-list-wide" : "track-list-compact"}>

            /*
            si las condición isWide se cumple entonces
            el valor "track-list-wide" es verdadero, sino es el otro si es falso.
            Así el ul va a tener una clase css diferente dependiendo
            de si es modo wide o modo compact.

            Esto porque hay dos maneras en las que se muestran los
            numeritos de tracks de la tarjeta
            grande y tarjeta chica

            */

            {tracks.map((track, index) => {

                /*

                tracks es lo que debe de recibir el componente, entonces se hace un
                recorrido donde se otiene el track
                y su index

                */

                const position = isWide
                    ? String(index + 1).padStart(2, "0")
                    : String(index + 1);

                return (
                    <li key={track}
                    className={`${isWide ? "track-row" : "track-row-compact"} ${theme}`}>
                        {isWide ? (
                            <div className = "track-meta">
                                <span className = "track-num">{position}</span>
                                <span className = "track-name">{track}</span>
                            </div>
                        ) : (
                            <span className="track-num-compact">{position}</span>
                        )}
                        {!isWide && <span className = "track-name">{track}</span>}
                        {isWide && (
                            <span className="material-symbols-outlined track-icon">
                                play_circle
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
export default TrackList;