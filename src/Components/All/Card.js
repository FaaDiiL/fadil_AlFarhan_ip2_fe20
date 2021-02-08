import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles(theme=>({
  root: {
    [theme.breakpoints.up('xs')]:{
    maxWidth: '100%',
    fontSize: '20',
    },
    minWidth: 215,
    maxWidth: 295,
    minHeight: 150,
    maxHeight: 150,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 2,
  },
}))

function MyCard({ title, date, description, button }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {`${title.substr(0, 1).toUpperCase()}${title
            .substr(1, title.length)
            .toLowerCase()
            .replace('_', ' ')} `}
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          Created:{`${date.substr(0, 10)} ${date.substr(11, 5)}`}
        </Typography>

        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='small' href={button}>
          Go to git
        </Button>
      </CardActions>
    </Card>
  )
}
export default MyCard
