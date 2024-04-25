import './Movie.css';

export function Movie({
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
}) {
    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    src={poster}
                    alt={type}
                />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>{year} <span className="right"></span></p>
            </div>
        </div>
    )
}