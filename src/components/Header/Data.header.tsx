import QuestionCircleOutlined from "../UI/IconsAntD/QuestionCircleOutlined";
import CheckCircleOutlined from "../UI/IconsAntD/CheckCircleOutlined";
import StopOutlined from "../UI/IconsAntD/StopOutlined";

export const tabsData = [
  <>
    <QuestionCircleOutlined />
    <span className="ant-tabs-tab-text first">Не решенные</span>
  </>,
  <>
    <CheckCircleOutlined/>
    <span className="ant-tabs-tab-text second">Решенные</span>
  </>,
  <>
    <StopOutlined />
    <span className="ant-tabs-tab-text third">Ошибки</span>
  </>,
];
