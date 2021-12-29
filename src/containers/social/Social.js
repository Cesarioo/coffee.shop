import React from 'react'
import style from './social.module.css'
import Opinion from '../../components/opinion/Opinion'

import person1 from '..//..//assets//person1.png'
import person2 from '..//..//assets//person2.png'
import person3 from '..//..//assets//person3.png'
import person4 from '..//..//assets//person4.png'
import person5 from '..//..//assets//person5.png'

const Social = () => {
    return (
        <div className={style.social}>
            <div className={style.social_heading} id="Social">
                <h2> See what they think about our shop </h2>
                <h3> Real advices found online</h3>
                <p> Theses are real advices given by people that went in our shop. <br></br>How did they feel about our experience ? <br></br>What could be your experience with it ? <br></br> Discover it now !</p>
            </div>

            <div className={style.social_opinions_first}>
                < Opinion image={person1} text="I love this ! " />
                < Opinion image={person2} text="Truly amazing" />
                < Opinion image={person3} text="I love this coffee shop.  " />
                < Opinion image={person1} text="I love this ! ." />
                < Opinion image={person2} text="Truly amazing" />
            </div>
            <div className={style.social_opinion_second}>
                <Opinion image={person4} text="Such a good service ! " />
                <Opinion image={person5} text="I wonder hooow" />
            </div>
            <div className={style.social_opinions_first}>
                < Opinion image={person1} text="Nothing to say ! So good !" />
                < Opinion image={person2} text=" Absolutely amazing" />
                < Opinion image={person3} text="See you there !" />
            </div>
        </div>
    )
}

export default Social
