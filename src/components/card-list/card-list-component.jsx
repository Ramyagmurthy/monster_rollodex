import React from 'react'
import { Card } from '../card/card.component';
import './card-list-style.css'

export const CardList = (props) => (
    <div className='card-list'>{

        //monster is an array here which is coming from yours props
        props.monsters.map(
            monsterObj => (
                <Card key={monsterObj.id} monster={monsterObj}/>
            )
        )
    }
       
    </div>

)