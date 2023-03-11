import React from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faChecked } from "@fortawesome/free-solid-svg-icons";
import { faStar as faUnchecked } from "@fortawesome/free-regular-svg-icons";

function stars(n) {
    const arr = Array(n).fill("yes")
    arr.push(Array(5-n).fill("no"))
    arr.flat()
    const rate = []
    for (let i=0; i < arr.length; i++) {
        // eslint-disable-next-line
        if (arr[i] == "yes") {
            rate.push(<FontAwesomeIcon icon={faChecked} size="1x" color="orange"/>)
        // eslint-disable-next-line
        } else if (arr[i] == "no") {
            rate.push(<FontAwesomeIcon icon={faUnchecked} size="1x" color="orange"/>)
        }
    }
    return <span>{rate}</span>
};

const TestimonialCard = ({name, rating, comment, imageSrc, clas}) => {
    return (
        <Box
          color="black"
          className={clas}
        >
            <Box
            className="commentBox"
              borderRadius="10px"
              bg="white"
              height="180px"
            >
                <div className="tContents">
                    <div className="tHead">
                        <h3>{name}</h3>
                        {stars(rating)}
                    </div>
                    <p className="comment">{comment}</p>
                </div>
            </Box>
            <img className="userImg" src={imageSrc} alt={name} />
            <div className="outline"></div>
        </Box>
      );
};

export default TestimonialCard;