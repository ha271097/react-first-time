import { Container, Link, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react'
import { useHeaderStyles } from './headerStyle';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { Margin } from '../../components/variable';


export default function Header() {
  const classes = useHeaderStyles();
  const [state, setState] = useState(0);

  const plusValue = () => {
    setState(state + 1);
  }

  const callApi = () => {
    fetch("https://uat-ewallet.vetc.com.vn/ewallet-backend/api/ap_params?limit=10&page=1&parGroup=&parName=&parType=&parValue=&start=1")
      .then((response) => response.json())
      .then((data) => console.log(data)).catch(({ message }) => console.log(message, message));
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png" />
      <Typography className={classes.link}>
        <Link href="#">
          Work
        </Link>
        <Link href="#">
          Resume
        </Link>
        <Link href="#">
          Contact
        </Link>
      </Typography>
      <Typography className={classes.icon}>
        <Typography>
          <span>ENG</span>
          <span> | </span>
          <span>PL</span>
        </Typography>
        <Typography>
          <GitHub />
          <LinkedIn style={{ marginLeft: Margin.M5 }} />
        </Typography>
      </Typography>
    </Container>
  )
}
