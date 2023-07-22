const SlideFive = () => {
    return (
        <>
            <h1>Animations are hard!</h1>
            <div>
                <p>usually they include A LOT of CSS lines</p>
                <p>And don't get me started on keyframes, easing, and timing </p>
                <div style={{
                    width: '500px',
                }}>

                    <div style={{ width: '100%', height: 0, paddingBottom: '96%', position: 'relative' }}>
                        <iframe src="https://giphy.com/embed/13FrpeVH09Zrb2" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen>
                        </iframe>
                    </div>
                    <p>
                        <a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2">via GIPHY</a></p>
                </div>
            </div>
        </>
    )
}

export default SlideFive;