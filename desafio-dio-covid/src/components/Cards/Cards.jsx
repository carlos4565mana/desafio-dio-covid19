import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed){
    return 'Loading...';
  }

  return(
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Covid-19</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Casos ativos de COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Recuperados COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortes"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Morte por COVID-19."
        />
      </Grid>
      

    </div>
  );

}
export default Info;