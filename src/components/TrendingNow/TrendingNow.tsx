import './TrendingNow.css'
import './TrendingCard.css'
import './TrendingCard.tsx';
import TrendingCard from './TrendingCard';


function TrendingNow() {
    return (
        <section className="trending-section">
            <div className="section-header">
                <h2 className="section-title">Trending Now</h2>
                <button className="view-all-btn">
                    View All <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
            <div className="trending-scroll hide-scrollbar">
                <TrendingCard
                    title="AethSerial Synthesis"
                    genre="Ambient Techno"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZpQk6bTavW9fI8sNYyKhF1hbEpex5OfVO-ltCKjMLkdSfkanmNTgbcL-LflxQvS6VC9b9bSEaOASd-tdBN_v5hkw3J3MulZVbu42h-fHMLPgzM6Hj-qHH0RySbsIK3PdgCQJHiisZ5HVdIWesyi0l1O-PQde9luPBOUZbYCD2l01K1q5Yl25zcZFaoxw4JiNZG1yQOHqen9wFIAAOrcJp0hn3AR4U1auiIuqBtTDL1u61poHE5kF"
                    imageAlt="A moody, high-contrast promotional photo of an electronic music producer in a dark studio."
                />
                <TrendingCard
                    title="Neon Reverie"
                    genre="Dream Pop"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCSoFB-LtXZlJYa6WE56n5BEFkTyZ9yp4jHvPLTFnFzB294a0TbwdWhDAPAskhzYFmYQHSWbn4lCF7EfGDV-_PLiOuY68Tjct5GnDaNpHEXPI9uG28fAfiSjZchaOT4z2JIqVxasffL-DkZmV7UVVxzLtxk5IMmc24lNYJWNBpV5dz_B6f52BBZQN1nqByg6zsjTOUSN8I7Wk6fTTllfZwnX5HIEjrWqdgCYfG8e6JrldHI5jYws13d"
                    imageAlt="A vibrant live performance shot of an indie pop artist on stage."
                />
                <TrendingCard
                    title="Miles Vanguard"
                    genre="Nu-Jazz"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCbC8fJSGqbbu7U9cVzkIoXOX6peUkUG0q6sMdHEN2KG5bT6I8__TuywskMpyZStLHMMjbAgJWR6Hs_unDLOD-yGdyrob0wKQ3ZFNTRBX-_e8IKZ03dmh-0rEYZKjZZvWHhMf7VcPLyLzJJYZOs76WiF2WSfOHE8ZXfd-PBnb5uextoDazA0VKZfySlGFtLKiPdoWiBVymDyIwdKLjBxEafLdd1NY_0nyrm2ZO6Jbh8-gWPchuak8fK"
                    imageAlt="A black-and-white cinematic portrait of a modern jazz saxophonist."
                />
                <TrendingCard
                    title="The Brutalists"
                    genre="Post-Punk"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDkzhj-FXGZhLbmhZPh-XV6fwrs1tCOfJJdLchDbC5dpV09-D_Ub3SwmMe8v0wMQwIOTPD03dVyrk7devg_MgemImsa6eS4WJSilYMB6GzHQt9hmk5LRfm4FxIZ1UOYiAiU3UlYrE96-m88FojROwS8eAV_sZDUbvkP21UoAGKmqrpLKHNmvKSLp8zRsumIxpjbZLflkl_JUi4gJJnWGILoQx9xPcIFD2Xg51cDJ3OgJ2edGTjT5E3r"
                    imageAlt="A low-angle shot of a post-punk rock band in an abandoned warehouse."
                />
            </div>
        </section>

    )

}
export default TrendingNow;