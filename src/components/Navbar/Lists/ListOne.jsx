import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ListOne = ({showListOne,setShowListOne,setShowListTwo}) => {
  const handleChangeList = () =>{
    setShowListOne(true)
    setShowListTwo(false)
  }
  return (
    <Link to="/men" style={{ textDecoration: "none" }}>
      <Button variant={showListOne ? 'contained': 'text'} onClick={() => handleChangeList()}>Men</Button>
    </Link>
  );
};

export default ListOne;
