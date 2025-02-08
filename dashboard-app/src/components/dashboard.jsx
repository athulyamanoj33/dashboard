import { Row, Col, Card } from "antd";
import DataTable from "./dataTable";
import LineChart from "./linechart";
import BarChart from "./barchart";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={11}>
          <Card title="Data Table" bordered={false}>
            <div className="chart-container">
              <DataTable />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={10} md={12} lg={11}>
          <Card title="Activity" bordered={false}>
            <div className="chart-container">
              <LineChart />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col xs={24}>
          <Card title="Transition" bordered={false}>
            <div className="chart-container">
              <BarChart />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
