let navbar = () => {
    return `<div id="logo">
    <img src="./images/logo/logo.png" alt="">
</div>

<div id="inputs">
    <input type="text" placeholder="Try 'Liquid Lipstics'" id="query">
    <button id="btn">
        <i class="fa fa-search"></i>
    </button>
</div>

<div id="login">
    <i class="fa fa-user"></i>
    <p>Login / Register</p>
</div>

<div id="icons">
    <i class="fa-regular fa-heart"></i>
    <a href="./cart.html"><i class="fa-solid fa-cart-shopping" style="color: white;"></i></a>
    <i class="fa-solid fa-bullhorn"></i>
</div>`
}

export { navbar };