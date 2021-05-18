import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'
import React from 'react'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}))

export const Header = () => {
  const classes = useStyles()
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.typographyStyles}>App title</Typography>
          <AcUnitRoundedIcon />
        </Toolbar>
      </AppBar>
    </>
  )
}
