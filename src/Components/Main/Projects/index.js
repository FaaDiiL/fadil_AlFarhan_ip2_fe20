import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import MyCard from '../../All/Card'

// import MediaCard from '../../All/Card'

const useStyles = makeStyles(theme=>({
  root: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    
  },
  
  wrapper: {
    display: 'flex',
    JustifyContent: 'flex-end',
    [theme.breakpoints.up('md')]:{
    },
    [theme.breakpoints.up('lg')]:{
      maxWidth: 800,
    }
  },
}))

function Index() {
  const [repositories, setRepositories] = useState([])
  const classes = useStyles()
  useEffect(() => {
    fetch('https://api.github.com/users/FaaDiiL/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])
  
  return (
    <Container className={classes.root}>
      <Grid container  spacing={1} className={classes.wrapper}>
        {repositories.map((repo) => (
          <Grid key={repo.id} item xs={12} sm={6} md={4} lg={4} >
            <MyCard
              title={repo.name}
              date={repo.created_at}
              description={repo.description}
              button={repo.html_url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Index
