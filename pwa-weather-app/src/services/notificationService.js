export function checkTrashHold(currentTemp, trashHold) {
  const notificationsEnabled = Notification.permission === "granted";

  if (notificationsEnabled) {
    if (
      trashHold.type === "exceed" &&
      currentTemp >= parseFloat(trashHold.value)
    ) {
      sendNotification(currentTemp, trashHold);
    } else if (
      trashHold.type === "drop" &&
      currentTemp <= parseFloat(trashHold.value)
    ) {
      sendNotification(currentTemp, trashHold);
    }
  }
}

function sendNotification(currentTemp, tempThreshold) {
  new Notification(
    `Temperature Alert! 
    Current temperature is ${currentTemp}°C, which has ${
      tempThreshold.type === "exceed" ? "reached or exceeded" : "dropped below"
    } your threshold of ${tempThreshold.value}°C.`
  );
}
