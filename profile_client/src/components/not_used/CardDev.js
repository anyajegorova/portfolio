import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const CardDev = ({ image, content, alt, description }) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='150'
                    image={image}
                    alt={alt} />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {content}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardActions>
                <Button size='large' color='primary' >
                    See
                </Button>
            </CardActions>

        </Card>
    )
}

export default CardDev;