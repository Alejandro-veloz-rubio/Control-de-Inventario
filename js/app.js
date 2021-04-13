let Producto=function(nombre,id,cantidad,precio){
    this.nombre=nombre;
    this.id=id;
    this.cantidad=cantidad;
    this.precio=precio;
    this.info=function(){
        return '<div> Nombre del producto: '+this.nombre+'<br> ID del producto: '+this.id+
        '<br> Cantidad disponible: '+this.cantidad+'<br> Precio por unidad: $'+this.precio+'<div>'
    }
}


let Inventario=function(){
    this.productos=new Array();
    this.agregar=function(nuevo){
        this.productos.push(nuevo);
    }
    this.buscar=function(nombre){
        let res2="";
        this.encontrado=this.productos.find(elemento => elemento.id == nombre)
        if(this.encontrado!=undefined)
        {
            res2=this.encontrado.info();
            return res2;
        }
        else
        {
            alert('No se ha encontrado un producto con el ID proporcionado')
            res2="";
            return res2;
        }
        
    }
    this.listar=function(){
        let res="";
        for(let i=0;i<this.productos.length;i++)
        {
          res+=this.productos[i].info()+'<br>';
        }
        return res;

    }
    this.eliminar=function(nombre){
        let siBorro=false
        for (let i=0;i<this.productos.length;i++)
        if   (this.productos[i].id==nombre){
            this.productos.splice(i,1);
              siBorro=true;
              alert('Se borro con exito el Producto')
           }
    return siBorro;

        
    }
}

let grupodepro= new Inventario();

let guardar=document.getElementById('btnCrear');
guardar.addEventListener('click',()=>{
    let nom,id,cant,pre;
    nom=document.getElementById('nomproducto').value;
    id=document.getElementById('idproducto').value;
    cant=document.getElementById('cantproducto').value;
    pre=document.getElementById('preproducto').value;
    let product=new Producto(nom,id,cant,pre);
    grupodepro.agregar(product);
    alert('Se agrego exitosamente el producto');
});

let listar=document.getElementById('btnListar');
listar.addEventListener('click',()=>{
    let res=document.getElementById('resultados');
    res.innerHTML='<h1>Listado</h1>'+grupodepro.listar();
});

let buscar=document.getElementById('btnBuscar');
buscar.addEventListener('click',()=>{
    let res2=document.getElementById('resultados2');
    let idabus=document.getElementById('buscarid').value;
    res2.innerHTML=grupodepro.buscar(idabus);
});

let eliminar=document.getElementById('btnEliminar');
eliminar.addEventListener('click',()=>{
    let iddelet=document.getElementById('buscarid').value;
    grupodepro.eliminar(iddelet);
});