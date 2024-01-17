import NewYear from './assets/fireworks.jpg'
import  Title  from './componentes/Title'
import Contador from './componentes/Contador'
import countDown from './hooks/UserCountDown'
import './App.css'


function App() {
  const [day, hour, minute, second] = countDown ('Jan 1, 2025 00:00:00')

  return (
   <div className="App" style={{backgroundImage:`url(${NewYear})`}}>

    <div className='container'>
    <Title title='Contagem Regressiva'/>
      <div className='contagemRegressiva'>
        <Contador title='Dias' number={day}/>
        <div className='tempo'>
        <Contador title='Horas' number={hour}/>
        <span className='pontos'>:</span>
        <Contador title='Minutos' number={minute}/>
        <span className='pontos'>:</span>
        <Contador title='Segundos' number={second}/>
        </div>
      </div>

    </div>

   </div>
  )
}

export default App
