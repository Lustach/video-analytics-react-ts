import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// import EyeIcon from "@/assets/icons/eye.svg"
// import EyeIcon from "../../assets/icons/eye.svg"

export default function BasicCard(
  props: { title: string, disabled?: boolean, width?: number, height?: number, icon: string }
) {

  return (
    <Card sx={{ width: 320, height: 320, margin: 2, display:'flex', justifyContent: 'center', flexDirection:'column'}}>
      <img src={props.icon} className="logo" alt="Vite logo" />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title} 
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
    </Card>
  );
}