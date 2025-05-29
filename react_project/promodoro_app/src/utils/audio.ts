// Create a simple audio player for notification sounds
export const playNotificationSound = () => {
  const audio = new Audio('/sounds/notification.mp3');
  audio.play().catch(error => {
    console.error('Error playing notification sound:', error);
  });
};
