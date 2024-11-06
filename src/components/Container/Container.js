

const Container = ({ img, text }) => {

    return (
        <div class="container">
            <img src={`images/${img}`} class="bag" />
            <p class="fs-lg">{text}</p>
        </div>
    )
}

export default Container