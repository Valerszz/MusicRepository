import './ArtistsCard.css'
import TrackList from '../../TrackList/TrackList'

type ArtistsCardProps = {
    image: string;
    badge: string;
    badgeVariant: string; //"badge-secondary", "badge-error"
    name: string;
    description: string;
    tracks: string[];
    theme: string; //"theme-secondary", "theme-error"
};

function ArtistsCard({ image, badge, badgeVariant, name, description, tracks, theme }: ArtistsCardProps) {
    return (
        <article className="artist-card artist-card-wide">
            <img alt="Featured Artist Image" className="artist-img" src={image} />
            <div className="artist-card-overlay"></div>
            <div className="artist-card-content-wide">
                <div className="artist-info">
                    <div className="artist-badges">
                        <span className={`badge ${badgeVariant}`}>{badge}</span>
                    </div>
                    <h3 className="artist-name-lg">{name}</h3>
                    <p className="artist-desc">{description}</p>
                </div>
                <div className="tracklist-box-wide">
                    <h4 className="tracklist-title">Top Tracks</h4>
                    <TrackList tracks={tracks} variant="wide" theme={theme} />
                </div>
            </div>
        </article>
    );
}

export default ArtistsCard;