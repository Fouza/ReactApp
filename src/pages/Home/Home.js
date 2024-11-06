import Container from "../../components/Container/Container"
import { ITEMS } from "../../data/data"


const Home = () => {

    return (
        <div className='main'>
            <section>
                {ITEMS.map(({ img, text }) => (
                    <Container img={img} text={text} />
                ))}
            </section>
            <div className="small-boxes">
                <div className="small-box">Gloss<br />
                    <img src="images/glossproduct.jpg" className="glossproduct" />
                </div>
                <div className="small-box">Beauty Blender<br />
                    <img src="images/blender.jpg" className="blender" />
                </div>
                <div className="small-box">Eyeliner<br />
                    <img src="images/eyeliner.jpg" className="eyeliner" />
                </div>
            </div>


            <div className="last-section">
                <div className="item">Nails</div>
                <div className="item">Blush</div>
                <div className="item" id="item3">Mascara</div>
            </div>


            
        </div>
    )
}

export default Home