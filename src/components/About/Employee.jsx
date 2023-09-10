import firstWoman from "../../images/firstWoman.jpg";
import womanPicture from "../../images/woman.jpg";

const Employee = ({ id, firstName, lastName, position, description }) => {
  return (
    <div className="employee">
      <div className="employee-photo-wrapper">
        <img
          src={id === 1 ? firstWoman : womanPicture}
          alt="Zdjęcie pracownika"
          className="employee-photo"
        />
      </div>
      <div className="employee-bio">
        <p className="employee-name p-tag">
          {firstName} {lastName} {position}
        </p>
        <p className="employee-description p-tag">{description}</p>
      </div>
    </div>
  );
};

export default Employee;
