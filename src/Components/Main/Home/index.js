import { Container, Grid, makeStyles, Paper } from '@material-ui/core'

import aboutViewImg from '../../../img/aboutViewImg.jpg'
import Image from '../../All/CardWithImg'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    
  },
  
  wrapper: {
    display:'flex',
    JustifyContent:'flex-end',
    [theme.breakpoints.up('md')]:{
    },
    [theme.breakpoints.up('lg')]:{
      maxWidth: 800,
    }

  },
}))

function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
    <Grid container  spacing={1} className={classes.wrapper}>
        
          <Grid item xs={12} sm={6} md={4}>
            <Image className={classes.root} imageUrl={aboutViewImg} title={'Me And my daughter'} />
            
          </Grid>
      </Grid>
    </div>

  )
}

export default Index
