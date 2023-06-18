import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const MenuCard = ({title, description, price, clas, imageSrc, setPage}) => {
    return (
        <Box
          bg="white"
          color="black"
          borderRadius="10px"
          className={clas}
        >
          <VStack spacing={30} paddingBottom={20}>
            <img className="cardImg" src={imageSrc} alt={title} />
            <div className="cardHead">
                <>
                    <h3>{title}</h3>
                </>
                <>
                    <h4>{price}</h4>
                </>
            </div>
            <p className="cardText">{description}</p>
            <Link to="not-available" onClick={() => setPage("Cart")}>
              <button aria-label="Add to cart" className="medButton">Add to Cart</button>
            </Link>
          </VStack>
        </Box>
      );
};

export default MenuCard;