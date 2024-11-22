const productoContent = document.getElementById("productoContent");
const verCarrito = document.getElementById("vercarrito")
const modalContainer = document.getElementById("modal-container");
let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} Bs.</p>
    `;
    productoContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText="Comprar";
    comprar.className="comprar";
    content.appendChild(comprar);

    comprar.addEventListener('click',()=>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })

    });

});
verCarrito.addEventListener('click',()=>{
    const modalHeader = document.createElement("div");
    modalHeader.className="modal-header";
    modalHeader.innerHTML = `
        <h2 class="modal-title">Carrito</h2>
    `;
    modalContainer.append(modalHeader);

    const modalbutton =document.createElement("h1");
    modalbutton.innerText="X";
    modalbutton.className="modal-heather-botton";
    modalHeader.append(modalbutton);
});
