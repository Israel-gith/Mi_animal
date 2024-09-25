import './App.css'
import  { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid  from '@mui/material/Grid2'
function App() {
  const datos = {
    animal: 'avestruz',
    estado: 'durmiendo',
    imagenUrl: '/avestruz.jpg',
    imageSize: 150,
    imageSize2: 350,
  }
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }

  return (
    <>

    <Stack direction={'row'} spacing={5} alignItems={'center'} justifyContent={'center'}>

    <h1>Soy un {datos.animal} y estoy {datos.estado} acariciame</h1>
    <img className='avestruz' src={datos.imagenUrl} alt='avestruz' style={{width: datos.imageSize, height: datos.imageSize}}/>
    <button onClick={handleClick}>
      Me has acariciado {count} veces
    </button>

    </Stack>
    <br/> <br/>

    <Stack   direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
    <Button variant='contained' size='large' color='secondary'>Hola</Button>

    <br/> <br/>

    <Button variant='outlined' size='small' sx={{color:'orange', backgroundColor: 'blue'}} onClick={handleClick}  disabled >Adios {count}</Button>
   
    <br/> 
   
    <Avatar className='avestruz' src={datos.imagenUrl} alt='avestruz' sx={{width: datos.imageSize2, height: datos.imageSize}}/>
   
    <br/> 

    <Typography variant='h1'>Typography h1</Typography>

    </Stack>


    </>
    

  )
}

export default App




