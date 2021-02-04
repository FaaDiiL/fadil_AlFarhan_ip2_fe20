import { Container, Grid, makeStyles, Paper } from '@material-ui/core'

import aboutViewImg from '../../../img/aboutViewImg.jpg'
import Image from '../../All/CardWithImg'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
  },
  bg: {},
  GroupTitle: {},
}))

function Index() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container direction='column'>
        <Grid item xl={12}>
          <Image imageUrl={aboutViewImg} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index
