const listadoVehiculos = {
  Toyota: [
    { modelo: 'yaris', anio: 2021, color: 'blanco', precioLista: 1230000 },
    { modelo: 'etios', anio: 2020, color: 'rojo', precioLista: 2340000 },
    { modelo: 'corolla', anio: 2022, color: 'blanco', precioLista: 3450000 },
    { modelo: 'etios', anio: 2020, color: 'azul', precioLista: 4500000 },
    { modelo: 'yaris', anio: 2021, color: 'negro', precioLista: 1230000 },
    { modelo: 'etios', anio: 2020, color: 'verde', precioLista: 2340000 },
    { modelo: 'etios', anio: 2020, color: 'azul', precioLista: 2340000 },
    { modelo: 'yaris', anio: 2021, color: 'negro', precioLista: 12300000 },
    { modelo: 'etios', anio: 2020, color: 'verde', precioLista: 2340000 },
    { modelo: 'etios', anio: 2020, color: 'azul', precioLista: 2340000 },
    { modelo: 'yaris', anio: 2021, color: 'negro', precioLista: 1230000 },
    { modelo: 'etios', anio: 2020, color: 'verde', precioLista: 2340000 },
  ],
  Peugeot: [
    { modelo: '208', anio: 2021, color: 'blanco', precioLista: 2000000},
    { modelo: '208', anio: 2021, color: 'rojo', precioLista: 20000000},
    { modelo: '208', anio: 2021, color: 'blanco', precioLista: 20000000},
    { modelo: '208', anio: 2021, color: 'azul', precioLista: 2000000},
    { modelo: '2008', anio: 2022, color: 'negro', precioLista: 4500000},
    { modelo: '208', anio: 2021, color: 'verde', precioLista: 2000000},
    { modelo: '307', anio: 2020, color: 'azul', precioLista: 2580000 },
    { modelo: '308', anio: 2022, color: 'negro', precioLista: 4005000 },
    { modelo: '3008', anio: 2022, color: 'verde', precioLista: 4500000 },
    { modelo: '305', anio: 2021, color: 'azul', precioLista: 3800000 },
    { modelo: '504', anio: 1980, color: 'negro' , precioLista: 120000000},
    { modelo: '206', anio: 2010, color: 'verde', precioLista: 3050000 },
  ],
  Renault: [
    { modelo: 'sandero', anio: 2021, color: 'blanco', precioLista: 2500000 },
    { modelo: 'fluence', anio: 2021, color: 'rojo', precioLista: 3900000 },
    { modelo: 'kwid', anio: 2020, color: 'blanco', precioLista: 1300000},
    { modelo: 'sandero', anio: 2021, color: 'azul', precioLista: 2500000 },
    { modelo: 'kwid', anio: 2020, color: 'negro', precioLista: 1300000 },
    { modelo: 'kwid', anio: 2020, color: 'verde', precioLista: 1300000 },
    { modelo: 'kwid', anio: 2020, color: 'azul', precioLista: 1300000 },
    { modelo: 'kwid', anio: 2020, color: 'negro' , precioLista: 1300000},
    { modelo: 'kwid', anio: 2020, color: 'verde', precioLista: 1300000 },
    { modelo: '12', anio: 1980, color: 'azul', precioLista: 4500000 },
    { modelo: 'fuego', anio: 2000, color: 'negro', precioLista: 4500000 },
    { modelo: 'kwid', anio: 2020, color: 'verde', precioLista: 1300000 },
  ]
};

const getStringDescriptionFromData = (data) => {
  return 'Modelo: '+data.modelo+'\nAño: '+data.anio+'\nColor: '+data.color+'\nPrecio: $'+data.precioLista+'.-';
}
const getFinalDescriptionFromData = (data) => {
  return 'Modelo: '+data.modelo+', Año: '+data.anio+', Color: '+data.color+', Precio: $'+data.precioLista+'.-\n\n';
}
const precioDolar=375;
const porcentajeInteresVisa=150;
const opcionSalir='Ninguno/a';
const marcas = ['Toyota', 'Peugeot', 'Renault'];
const listadoOpcionesConfirmacion=['SI', 'NO'];
const listadoMetodosPago=['Efectivo - Dolares','Efectivo - Patacones', 'Tarjeta credito - VISA']
let salir=false;
alert("Bienvenido a Autos Locos");
let carrito=[];
while(!salir){
  let listadoMarcasFormateado = '';
  marcas.forEach((valor,indice) => { 
    listadoMarcasFormateado = listadoMarcasFormateado + indice + '. ' + valor+ '\n';
  });
  listadoMarcasFormateado=listadoMarcasFormateado + marcas.length + '. ' + opcionSalir + '\n';
  const mensajeEleccionMarca = 'Escriba el numero de la marca que desea del siguiente listado\n\n'+listadoMarcasFormateado;
  let indiceMarcaElegida = prompt(mensajeEleccionMarca);
  if(indiceMarcaElegida===marcas.length.toString()){
    salir=true;
    continue;
  }
  while (!marcas.includes(marcas[indiceMarcaElegida]) && indiceMarcaElegida!==marcas.length.toString()) {
    indiceMarcaElegida = prompt('Apretaste Mal, elegi otro.\n'+mensajeEleccionMarca);
  }
  if(indiceMarcaElegida===marcas.length.toString()){
    salir=true;
    continue;
  }
  const listadoAutosMarcaElegida = listadoVehiculos[marcas[indiceMarcaElegida]];
  const listadoModelosSinRepeticion=[];
  listadoAutosMarcaElegida.forEach((auto) => { 
    if(!listadoModelosSinRepeticion.includes(auto.modelo)){
        listadoModelosSinRepeticion.push(auto.modelo);
    }
  });
  let listadoModelosFormateado = '';
  listadoModelosSinRepeticion.forEach((valor,indice) => { 
    listadoModelosFormateado = listadoModelosFormateado + indice + '. ' + valor+ '\n';
  });
  listadoModelosFormateado=listadoModelosFormateado + listadoModelosSinRepeticion.length + '. ' + opcionSalir + '\n';
  let modeloElegido= prompt("Que Modelito te Gusto\n"+ listadoModelosFormateado);
  if(modeloElegido===listadoModelosSinRepeticion.length.toString()){
    salir=true;
    continue;
  }
  while (!listadoModelosSinRepeticion.includes(listadoModelosSinRepeticion[modeloElegido]) && modeloElegido!==listadoModelosSinRepeticion.length.toString()) {
    modeloElegido = prompt("Ha Elegido mal su modelo, vuelva a intentar bruto\n"+ listadoModelosFormateado); 
  }
  if(modeloElegido===listadoModelosSinRepeticion.length.toString()){
    salir=true;
    continue;
  }
  const unidadesDisponibles=listadoAutosMarcaElegida.filter((auto) => auto.modelo===listadoModelosSinRepeticion[modeloElegido]);
  const mensajeEleccionUnidad="Si queres alguno de los disponibles ingresa la opción que te gusta.\n\n";
  let listadoUnidadesFormateado = '';
  unidadesDisponibles.forEach((valor,indice) => { 
    listadoUnidadesFormateado = listadoUnidadesFormateado + indice + '. ' + valor.modelo+', modelo: '+valor.anio+', precio: '+valor.precioLista+ '\n';
  });
  listadoUnidadesFormateado=listadoUnidadesFormateado + unidadesDisponibles.length + '. ' + opcionSalir + '\n';
  let unidadElegida = prompt(mensajeEleccionUnidad+listadoUnidadesFormateado+'\n\nDe lo contrario ingrese la palabra salir');
  if(unidadElegida===unidadesDisponibles.length.toString()){
    salir=true;
    continue;
  }
  while (!unidadesDisponibles.includes(unidadesDisponibles[unidadElegida]) && unidadElegida!==unidadesDisponibles.length.toString()) {
    unidadElegida = prompt("Ha Elegido mal la unidad, vuelva a intentar bruto\n"+ listadoUnidadesFormateado); 
  }
  if(unidadElegida===unidadesDisponibles.length.toString()){
    salir=true;
    continue;
  }
  const descripcionUnidadElegida=getStringDescriptionFromData(unidadesDisponibles[unidadElegida]);
  let listadoOpcionesConfirmacionFormateado="";
  listadoOpcionesConfirmacion.forEach((valor,indice) => { 
    listadoOpcionesConfirmacionFormateado = listadoOpcionesConfirmacionFormateado + indice + '. ' + valor+ '\n';
  });
  let idConfirmacion = prompt('La unidad elegida cuenta con las siguientes características: \n\n'+descripcionUnidadElegida+'\n\nConfirma la compra de esta unidad?\n'+listadoOpcionesConfirmacionFormateado);
  while (!listadoOpcionesConfirmacion.includes(listadoOpcionesConfirmacion[idConfirmacion])) {
    idConfirmacion = prompt('Ha ingresado una opción incorrecta.\n\nLa unidad elegida cuenta con las siguientes características: \n\n'+descripcionUnidadElegida+'\n\nConfirma la compra de esta unidad?\n'+listadoOpcionesConfirmacionFormateado); 
  }
  if(listadoOpcionesConfirmacion[idConfirmacion]==='SI'){
    carrito.push(unidadesDisponibles[unidadElegida]);
  }
  let otroTutu = prompt('Queres otro tutu?\n'+listadoOpcionesConfirmacionFormateado);
  while (!listadoOpcionesConfirmacion.includes(listadoOpcionesConfirmacion[otroTutu])) {
    otroTutu = prompt('Ha ingresado una opción incorrecta.\n\nQueres otro tutu?\n'+listadoOpcionesConfirmacionFormateado); 
  }
  if(listadoOpcionesConfirmacion[otroTutu]==='NO'){
    salir=true;
  }
}

if(carrito.length===0){
  alert('Chau rata.');
}else{
  const valorInicial = 0;
  const sumatoriaPrecios = carrito.reduce(
    (accumulator, currentValue) => accumulator + currentValue.precioLista,
    valorInicial
  );
  let descripcionCompra='';
  carrito.forEach((unidadComprada, indice) => {
    descripcionCompra = descripcionCompra + (indice+1) + ') '+getFinalDescriptionFromData(unidadComprada);
  });
  alert('Este es el resumen de tu comprita:\n\n'+descripcionCompra);
  let listadoMetodosPagoFormateado="";
  listadoMetodosPago.forEach((valor,indice) => { 
    listadoMetodosPagoFormateado = listadoMetodosPagoFormateado + indice + '. ' + valor+ '\n';
  });
  let metodoPagoElegido = prompt('El total de tu compra es $'+sumatoriaPrecios+'.-\n\n¿Como desea garpar?\n'+listadoMetodosPagoFormateado);
  while (!listadoMetodosPago.includes(listadoMetodosPago[metodoPagoElegido])) {
    metodoPagoElegido = prompt('Ha ingresado una opción incorrecta.\n\nEl total de tu compra es $'+sumatoriaPrecios+'.-\n\n¿Como desea garpar?\n'+listadoMetodosPagoFormateado); 
  }
  switch(listadoMetodosPago[metodoPagoElegido]){
    case 'Efectivo - Dolares':
      const valorEnDolares=sumatoriaPrecios/precioDolar;
      alert('Tenes que garparme '+valorEnDolares+' dolares');
      break;
    case 'Efectivo - Patacones': 
      alert('Tenes que garparme '+sumatoriaPrecios+' dolares');
      break;
    default: {
      const valorEnDolares=(sumatoriaPrecios*porcentajeInteresVisa)/100;
      alert('Tenes que garparme '+valorEnDolares+' con tu tarjeta')
    }
  }
  alert('Gracias campeón por confiar en Autos Locos\nSi no te llega el auto no te preocupes.');
}