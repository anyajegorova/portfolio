import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardDev = ({ image, content, alt, description }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image={image}
                        alt={alt}>
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {content}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {description}
                            </Typography>
                        </CardContent>
                    </CardMedia>
                </CardActionArea>

                <CardActions>
                    <Button size='small' color='primary' >
                        See
                    </Button>
                </CardActions>

            </Card>


        </div>
    )
}

export default CardDev;