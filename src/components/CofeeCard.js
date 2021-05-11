import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const CoffeeCard = (props) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const { avatarUrl, title, subtitle, description, imageUrl } = props

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader 
        avatar={<Avatar src={avatarUrl} />}
          
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style={{ height: "500px" }}
        image={imageUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color="secondary" variant="contained">Bye now</Button>
        <Button size="large" color="primary" variant="contained">Offer</Button>
      </CardActions>
    </Card>
  )
}