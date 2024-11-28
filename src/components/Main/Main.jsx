import Card from '../Card/Card'
import style from './Main.module.css'

export default function Main() {
  return (
    <main>
      <section className={style.section}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Card />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}