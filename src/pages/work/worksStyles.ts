import { Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Color, Margin } from '../../components/variable';
export const useWorkStyles = makeStyles({
  container: {
    display: "flex", // kéo ngang element
    columnGap: "32px", // các phần tử con cách nmhau theo chiều ngang
    alignItems: "center", // căn giữ các phần tử con
    marginTop: Margin.M32
  },
  titleWork: {
    background: Color.black,
    color: Color.white,
    frontSize: "100px",
    marginLeft: Margin.M32
  },
  avatar: {
    flexBasis: "80%",
    overflow: "hidden", // ẩn nếu vượt quá phần tử cha
    "& img": {
      width: "100%",
      transition: "1s"
    },

    "&:hover": {
      "& img": {
        transform: "scale(1.5)"
      }
    },
  }
});


export const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



export const FrameWorkButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  float: "right"
  
});