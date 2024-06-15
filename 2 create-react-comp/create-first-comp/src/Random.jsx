function Random() {
    let number = Math.floor(Math.random() * 100)

    return <h3 style={{'backgroundColor': '#776691'}}>
        Random number = {number}
    </h3>
}

export default Random;