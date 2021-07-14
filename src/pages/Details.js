import { Button, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BarChart from "../charts/Bar";

const Details = () => {
  const history = useHistory();

  return (
    <div className="details-main">
      <div className="general-header">
        <Typography.Title level={2}>User Dashboard</Typography.Title>
      </div>
      <div className="content">
        <Button
          icon={<ArrowLeftOutlined />}
          shape="round"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <div className="chart-section">
          <Typography.Title level={3}>
            Khizram Saeed Purchase Stats
          </Typography.Title>
          <BarChart />
        </div>
        <div className="more-info">
          <Typography.Title level={3}>More Details (if any)</Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default Details;
