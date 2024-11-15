import { useContext } from "react";
import SettingContext from "../../context/SettingContext";

const TempSettings = () => {
  const { trashHold, setTrashHold } = useContext(SettingContext);

  const handleThresholdChange = (e) => {
    const { name, value } = event.target;
    setTrashHold((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const handleSaveSettings = () => {
    localStorage.setItem("tempThreshold", trashHold.value);
    localStorage.setItem("tempThresholdType", trashHold.type);
    alert("Settings saved!");
  };

  return (
    <>
      <div className="mb-4">
        <h4>Temperature Threshold</h4>
        <div className="form-group">
          <label htmlFor="thresholdInput">Set Temperature Threshold (°C)</label>
          <input
            type="number"
            name="value"
            value={trashHold.value}
            onChange={handleThresholdChange}
            className="form-control"
            id="thresholdInput"
            placeholder="Enter temperature threshold"
          />
          <small className="form-text text-muted">
            You will be notified based on your selected preference below.
          </small>
        </div>

        <div className="form-group mt-3">
          <label>Notification Preference:</label>

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="thresholdTypeExceed"
                value="exceed"
                checked={trashHold.type === "exceed"}
                onChange={handleThresholdChange}
              />
              <label className="form-check-label" htmlFor="thresholdTypeExceed">
                Notify when temperature meets or exceeds the threshold
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="thresholdTypeDrop"
                value="drop"
                checked={trashHold.type === "drop"}
                onChange={handleThresholdChange}
              />
              <label className="form-check-label" htmlFor="thresholdTypeDrop">
                Notify when temperature meets or drops below the threshold
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSaveSettings}>
        Save Settings
      </button>
    </>
  );
};
export default TempSettings;
