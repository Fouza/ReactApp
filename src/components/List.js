import { PRODUCTS } from "../data/data"


const List = () => {

    return (
        <section>
            {PRODUCTS.map(product => (
                <div>
                    <p>{product.name}</p>
                    <p>{product.stocked ? 'In stock' : 'Sold out'}</p>
                </div>
            ))}
        </section>
    )
}

export default List