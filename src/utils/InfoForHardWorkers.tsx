import { notification } from "antd";
// Исключительно для здоровья людей и дальнейшей их продуктивности.
const infoForHardWorkers = () => {
  type NotificationType = "success" | "info" | "warning" | "error";
  const hardWorkerInfo = (type: NotificationType) => {
    notification[type]({
      message: "Вы трудитесь более 30 минут, рекомендую взять перерыв:)",
    });
  };
  const minuts = 1800000;
  setInterval(() => hardWorkerInfo("info"), minuts);
};
export default infoForHardWorkers;
