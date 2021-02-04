import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import MyCard from '../../All/Card'

// import MediaCard from '../../All/Card'

const useStyles = makeStyles(theme=>({
  root: {
    width:'100vw',
    
  },
  container: {
    [theme.breakpoints.up('md')]:{
      maxWidth: 1200,
    }

  },
  bg: {},
  GroupTitle: {},
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
      <Grid container  spacing={1} className={classes.container}>
        {repositories.map((repo) => (
          <Grid key={repo.id} item xs={12} sm={6} lg={3} >
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
