const url = 'http://localhost:7000/api/Creyente'

export const getClientes = async()=>{
    try {
        const clientes = await fetch(url);
        const datosClientes = await clientes.json();
        console.log(datosClientes);
        return datosClientes; 
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCategoria = async (categoria) => {
    try {
        await fetch (url,{
            method:'POST',
            body:JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html"        
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
};



export const editarCategory = async (category,id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'PUT',
            body:JSON.stringify(category),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
 
};



export const obtenerCategory = async (id) => {
 
};





