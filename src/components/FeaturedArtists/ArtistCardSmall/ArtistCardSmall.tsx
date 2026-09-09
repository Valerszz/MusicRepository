import './ArtistCardSmall.css'
import TrackList from '../../TrackList/TrackList'

type ArtistCardSmallProps = {
    image: string;
    badge: string;
    badgeVariant: string;
    name: string;
    tracks: string[];
    theme: string;
};

function ArtistCardSmall({ image, badge, badgeVariant, name, tracks, theme }: ArtistCardSmallProps) {
    return (
        <article className="artist-card">
            <img alt="Featured Artist Image" className="artist-img" src={image} />
            <div className="artist-card-overlay"></div>
            <div className="artist-card-content-compact">
                <div>
                    <div className="artist-badges">
                        <span className={`badge badge-compact ${badgeVariant}`}>{badge}</span>
                    </div>
                    <h3 className="artist-name-md">{name}</h3>
                </div>
                <div className="tracklist-box-compact">
                    <TrackList tracks={tracks} variant="compact" theme={theme} />
                </div>
            </div>
        </article>
    );
}

export default ArtistCardSmall;