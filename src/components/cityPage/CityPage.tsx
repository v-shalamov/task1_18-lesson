import { useState } from 'react'

function CityPage(): JSX.Element {


  const [city, cityPage] = useState('Turku - это культурная столица Финляндии, и по совместительству первая столица Финляндии, во времена гасподства Швеции этот город называли Åbo')
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1582012463587-328d70c54b6e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')



  function changeToParis(): void {

    if (city === "Turku - это культурная столица Финляндии, и по совместительству первая столица Финляндии, во времена гасподства Швеции этот город называли Åbo") {
      cityPage('Tokio - интересно что большая часть населения Японии живёт имменно в токио и в других больших городах, и очень мало человек живёт в сельской месности, на столько что в Японии тысячи маленьких домов, которые брошены, и заленее туда обсолютно бесплатно');
    } else {
      cityPage('Turku - это культурная столица Финляндии, и по совместительству первая столица Финляндии, во времена гасподства Швеции этот город называли Åbo');
    }

    if (imageSrc === 'https://images.unsplash.com/photo-1582012463587-328d70c54b6e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') {

      setImageSrc('https://images.unsplash.com/photo-1577619383321-b21128930af9?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    } else {
      setImageSrc('https://images.unsplash.com/photo-1582012463587-328d70c54b6e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    }
  }

  return (
    <div className='App'>
      <div className="fotoDiv"> 
        <img src={imageSrc} alt="Paris" className="foto" />
      </div>
      <div className="border">
        <span className="textStyle" >{city}</span >
        <button onClick={changeToParis} className="buttonStyle" >Переверкуть карточку</button>
      </div>
    </div>
  )
}

export default CityPage;