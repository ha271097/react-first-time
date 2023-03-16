import { Container, Typography } from '@material-ui/core';
import { Margin } from '../../components/variable';
import avatar from "../../static/image/avatar.jpg"
import { FrameWorkButton, MyButton, useWorkStyles } from './worksStyles';

export default function Work() {
  const workStyles = useWorkStyles();
  return (
    <Container maxWidth="lg">
      <div className={workStyles.container}>
        <Typography className={workStyles.avatar}>
          <img src={avatar} alt="Avatar" />
        </Typography>
        <Typography>
          <Typography variant='h3'>
            Hi, I'm Ha NQ and I'am a
            <span className={workStyles.titleWork}> Fresher React Js Developer</span>
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, neque ducimus voluptate nobis dignissimos, laborum molestias adipisci eaque harum animi dicta rerum iusto veritatis a quae error, aliquam nostrum dolore!</p>
          <MyButton variant="contained">
            Contact me
          </MyButton>
          <FrameWorkButton variant="contained" style={{ marginLeft: Margin.M32 }}>
            Check my work
          </FrameWorkButton>
        </Typography>
      </div>
    </Container>
  )
}
