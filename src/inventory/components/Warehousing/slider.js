import "./slider.css"

function Slider(){
    return (
        <div class="range_container">
            <div class="sliders_control">
                <input id="fromSlider" type="range" min="0" max="100"/>
                <input id="toSlider" type="range" min="0" max="100"/>
            </div>
            {/* <div class="form_control">
                <div class="form_control_container">
                    <div class="form_control_container__time">Min</div>
                    <input class="form_control_container__time__input" type="number" id="fromInput" min="0" max="100"/>
                </div>
                <div class="form_control_container">
                    <div class="form_control_container__time">Max</div>
                    <input class="form_control_container__time__input" type="number" id="toInput" min="0" max="100"/>
                </div>
            </div> */}
        </div>
    )
}

export default Slider;