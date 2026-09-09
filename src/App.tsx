import './App.css'
import samSmithImg from './assets/professional_cinematic_concert_photo_of_sam_smith_performing_on_stage_with.png'
import duaLipaImg from './assets/professional_cinematic_concert_photo_of_a_pop_star_like_dua_lipa_performing_on.png'

import ArtistsCard from './components/FeaturedArtists/ArtistsCard/ArtistsCard'
import ArtistCardSmall from './components/FeaturedArtists/ArtistCardSmall/ArtistCardSmall'


export default function App() {
  return (
    <div className="app">
      {/* TopNavBar */}
      <nav className="navbar">
        <div className="nav-logo">SONIC IMMERSION</div>
        <div className="nav-links">
          <a className="nav-link active" href="#">Explore</a>
          <a className="nav-link" href="#">Genres</a>
          <a className="nav-link" href="#">Trending</a>
          <a className="nav-link" href="#">My Profile</a>
        </div>
        <div className="nav-actions">
          <button aria-label="Notifications" className="icon-btn">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button aria-label="Profile" className="icon-btn">
            <span className="material-symbols-outlined" data-icon="person">person</span>
          </button>
          {/* Mobile Menu Toggle */}
          <button aria-label="Menu" className="mobile-menu-btn">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="main-content">
        {/* Header */}
        <header className="header-section">
          <h1 className="header-title">Discover the Vanguard</h1>
          <p className="header-desc">Immerse yourself in the sonic landscapes of tomorrow. Explore our curated selection of visionary artists defining the current musical epoch.</p>
        </header>

        {/* Trending Now Horizontal Scroll */}
        <section className="trending-section">
          <div className="section-header">
            <h2 className="section-title">Trending Now</h2>
            <button className="view-all-btn">
              View All <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="trending-scroll hide-scrollbar">
            {/* Trending Item 1 */}
            <div className="trending-card">
              <div className="trending-thumb-wrap">
                <img alt="Artist Thumbnail" className="trending-img" data-alt="A moody, high-contrast promotional photo of an electronic music producer in a dark studio illuminated by neon cyan and magenta lights. The artist is silhouetted against complex modular synthesizers. The visual style is cyberpunk and nocturnal, fitting a premium dark mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZpQk6bTavW9fI8sNYyKhF1hbEpex5OfVO-ltCKjMLkdSfkanmNTgbcL-LflxQvS6VC9b9bSEaOASd-tdBN_v5hkw3J3MulZVbu42h-fHMLPgzM6Hj-qHH0RySbsIK3PdgCQJHiisZ5HVdIWesyi0l1O-PQde9luPBOUZbYCD2l01K1q5Yl25zcZFaoxw4JiNZG1yQOHqen9wFIAAOrcJp0hn3AR4U1auiIuqBtTDL1u61poHE5kF" />
                <div className="trending-thumb-overlay"></div>
                <div className="trending-play-btn">
                  <span className="material-symbols-outlined icon-fill" data-weight="fill">play_arrow</span>
                </div>
              </div>
              <h3 className="trending-title">Aetherial Synthesis</h3>
              <p className="trending-genre">Ambient Techno</p>
            </div>

            {/* Trending Item 2 */}
            <div className="trending-card">
              <div className="trending-thumb-wrap">
                <img alt="Artist Thumbnail" className="trending-img" data-alt="A vibrant, dynamic live performance shot of an indie pop artist on stage. Bathed in deep purple and soft pink spotlighting against a pitch-black background. The artist is mid-performance, exuding energy. The image feels raw, high-fidelity, and perfectly suited for a premium music discovery platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSoFB-LtXZlJYa6WE56n5BEFkTyZ9yp4jHvPLTFnFzB294a0TbwdWhDAPAskhzYFmYQHSWbn4lCF7EfGDV-_PLiOuY68Tjct5GnDaNpHEXPI9uG28fAfiSjZchaOT4z2JIqVxasffL-DkZmV7UVVxzLtxk5IMmc24lNYJWNBpV5dz_B6f52BBZQN1nqByg6zsjTOUSN8I7Wk6fTTllfZwnX5HIEjrWqdgCYfG8e6JrldHI5jYws13d" />
                <div className="trending-thumb-overlay"></div>
                <div className="trending-play-btn">
                  <span className="material-symbols-outlined icon-fill" data-weight="fill">play_arrow</span>
                </div>
              </div>
              <h3 className="trending-title">Neon Reverie</h3>
              <p className="trending-genre">Dream Pop</p>
            </div>

            {/* Trending Item 3 */}
            <div className="trending-card">
              <div className="trending-thumb-wrap">
                <img alt="Artist Thumbnail" className="trending-img" data-alt="A sophisticated, black-and-white portrait of a modern jazz saxophonist. The lighting is cinematic, with strong chiaroscuro highlighting the contours of the artist's face and the metallic gleam of the instrument. The mood is elegant, introspective, and highly refined, aligning with a luxury dark theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbC8fJSGqbbu7U9cVzkIoXOX6peUkUG0q6sMdHEN2KG5bT6I8__TuywskMpyZStLHMMjbAgJWR6Hs_unDLOD-yGdyrob0wKQ3ZFNTRBX-_e8IKZ03dmh-0rEYZKjZZvWHhMf7VcPLyLzJJYZOs76WiF2WSfOHE8ZXfd-PBnb5uextoDazA0VKZfySlGFtLKiPdoWiBVymDyIwdKLjBxEafLdd1NY_0nyrm2ZO6Jbh8-gWPchuak8fK" />
                <div className="trending-thumb-overlay"></div>
                <div className="trending-play-btn">
                  <span className="material-symbols-outlined icon-fill" data-weight="fill">play_arrow</span>
                </div>
              </div>
              <h3 className="trending-title">Miles Vanguard</h3>
              <p className="trending-genre">Nu-Jazz</p>
            </div>

            {/* Trending Item 4 */}
            <div className="trending-card">
              <div className="trending-thumb-wrap">
                <img alt="Artist Thumbnail" className="trending-img" data-alt="An edgy, low-angle shot of a post-punk rock band in an abandoned warehouse. The lighting is harsh and industrial, with cool blue undertones and stark shadows. The aesthetic is gritty yet polished, capturing raw energy within a premium digital gallery context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkzhj-FXGZhLbmhZPh-XV6fwrs1tCOfJJdLchDbC5dpV09-D_Ub3SwmMe8v0wMQwIOTPD03dVyrk7devg_MgemImsa6eS4WJSilYMB6GzHQt9hmk5LRfm4FxIZ1UOYiAiU3UlYrE96-m88FojROwS8eAV_sZDUbvkP21UoAGKmqrpLKHNmvKSLp8zRsumIxpjbZLflkl_JUi4gJJnWGILoQx9xPcIFD2Xg51cDJ3OgJ2edGTjT5E3r" />
                <div className="trending-thumb-overlay"></div>
                <div className="trending-play-btn">
                  <span className="material-symbols-outlined icon-fill" data-weight="fill">play_arrow</span>
                </div>
              </div>
              <h3 className="trending-title">The Brutalists</h3>
              <p className="trending-genre">Post-Punk</p>
            </div>
          </div>
        </section>

        {/* Featured Artists Bento Grid */}
        <section className="featured-section">
          <h2 className="section-title">Featured Artists</h2>
          <div className="featured-grid">
            <ArtistsCard
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZTAYMprh1Xia-nO5dURPAROcSOrqsGsxfc5RMnwXdQgFgLZZ2Uqwl8f93n0BsiBe9qfj4MuKiIHpLKG3aLnlWqiLoPgUqPHq9y_BcdZ6NDqbfOxfNo158Xp8yyuzhFfsuyDgupbDoQIG6aOORM1-FnPbGLiPWzKjTaO2MkQXBoHRw3bf170kM81aeXjOMJSlv4OhDLvn-hedFgJ97xHtPuNtd_76lmTG0j35Wvn1coC7Du5j9kY8c"
                badge="Pop"
                badgeVariant="badge-secondary"
                name="JUSTIN BIEBER"
                description="Global pop icon delivering chart-topping hits and soulful performances."
                tracks={["Stay", "Peaches", "Ghost", "Sorry", "Love Yourself"]}
                theme="theme-secondary"
            />

            <ArtistCardSmall
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBt9Gmse1LmH09Z8oMGQkXzKTwmEGv9Q1DyVqIZmJG08NFVFMXu_ywc9R_2MPIh2bQHDgVvuFoeRub-zvA9tp7_LN6MQS_s7Jy84tDwvQ_m5DNgUw_TT2bqji6TJ4MgDAbXPC1M2lzQLt2d3MUk9BDtGeBeNsRQ5mxfT6BZgkXQvLN7ikNLeGBOl2y3LgZRgYHlLkKyDLXasCjjNKR3RpKnSwshiIFoTrxHat_7k80b4wXUkopWE9p_"
                badge="R&B / Pop"
                badgeVariant="badge-tertiary"
                name="Rihanna"
                tracks={["Umbrella", "Diamonds", "Stay", "Work", "We Found Love"]}
                theme="theme-tertiary"
            />

            <ArtistCardSmall
                image={samSmithImg}
                badge="Soul / Pop"
                badgeVariant="badge-outline"
                name="Sam Smith"
                tracks={["Stay With Me", "I'm Not The Only One", "Too Good At Goodbyes", "Unholy", "Dancing With A Stranger"]}
                theme="theme-primary"
            />

            <ArtistsCard
                image={duaLipaImg}
                badge="Disco Pop"
                badgeVariant="badge-error"
                name="DUA LIPA"
                description="The modern queen of disco-infused pop anthems and high-energy performances."
                tracks={["Levitating", "Don't Start Now", "Physical", "Houdini", "Training Season"]}
                theme="theme-error"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">SONIC IMMERSION</div>
          <div className="footer-links">
            <a className="footer-link" href="#">Privacy Policy</a>
            <a className="footer-link" href="#">Terms of Service</a>
            <a className="footer-link" href="#">Support</a>
            <a className="footer-link" href="#">Contact</a>
          </div>
          <div className="footer-copy">© 2024 SONIC IMMERSION. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  )
}
