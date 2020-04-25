import React from 'react'
import {Row, Col} from 'reactstrap'
import styles from './header.module.css'


export const Header = ({headerTitle: { title, subTitle }}) => {
    if(!title){
        return null
    } else{
        return (
            <div className={styles.header}>
                <Row>
                    <Col>
                        <h1 className="text-center">{title}</h1>
                        <p className="text-center">{subTitle}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
