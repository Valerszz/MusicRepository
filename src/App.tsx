import './App.css'
import samSmithImg from './assets/professional_cinematic_concert_photo_of_sam_smith_performing_on_stage_with.png'
import duaLipaImg from './assets/professional_cinematic_concert_photo_of_a_pop_star_like_dua_lipa_performing_on.png'

export default function App() {
  return (
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-secondary selection:text-on-secondary">
        {/* TopNavBar */}
        <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-[20px] border-b border-white/10 shadow-none flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
          <div className="font-display-lg text-headline-md tracking-tighter text-primary dark:text-primary">
            SONIC IMMERSION
          </div>
          <div className="hidden md:flex items-center gap-gutter">
            <a
                className="text-secondary dark:text-secondary-container font-bold border-b-2 border-secondary pb-1 font-body-lg text-body-lg"
                href="#"
            >
              Explore
            </a>
            <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity duration-300 font-body-lg text-body-lg"
                href="#"
            >
              Genres
            </a>
            <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity duration-300 font-body-lg text-body-lg"
                href="#"
            >
              Trending
            </a>
            <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors hover:opacity-80 transition-opacity duration-300 font-body-lg text-body-lg"
                href="#"
            >
              My Profile
            </a>
          </div>
          <div className="flex items-center gap-4 text-primary dark:text-primary">
            <button
                aria-label="Notifications"
                className="hover:opacity-80 transition-opacity duration-300 active:scale-95 transition-transform"
            >
            <span className="material-symbols-outlined" data-icon="notifications">
              notifications
            </span>
            </button>
            <button
                aria-label="Profile"
                className="hover:opacity-80 transition-opacity duration-300 active:scale-95 transition-transform"
            >
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            </button>
            {/* Mobile Menu Toggle */}
            <button
                aria-label="Menu"
                className="md:hidden hover:opacity-80 transition-opacity duration-300"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </nav>

        {/* Main Content Canvas */}
        <main className="flex-grow pt-[100px] px-margin-mobile md:px-margin-desktop pb-24 max-w-container-max mx-auto w-full">
          {/* Header */}
          <header className="mb-12 mt-8">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Discover the Vanguard
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Immerse yourself in the sonic landscapes of tomorrow. Explore our curated selection of
              visionary artists defining the current musical epoch.
            </p>
          </header>

          {/* Trending Now Horizontal Scroll */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline-md text-headline-md text-primary">Trending Now</h2>
              <button className="font-label-sm text-label-sm text-secondary hover:text-secondary-container transition-colors uppercase flex items-center gap-1">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="flex overflow-x-auto hide-scrollbar gap-gutter pb-4 -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0 snap-x snap-mandatory">
              {/* Trending Item 1 */}
              <div className="flex-none w-64 md:w-80 group cursor-pointer snap-start">
                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-3">
                  <img
                      alt="Artist Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="A moody, high-contrast promotional photo of an electronic music producer in a dark studio illuminated by neon cyan and magenta lights. The artist is silhouetted against complex modular synthesizers. The visual style is cyberpunk and nocturnal, fitting a premium dark mode aesthetic."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZpQk6bTavW9fI8sNYyKhF1hbEpex5OfVO-ltCKjMLkdSfkanmNTgbcL-LflxQvS6VC9b9bSEaOASd-tdBN_v5hkw3J3MulZVbu42h-fHMLPgzM6Hj-qHH0RySbsIK3PdgCQJHiisZ5HVdIWesyi0l1O-PQde9luPBOUZbYCD2l01K1q5Yl25zcZFaoxw4JiNZG1yQOHqen9wFIAAOrcJp0hn3AR4U1auiIuqBtTDL1u61poHE5kF"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/90 text-on-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(211,251,255,0.5)]">
                  <span
                      className="material-symbols-outlined"
                      data-weight="fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  </div>
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold text-primary truncate">
                  Aetherial Synthesis
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                  Ambient Techno
                </p>
              </div>

              {/* Trending Item 2 */}
              <div className="flex-none w-64 md:w-80 group cursor-pointer snap-start">
                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-3">
                  <img
                      alt="Artist Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="A vibrant, dynamic live performance shot of an indie pop artist on stage. Bathed in deep purple and soft pink spotlighting against a pitch-black background. The artist is mid-performance, exuding energy. The image feels raw, high-fidelity, and perfectly suited for a premium music discovery platform."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSoFB-LtXZlJYa6WE56n5BEFkTyZ9yp4jHvPLTFnFzB294a0TbwdWhDAPAskhzYFmYQHSWbn4lCF7EfGDV-_PLiOuY68Tjct5GnDaNpHEXPI9uG28fAfiSjZchaOT4z2JIqVxasffL-DkZmV7UVVxzLtxk5IMmc24lNYJWNBpV5dz_B6f52BBZQN1nqByg6zsjTOUSN8I7Wk6fTTllfZwnX5HIEjrWqdgCYfG8e6JrldHI5jYws13d"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/90 text-on-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(211,251,255,0.5)]">
                  <span
                      className="material-symbols-outlined"
                      data-weight="fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  </div>
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold text-primary truncate">
                  Neon Reverie
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                  Dream Pop
                </p>
              </div>

              {/* Trending Item 3 */}
              <div className="flex-none w-64 md:w-80 group cursor-pointer snap-start">
                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-3">
                  <img
                      alt="Artist Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="A sophisticated, black-and-white portrait of a modern jazz saxophonist. The lighting is cinematic, with strong chiaroscuro highlighting the contours of the artist's face and the metallic gleam of the instrument. The mood is elegant, introspective, and highly refined, aligning with a luxury dark theme."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbC8fJSGqbbu7U9cVzkIoXOX6peUkUG0q6sMdHEN2KG5bT6I8__TuywskMpyZStLHMMjbAgJWR6Hs_unDLOD-yGdyrob0wKQ3ZFNTRBX-_e8IKZ03dmh-0rEYZKjZZvWHhMf7VcPLyLzJJYZOs76WiF2WSfOHE8ZXfd-PBnb5uextoDazA0VKZfySlGFtLKiPdoWiBVymDyIwdKLjBxEafLdd1NY_0nyrm2ZO6Jbh8-gWPchuak8fK"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/90 text-on-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(211,251,255,0.5)]">
                  <span
                      className="material-symbols-outlined"
                      data-weight="fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  </div>
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold text-primary truncate">
                  Miles Vanguard
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                  Nu-Jazz
                </p>
              </div>

              {/* Trending Item 4 */}
              <div className="flex-none w-64 md:w-80 group cursor-pointer snap-start">
                <div className="relative h-40 md:h-48 rounded-xl overflow-hidden mb-3">
                  <img
                      alt="Artist Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="An edgy, low-angle shot of a post-punk rock band in an abandoned warehouse. The lighting is harsh and industrial, with cool blue undertones and stark shadows. The aesthetic is gritty yet polished, capturing raw energy within a premium digital gallery context."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkzhj-FXGZhLbmhZPh-XV6fwrs1tCOfJJdLchDbC5dpV09-D_Ub3SwmMe8v0wMQwIOTPD03dVyrk7devg_MgemImsa6eS4WJSilYMB6GzHQt9hmk5LRfm4FxIZ1UOYiAiU3UlYrE96-m88FojROwS8eAV_sZDUbvkP21UoAGKmqrpLKHNmvKSLp8zRsumIxpjbZLflkl_JUi4gJJnWGILoQx9xPcIFD2Xg51cDJ3OgJ2edGTjT5E3r"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-secondary/90 text-on-secondary opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(211,251,255,0.5)]">
                  <span
                      className="material-symbols-outlined"
                      data-weight="fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  </div>
                </div>
                <h3 className="font-body-lg text-body-lg font-semibold text-primary truncate">
                  The Brutalists
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">
                  Post-Punk
                </p>
              </div>
            </div>
          </section>

          {/* Featured Artists Bento Grid */}
          <section>
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Featured Artists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Artist Card 1 (Electronic - Large) */}
              <article className="group relative rounded-2xl overflow-hidden md:col-span-2 lg:col-span-2 h-[500px] flex flex-col justify-end bg-surface-container">
                <img
                    alt="Featured Artist Image"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A sweeping, wide-angle cinematic shot of a renowned electronic DJ performing at a massive futuristic festival. The scene is illuminated by lasers in intense neon cyan and deep purples against a dark night sky. The image is high-gloss, premium, and captures the immersive 'Sonic Immersion' brand identity perfectly."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZTAYMprh1Xia-nO5dURPAROcSOrqsGsxfc5RMnwXdQgFgLZZ2Uqwl8f93n0BsiBe9qfj4MuKiIHpLKG3aLnlWqiLoPgUqPHq9y_BcdZ6NDqbfOxfNo158Xp8yyuzhFfsuyDgupbDoQIG6aOORM1-FnPbGLiPWzKjTaO2MkQXBoHRw3bf170kM81aeXjOMJSlv4OhDLvn-hedFgJ97xHtPuNtd_76lmTG0j35Wvn1coC7Du5j9kY8c"
                />
                <div className="absolute inset-0 artist-card-overlay"></div>
                <div className="relative z-10 p-6 md:p-8 w-full glass-panel border-t border-white/10 mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary-container border border-secondary text-secondary font-label-sm text-label-sm uppercase">
                      Pop
                    </span>
                    </div>
                    <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-1">
                      JUSTIN BIEBER
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Global pop icon delivering chart-topping hits and soulful performances.
                    </p>
                  </div>
                  <div className="w-full md:w-64 bg-surface-container-low/80 rounded-xl p-4 border border-white/5">
                    <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-3 border-b border-white/10 pb-2">
                      Top Tracks
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          01
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-secondary transition-colors">
                          Stay
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-secondary opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          02
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-secondary transition-colors">
                          Peaches
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-secondary opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          03
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-secondary transition-colors">
                          Ghost
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-secondary opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          04
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-secondary transition-colors">
                          Sorry
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-secondary opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          05
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-secondary transition-colors">
                          Love Yourself
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-secondary opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artist Card 2 (Pop) */}
              <article className="group relative rounded-2xl overflow-hidden h-[500px] flex flex-col justify-end bg-surface-container">
                <img
                    alt="Featured Artist Image"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A highly stylized, fashion-forward editorial portrait of a pop music icon. The lighting is soft and ethereal with a subtle glow, featuring dominant tones of deep velvet and soft pinks. The artist poses confidently against an abstract, out-of-focus background. High-fidelity glassmorphism aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt9Gmse1LmH09Z8oMGQkXzKTwmEGv9Q1DyVqIZmJG08NFVFMXu_ywc9R_2MPIh2bQHDgVvuFoeRub-zvA9tp7_LN6MQS_s7Jy84tDwvQ_m5DNgUw_TT2bqji6TJ4MgDAbXPC1M2lzQLt2d3MUk9BDtGeBeNsRQ5mxfT6BZgkXQvLN7ikNLeGBOl2y3LgZRgYHlLkKyDLXasCjjNKR3RpKnSwshiIFoTrxHat_7k80b4wXUkopWE9p_"
                />
                <div className="absolute inset-0 artist-card-overlay"></div>
                <div className="relative z-10 p-5 w-full mt-auto flex flex-col h-full justify-end">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-primary-container border border-tertiary text-tertiary font-label-sm text-label-sm uppercase text-[10px]">
                      R&amp;B / Pop
                    </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary truncate">
                      Rihanna
                    </h3>
                  </div>
                  <div className="bg-surface-container-low/80 rounded-xl p-3 border border-white/5">
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        1
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-tertiary transition-colors">
                        Umbrella
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        2
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-tertiary transition-colors">
                        Diamonds
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        3
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-tertiary transition-colors">
                        Stay
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        4
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-tertiary transition-colors">
                        Work
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        5
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-tertiary transition-colors">
                        We Found Love
                      </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artist Card 3 (Jazz/Soul) */}
              <article className="group relative rounded-2xl overflow-hidden h-[500px] flex flex-col justify-end bg-surface-container">
                <img
                    alt="Featured Artist Image"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="An intimate, moody portrait of a neo-soul singer in a dimly lit, upscale lounge. Rich amber and deep violet lighting casts dramatic shadows. The focus is sharp on the artist's expressive face, conveying raw emotion and sophistication. Perfectly aligned with a nocturnal, high-energy yet refined aesthetic."
                    src={samSmithImg}
                />
                <div className="absolute inset-0 artist-card-overlay"></div>
                <div className="relative z-10 p-5 w-full mt-auto flex flex-col h-full justify-end">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-primary-container border border-outline text-on-surface font-label-sm text-label-sm uppercase text-[10px]">
                      Soul / Pop
                    </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary truncate">
                      Sam Smith
                    </h3>
                  </div>
                  <div className="bg-surface-container-low/80 rounded-xl p-3 border border-white/5">
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        1
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-primary transition-colors">
                        Stay With Me
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        2
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-primary transition-colors">
                        I'm Not The Only One
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        3
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-primary transition-colors">
                        Too Good At Goodbyes
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        4
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-primary transition-colors">
                        Unholy
                      </span>
                      </li>
                      <li className="flex items-center gap-2 group/track cursor-pointer">
                      <span className="font-label-sm text-on-surface-variant text-[10px] w-3">
                        5
                      </span>
                        <span className="font-body-sm text-sm text-on-surface truncate group-hover/track:text-primary transition-colors">
                        Dancing With A Stranger
                      </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Artist Card 4 (Rock - Wide) */}
              <article className="group relative rounded-2xl overflow-hidden md:col-span-2 h-[500px] flex flex-col justify-end bg-surface-container">
                <img
                    alt="Featured Artist Image"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="A dynamic, wide-aspect shot of a modern progressive rock band performing in an expansive digital gallery space. The environment features massive LED screens displaying abstract generative art in cyan and magenta. The band members are silhouetted against the bright screens, creating a stunning visual contrast. High-fidelity and immersive."
                    src={duaLipaImg}
                />
                <div className="absolute inset-0 artist-card-overlay"></div>
                <div className="relative z-10 p-6 md:p-8 w-full glass-panel border-t border-white/10 mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary-container border border-error text-error font-label-sm text-label-sm uppercase">
                      Disco Pop
                    </span>
                    </div>
                    <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-1">
                      DUA LIPA
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      The modern queen of disco-infused pop anthems and high-energy performances.
                    </p>
                  </div>
                  <div className="w-full md:w-64 bg-surface-container-low/80 rounded-xl p-4 border border-white/5">
                    <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-3 border-b border-white/10 pb-2">
                      Top Tracks
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          01
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-error transition-colors">
                          Levitating
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-error opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          02
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-error transition-colors">
                          Don't Start Now
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-error opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          03
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-error transition-colors">
                          Physical
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-error opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          04
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-error transition-colors">
                          Houdini
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-error opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                      <li className="flex items-center justify-between group/track cursor-pointer">
                        <div className="flex items-center gap-3 overflow-hidden">
                        <span className="font-label-sm text-label-sm text-on-surface-variant w-4">
                          05
                        </span>
                          <span className="font-body-sm text-on-surface truncate group-hover/track:text-error transition-colors">
                          Training Season
                        </span>
                        </div>
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover/track:text-error opacity-0 group-hover/track:opacity-100 transition-all">
                        play_circle
                      </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-auto bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-white/5 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-gutter gap-unit w-full max-w-container-max mx-auto">
            <div className="font-display-lg text-headline-md text-primary">
              SONIC IMMERSION
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-container transition-colors transition-all duration-200"
                  href="#"
              >
                Privacy Policy
              </a>
              <a
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-container transition-colors transition-all duration-200"
                  href="#"
              >
                Terms of Service
              </a>
              <a
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-container transition-colors transition-all duration-200"
                  href="#"
              >
                Support
              </a>
              <a
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary-container transition-colors transition-all duration-200"
                  href="#"
              >
                Contact
              </a>
            </div>
            <div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-center md:text-right">
              © 2024 SONIC IMMERSION. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>
  );
}
