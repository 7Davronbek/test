import { FormLabel, Grid, TextField } from '@mui/material'
import { BaseButton } from '@/shared'
import sx from './style.module.scss'

export const FeedbackForm = () => {
  return (
    <Grid className={sx.feedbackForm} container spacing={3}>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-name'}>F.I.O</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={'status-name'}
        />
      </Grid>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-phone'}>Telefon raqam</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={'status-phone'}
        />
      </Grid>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-izoh'}>Izoh</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={'status-izoh'}
        />
      </Grid>

      <Grid item xs={6} />

      <div className={sx.btn}><BaseButton text={'Yuborish'} active={true} /></div>

    </Grid>
  )
}