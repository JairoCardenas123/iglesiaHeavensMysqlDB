const url = 'http://localhost:7000/api/Creyente'

export const getCreyentes = async()=>{
    try {
        const clientes = await fetch(url);
        const datosClientes = await clientes.json();
        console.log(datosClientes);
        return datosClientes; 
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCreyente = async (creyente) => {
    try {
        await fetch (url,{
            method:'POST',
            body:JSON.stringify(creyente),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html"        
    } catch (error) {
        console.log(error);
    }
};


export const deleteCreyente = async (id) => {
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



export const editarCreyente = async (category,id) => {
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



export const obtenerCreyente = async (id) => {
 
};





