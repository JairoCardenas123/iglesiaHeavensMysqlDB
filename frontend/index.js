import { getCreyentes,nuevaCreyente,deleteCreyente,editarCreyente } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})
const tablaClientes = document.querySelector("#categories")


async function cargaClientes(){
    const clientes = await getCreyentes();
    console.log(clientes);
    clientes.forEach(element=>{
        const {ididentificacion ,nombres, email ,NroCelular,direccion} = element
        tablaClientes.innerHTML +=`
                          
        <tr>
        <th scope="row">${ididentificacion}</th>
        <td>${nombres}</td>
        <td>${email}</td>
        <td>${NroCelular}</td>
        <td>${direccion}</td>
        <td> <button class="btn btn-danger delete" id="${ididentificacion}">Delete</button></td>
        <td><button type="button" class="btn btn-warning update" data-bs-toggle="modal" id="${ididentificacion}"  data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >update</button></td>
      </tr>
      `
    })
}

tablaClientes.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id=e.target.getAttribute('id');
        editarCreyente(id);
    }
})

const borrar=(id)=>{
    const confir = confirm("desea eliminarlo");
    if(confir){
        console.log("uno");
        deleteCreyente(id);
    }
}

/* LISTAR CATEGORIAS  - CRUD (R) */



/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formInsert=document.querySelector('#insertFormulario')

formInsert.addEventListener('submit',(e)=>{
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const nombres=document.querySelector('#name').value;
    const email=document.querySelector('#description').value;
    const NroCelular=document.querySelector('#image').value;
    const categoria = {
        nombres,
        email,
        NroCelular,
    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return nuevaCreyente(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}


/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)

const getCliente=async(id)=>{
    const data=await categoria(id);
    const {ididentificacion ,nombres, email ,NroCelular} =data[0];
    console.log(data);
    console.log(ididentificacion);
    document.querySelector('#idUpdate')
    document.querySelector('#CategoriaNombreUpdate')
    document.querySelector('#DescripcionUpdate')
    document.querySelector('#ImagenUpdate')

}




