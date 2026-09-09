import './TrackList.css'

type TrackListProps = {
    tracks: string[];
    variant: "wide" | "compact";
    theme: string;
};

function TrackList({tracks, variant, theme}: TrackListProps){

    const isWide = variant === "wide";

    return(

        <ul className={isWide ? "track-list-wide" : "track-list-compact"}>

            {tracks.map((track, index) => {

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