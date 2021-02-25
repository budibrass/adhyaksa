import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PageTransition } from '@steveeeie/react-page-transition';
import axios from 'axios'
import Home from './pages/Home'
import Info from './pages/Info'
import KA from './pages/KejaksaanAgung'
import './styles.css';

// const Links = () => (
//   <>
//     <Link to="/">Home</Link>
//     <Link to="/info">Info</Link>
//   </>
// );

const App = () => {
  const [cinfo, setCinfo] = useState({})
  const [epustaka, setEpustaka] = useState({})
  const [cfavbooks, setCfavbooks] = useState({})
  const [infoKa, setInfoKa] = useState({})
  const [epusKa, setEpusKa] = useState({})
  const [favBooksKa, setFavBooksKa] = useState({})

  useEffect(() => {
    let URL1 = "https://dashboard.iadhyaksa.id/api/catalogs/info"
    let URL2 = "https://dashboard.iadhyaksa.id/api/epustaka/info"
    let URL3 = "https://dashboard.iadhyaksa.id/api/catalogs/favorite-books"
    let URL4 = "https://dashboard.iadhyaksa.id/api/catalogs/info?epustaka_id=10c1bb90-31db-4860-90e5-b30401e56ad1"
    let URL5 = "https://dashboard.iadhyaksa.id/api/epustaka/info?epustaka_id=10c1bb90-31db-4860-90e5-b30401e56ad1"
    let URL6 = "https://dashboard.iadhyaksa.id/api/catalogs/favorite-books?epustaka_id=10c1bb90-31db-4860-90e5-b30401e56ad1"

    const promise1 = axios.get(URL1);
    const promise2 = axios.get(URL2);
    const promise3 = axios.get(URL3);
    const promise4 = axios.get(URL4);
    const promise5 = axios.get(URL5);
    const promise6 = axios.get(URL6);

    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6]).then(function(values) {
      setCinfo(values[0].data.data);
      setEpustaka(values[1].data.data);
      setCfavbooks(values[2].data.data);
      setInfoKa(values[3].data.data);
      setEpusKa(values[4].data.data)
      setFavBooksKa(values[5].data.data)
    });
  }, [])

  return(
    <>
    <Router>
      {/* <Links /> */}
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToTopFromBottom"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route path="/info" component={()=> <Info 
                   cinfo={cinfo} 
                   epustaka={epustaka} 
                   cfavbooks={cfavbooks}/>} />
                <Route path="/ka" component={()=> <KA 
                  infoKa={infoKa}
                  epusKa={epusKa}
                  favBooksKa={favBooksKa} />} />
                <Route path="/" component={()=> <Home />} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </Router>
    </>
  )
}

export default App;