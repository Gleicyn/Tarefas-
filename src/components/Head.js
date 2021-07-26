import React from 'react'

const   Head = (props) =>(

   <thead>
       <tr>
           <th colSpan='4'> 
           <h1>Tabela de livros</h1>         
           </th>
           
       </tr>
       <tr>
       <th colSpan='4'>
           <div className="filtros">

               <button className="filtro" onClick={()=> props.ordenarTitulo() }>Ordenar por Titulo</button>
               <button className="filtro" onClick={()=> props.ordenarAutor() }> Ordenar por autor</button>
           </div>
           
           </th>
       </tr>
       <tr>
           <th>ISBN</th>
           <th>Título</th>
           <th>Autor</th>
           
       </tr>

   </thead>

)
export default Head