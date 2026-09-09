type TrendingCardProps = {
    image: string;
    imageAlt: string;
    title: string;
    genre: string;
};

function TrendingCard({ image, imageAlt, title, genre }: TrendingCardProps) {
    return (
        <div className="trending-card">
            <div className="trending-thumb-wrap">
                <img
                    className="trending-img"
                    src={image}
                    alt="Artist Thumbnail"
                    data-alt={imageAlt}
                />
                <div className="trending-thumb-overlay"></div>
                <div className="trending-play-btn">
          <span className="material-symbols-outlined icon-fill" data-weight="fill">
            play_arrow
          </span>
                </div>
            </div>
            <h3 className="trending-title">{title}</h3>
            <p className="trending-genre">{genre}</p>
        </div>
    );
}
export default TrendingCard;