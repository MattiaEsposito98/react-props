import style from './Card.module.css'

export default function Card({ className = '', title = '', content = '', image, tags = [] }) {
  const tagsPost = tags.join(',')

  return (
    <div className={style.card}>
      <img className={style.image} src="https://picsum.photos/200/300" alt="" />
      <div className={style.card_body}>
        <h3 className={style.card_title}>Titolo del post</h3>
        <p> {tagsPost} </p>
        <p className={style.card_description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident fuga quas eligendi deleniti officiis sint minus sed nemo perspiciatis.</p>
        <button className={style.button}>Leggi di più </button>
      </div>
    </div>
  )
}