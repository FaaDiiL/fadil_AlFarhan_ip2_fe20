import { Container, Grid, makeStyles, Paper } from '@material-ui/core'

import aboutViewImg from '../../../img/aboutViewImg.jpg'
import Image from '../../All/CardWithImg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]:{
      flexDirection:'row',
    },
  },
  
  wrapper: {
    maxWidth: '100%',
      paddingLeft: '0px',
    [theme.breakpoints.up('md')]:{
    },
    [theme.breakpoints.up('lg')]:{
      maxWidth: 1000,
      paddingLeft: '100px',

  },
  [theme.breakpoints.up('xl')]:{
    maxWidth: 1000,
   
},

  },

  image: {
    width:'100%',


  }

}))

function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container  spacing={1} className={classes.wrapper}>
        <Grid item xs={12} sm={6} md={4}>
          <img className={classes.image} src={aboutViewImg} alt={'Me and my daughter'} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>Hej</p>
        </Grid>
      </Grid>
    </div>

  )
}

export default Index
