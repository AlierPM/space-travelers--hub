/* eslint-disable */
import './mission.css';

function Missions(props) {
  const mission = props;
  const { name, desc, id, join, isReserved } = mission;
  return (
    <ul className="buttonList">
      <li className="listItems">
        <h2 className="heading">{name}</h2>
        <p className="paragraph">{desc}</p>
        {isReserved && (
          <div>
            <button className="activeBtn" type="button" onClick={join}>
              {'Active Member '}
            </button>
          </div>
        )}
        {!isReserved && (
          <div>
            <button className="inActiveBtn" type="button" onClick={join}>
              {'Not A Member '}
            </button>
          </div>
        )}
        <button className="leaveBtn" type="button" id={id} onClick={join}>
          {isReserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </li>
    </ul>
  );
}

export default Missions;
