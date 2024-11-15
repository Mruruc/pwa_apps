import React, { useEffect, useState } from "react";
import TempSettings from "./TempSettings";
import {
  requestGeoLocationPermission,
  requestNotificationPermission,
  updateGeolocationPermission,
  updateNotificationPermission,
} from "../../services/permissionService";

const Settings = () => {
  const [userPermission, setUserPermission] = useState({
    geolocation: "",
    notifications: "",
  });

  useEffect(() => {
    updateGeolocationPermission(setUserPermission);
    updateNotificationPermission(setUserPermission);
  }, []);

  return (
    <div className="my-3">
      <h1 className="mb-4">Settings</h1>

      <div className="mb-4">
        <h4>Permissions Status:</h4>
        <ul className="list-group">

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Geolocation:</strong> {userPermission.geolocation}
            </div>
            {userPermission.geolocation !==
              "Location access is currently granted." && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => requestGeoLocationPermission(setUserPermission)}>
                Enable Location
              </button>
            )}
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Notifications:</strong> {userPermission.notifications}
            </div>
            {Notification.permission !== "granted" && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={()=>requestNotificationPermission(setUserPermission)}>
                Enable Notifications
              </button>
            )}
          </li>

        </ul>
      </div>
      <TempSettings />
    </div>
  );
};

export default Settings;
