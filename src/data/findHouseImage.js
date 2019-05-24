import gryffindor from '../images/gryffindor.jpg';
import hufflepuff from '../images/hufflepuff.jpg';
import ravenclaw from '../images/ravenclaw.jpg';
import slytherin from '../images/slytherin.jpeg';

const findHouseImage = house => {
  let houseImage = '';

  switch (house) {
    case 'Gryffindor':
      houseImage = gryffindor;
      break;
    case 'Hufflepuff':
      houseImage = hufflepuff;
      break;
    case 'Ravenclaw':
      houseImage = ravenclaw;
      break;
    case 'Slytherin':
      houseImage = slytherin;
      break;
    default:
      houseImage = null;
  }
  return houseImage;
};

export { findHouseImage };
