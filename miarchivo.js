
// Función del catalogo de compras

let botonCat = document.getElementById("catalogo")
        botonCat.onclick = () => {
                let catalagos = document.getElementById("catalogo2")
                catalagos.innerHTML =  `<div class="cat">
                                        <p> Marca: "Iphone", Modelo: "I13", Precio: "500 USD"</p>
                                        <p> Marca: "Iphone", Modelo: "I12", Precio: "400 USD"</p>
                                        <p> Marca: "Iphone", Modelo: "I11", Precio: "300 USD"</p>
                                        </div>
                                        <div class="cat">
                                        <p> Marca: "Samsung", Modelo: "S22", Precio: "500 USD"</p>
                                        <p> Marca: "Samsung", Modelo: "S21",  Precio: "400 USD"</p>
                                        <p> Marca: "Samsung", Modelo: "S20", Precio: "300 USD"</p>
                                        </div>
                                        <div class="cat">
                                        <p> Marca: "Motorola", Modelo: "E30", Precio: "500 USD"</p>
                                        <p> Marca: "Motorola", Modelo: "E20", Precio: "400 USD"</p>
                                        <p> Marca: "Motorola", Modelo: "E10", Precio: "300 USD"</p>
                                        </div>`

        }


  
    // Eleccion de modelos de celular  


    const productos = [];
  
        function extraerDato () {
                let agrego = document.getElementById("extraelo");
                agrego.onclick = () => {
                 dato = document.getElementById("ingreso").value;
                   

                        if (dato == "I13") {
                        productos.push(500);
                        console.log("- 1 Iphone 13")}

                        else if ( dato == "I12") {
                        productos.push(400);
                        console.log("- 1 Iphone 12")}

                        else if ( dato == "I11") {
                        productos.push(300);
                        console.log("- 1 Iphone 11") }

                        else if ( dato == "S22") {
                        productos.push(300);
                        console.log("- 1 Samsung S22") }

                        else if ( dato == "S21") {
                        productos.push(300);
                        console.log("- 1 Samsung S21") }

                        else if ( dato == "S21") {
                        productos.push(300);
                        console.log("- 1 Samsung S20") }

                        else if ( dato == "E30") {
                        productos.push(300);
                        console.log("- 1 Motorola E30") }

                        else if ( dato == "E20") {
                        productos.push(300);
                        console.log("- 1 Motorola E20") }

                        else if ( dato == "E10") {
                        productos.push(300);
                        console.log("- 1 Motorola E10") }

                        else {alert("No ingreso el modelo correcto, intentelo nuevamente")}

                        console.log(productos)


                  
                  }
        }
        extraerDato();

        //Suma final de la compra

        function sumaDeCompras () {
                let finalizo = document.getElementById("finCompra");
                finalizo.onclick = () => {
                           
                let sum = 0;
                for (let i = 0; i < productos.length; i++) {
                sum += productos[i];
                }       
                       
                let showPrecio = document.getElementById("carrito");
                showPrecio.innerHTML = `<h1>El precio total de su compra es ${sum} USD </h1>` 

                }
        }
        sumaDeCompras();


               









                // while(dato != "fin" ){
                //         switch (dato) {
                //             case "I13":
                //                     productos.push(500);
                //                     console.log("- 1 Iphone 13")
                //                     break;
                //             case "I12":
                //                     productos.push(400);
                //                     console.log("- 1 Iphone 12")
                //                     break;
                //             case "I11":
                //                     productos.push(300);
                //                     console.log("- 1 Iphone 11")
                //                     break;
                //             case "S22":
                //                     productos.push(500);
                //                     console.log("- 1 Samsung S22")
                //                     break;
                //             case "S21":
                //                     productos.push(400);
                //                     console.log("- 1 Samsung S21")
                //                      break;
                //             case "S20":
                //                      productos.push(300);
                //                      console.log("- 1 Samsung S20")
                //                      break;
                //             case "E30":
                //                      productos.push(500);
                //                      console.log("- 1 Motorola E30")
                //                      break;
                //             case "E20":
                //                      productos.push(400);
                //                      console.log("- 1 Motorola E20")
                //                      break;
                //             case "E10":
                //                      productos.push(300);
                //                      console.log("- 1 Motorola E10")
                //                      break;
                //             default:
                //                     alert("No ingreso dato correco, vuelva prontos")
                                   
                               
                //                 break;
                //         }
                        
                //          console.log(productos)
                //          dato = document.getElementById("ingreso");
                //     }
                    
              
                            


        