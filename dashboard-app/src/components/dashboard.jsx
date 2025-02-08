import { Row, Col, Card } from "antd";
import DataTable from "./dataTable";
import LineChart from "./linechart";
import BarChart from "./barchart";


const Dashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={11}>
          <Card title="Data Table" bordered={false}>
            <div style={{ height: "220px", overflow: "hidden" }}>
              <DataTable />
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={10} md={12} lg={11}>
          <Card title="Line Chart" bordered={false}>
            <div style={{ height: "220px", overflow: "hidden" }}>
              <LineChart />
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col xs={24}>
          <Card title="Bar Chart" bordered={false}>
            <div style={{ height: "220px", overflow: "hidden" }}>
              <BarChart />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
