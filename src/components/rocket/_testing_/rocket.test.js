/* eslint-disable */
import renderer from 'react-test-renderer';
import Rocket from '../rocket';

const rocket1 = {
  id: 1,
  rocket_name: 'First Space X Rocket',
  describe: 'Details about first space1 rocket',
  image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  reserve: true,
  cancel: true,
  reserved: false,
};

it('Check for the first space x rocket', () => {
  const { id, rocket_name, describe, image, reserve, cancel, reserved } =
    rocket1;
  const firstRocket = renderer
    .create(
      <Rocket
        id={id}
        rocket_name={rocket_name}
        describe={describe}
        image={image}
        reserve={reserve}
        cancel={cancel}
        reserved={reserved}
      />,
    )
    .toJSON();
  expect(firstRocket).toMatchSnapshot();
});

const rocket2 = {
  id: 2,
  rocket_name: 'Second Space X',
  describe: 'More details About Second Space X rocket',
  image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  reserve: false,
  cancel: true,
  reserved: false,
};
it('Check for the Second Space X rocket', () => {
  const {id, rocket_name, describe, image, reserve, cancel, reserved} = rocket2
  const secondRocket = renderer.create(<Rocket
    id = {id}
    rocket_name= {rocket_name}
    describe={describe}
    image={image}
    reserve={reserve}
    cancel={cancel}
    reserved ={reserved}
    />).toJSON();
    expect(secondRocket).toMatchSnapshot();
});

const rocket3 = {
  id: 3,
  rocket_name: 'Third Space X',
  describe: 'More details on the Third space x rocket',
  image: '	https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
  reserve: false,
  cancel: true,
  reserved: true
};
it('Check for the Third Space X Rocket', () => {
  const {id, rocket_name, describe, image, reserve, cancel, reserved} = rocket3;
  const thirdRocket = renderer.create(<Rocket 
  id={id}
  rocket_name= {rocket_name}
  describe={describe}
  image={image}
  reserve ={reserve}
  cancel={cancel}
  reserved ={reserved}
  />)
  expect(thirdRocket).toMatchSnapshot();
});