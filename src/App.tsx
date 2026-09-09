import './App.css'
import samSmithImg from './assets/professional_cinematic_concert_photo_of_sam_smith_performing_on_stage_with.png'
import duaLipaImg from './assets/professional_cinematic_concert_photo_of_a_pop_star_like_dua_lipa_performing_on.png'
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";

import TrendingNow from "./components/TrendingNow/TrendingNow.tsx";

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
        <Header />


        {/* Trending Now Horizontal Scroll */}
        <TrendingNow />

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
      <Footer />

    </div>
  )
}
