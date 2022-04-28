import React from "react";

import{ fetchData, fetchDailyData, fetchCountries} from './api'

class App extends React.Component{
  async componentDidMount(){
    const data = await fetchCountries();
    console.log(data);
  }
  render(){
    return(
      <div>
        App
      </div>
    )
  }
}
export default App;