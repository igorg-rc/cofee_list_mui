import { Grid } from '@material-ui/core'
import React from 'react'
import { CoffeeCard } from './CofeeCard'
import data from '../../mocData.js/CofeeData'

export const Content = () => {

  const getCoffeeMakerCard = (cofeeMakerObj) => {
    return <Grid item xs={12} md={6} lg={4}><CoffeeCard {...cofeeMakerObj} /></Grid>
  }

  return (
    <>
      <Grid container spacing={2}>
        {data.map(cofeeMakerObj => getCoffeeMakerCard(cofeeMakerObj))}
      </Grid>
    </>
  )
}