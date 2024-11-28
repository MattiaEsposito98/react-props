import ImgNotFound from '../../assets/ImgNotFound.png'
import style from './Card.module.css'

export default function Card({ className = '', title = '', content = '', image, tags = [], published }) {
  const tagsPost = tags.join(' ')

  return (

    published && <div className={`${style.card} ${className}`}>
      <img className={style.image} src={image || ImgNotFound} alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>{title || "Titolo del post"}</h3>
        <p> {tagsPost} </p>
        <p className={style.card_description}>  {content || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident fuga quas eligendi deleniti officiis sint minus sed nemo perspiciatis."}</p>
        <button className={style.button}>Leggi di più </button>
      </div>
    </div>


  )
}