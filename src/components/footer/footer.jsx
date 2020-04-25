import React from 'react'
import {Row, Col, Card} from 'reactstrap'
import styles from './footer.module.css'
import { AiFillStar } from "react-icons/ai"


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Row>
                <Col>
                    <p className="text-center">Developed by: <a href="http://nazmulhasan.info/" target="_blank" rel="noopener noreferrer">Nazmul Hasan</a></p>
                    <div className={`${styles.star} text-center`}><a href="#" target="_blank" rel="noopener noreferrer">Star <AiFillStar/></a></div>
                </Col>
            </Row>
        </div>
    )
}
