import { makeStyles } from '@material-ui/core/styles';
import { Color } from '../../components/variable';

export const useHeaderStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px"
  },
  link: {
    width: "17%",
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      color: Color.black,
      fontWeight: 600,
      "&:hover": {
        textDecoration: "none",
      }
    }
  },
  icon: {
    display: "flex",
    justifyContent: "space-between",
    columnGap: "10px"
  },
});