/* eslint-disable */
import { useSelector, useDispatch } from "react-redux";
import { rocketsCancel, rocketsReserve } from "../../redux/rocket/rocketSlice";
import Rocket from "./rocket";

const Rocketcontainer = () => {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  const reserve = (id) => {
    dispatch(rocketsReserve(id));
  };

  const cancel = (id) => {
    dispatch(rocketsCancel(id));
  };

  return (
    <div>
      {rocketsList.map((rocket) => {
        const { id, rocket_name, description, flickr_images, reserved } =
          rocket;
        return (
          <Rocket
            id={id}
            rocket_name={rocket_name}
            description={description}
            image={flickr_images[0]}
            reserve={reserve}
            cancel={cancel}
            isReserved={reserved}
          />
        );
      })}
    </div>
  );
};

export default Rocketcontainer;
