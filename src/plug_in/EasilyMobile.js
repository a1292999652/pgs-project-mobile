export default class EasilyMobile {
    constructor() {
        this.html = document.querySelector('html');
        this.scale = 1;
        this.fontSize = 0;
        this.few = 1
    }

    //解决移动端高清屏幕1像素问题
    viewport = () => {
        let viewport = document.querySelector("meta[name=viewport]");
        this.scale = window.devicePixelRatio;
        this.few = (1 / this.scale).toFixed(6);
        viewport.setAttribute("content", `initial-scale=${this.few}, maximum-scale=${this.few}, minimum-scale=${this.few}`);
        this._handleInitFontSize()
    };
    //动态监听窗口宽度改变HTML标签的fontSize
    _handleChangeFontSize = (event) => {
        let windowWidth = event.target.innerWidth;
        if (windowWidth >= 500) {
            this.html.style.fontSize = 20 * this.scale + "px"
        } else {
            this.html.style.fontSize = windowWidth / 26 * this.scale + "px"
        }
    };
    //初始化HTML标签的fontSize
    _handleInitFontSize = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 500) {
            this.fontSize = 20 * this.scale + "px"
        } else {
            this.fontSize = windowWidth / 26 * this.scale + "px"
        }
        this.html.style.fontSize = this.fontSize;
        window.addEventListener("resize", this._handleChangeFontSize)
    };
}