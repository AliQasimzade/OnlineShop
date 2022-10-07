import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ListTwo = ({showListTwo,setShowListOne,setShowListTwo}) => {
  const handleChangeList = () => {
    setShowListOne(false)
    setShowListTwo(true)
   
  }
  return (
    <Link to="/women" style={{ textDecoration: "none" }} >
      <Button variant={showListTwo ? 'contained' : 'text'} onClick={() => handleChangeList()}>Women</Button>
    </Link>
  );
};

export default ListTwo;