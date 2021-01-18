import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg1 from '../assets/1.jpeg';
import forestImg2 from '../assets/2.jpeg';
import forestImg3 from '../assets/3.jpeg';
import forestImg4 from '../assets/4.jpeg';
import forestImg5 from '../assets/5.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item style={{'height':'675px'}}>
                       <img
                       className="d-block w-100"
                       src={forestImg1}
                       alt="Fon"
                       />
                       <Carousel.Caption>
                           <h1>Аптека</h1>
                           <p style={{'height':'300px'}}>Аптека — медично-санітарний заклад, що виготовляє і відпускає ліки за рецептами,
                               продає готові лікарські засоби, які дозволено відпускати без рецепта,
                               лікарські мінеральні води,
                               предмети догляду за хворими та інші мед. вироби.</p>
                       </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':'675px'}}>
                        <img
                            className="d-block w-100"
                            src={forestImg2}
                            alt="Fon"
                        />
                        <Carousel.Caption >
                            <h3>Лікарські засоби </h3>
                            <p> — речовини або суміші речовин, що вживають для профілактики, діагностики, лікування захворювань, запобігання вагітності, усунення болю; отримані з крові, плазми крові, органів і тканин людини або тварин, рослин, мінералів, хімічного синтезу</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':'675px'}}>
                        <img
                            className="d-block w-100"
                            src={forestImg3}
                            alt="Fon"
                        />
                        <Carousel.Caption style={{color:'black' ,fontSize: 24}}>
                            <h3>Табле́тка</h3>
                            <p> — тверда дозована лікарська форма для внутрішнього застосування (деколи парентерального) або для виготовлення інших лікарських форм, отримувана шляхом пресування лікарських речовин у вигляді пласких або двоякоопуклих кружечків. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':'675px'}}>
                        <img
                            className="d-block w-100"
                            src={forestImg4}
                            alt="Fon"
                        />
                        <Carousel.Caption style={{color:'black' ,fontSize: 24}}>
                            <h3 variant={"dark"}>Медична маска</h3>
                            <p > (хірургічна маска) — одноразовий медичний виріб, який забезпечує бар'єр для мінімізації поширення інфекцій, котрі передаються повітряно-крапельним шляхом, маска-пов'язка на обличчя, що закриває рот і ніс.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}
