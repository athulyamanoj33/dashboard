import { Layout, Row, Col, Card, DatePicker, Avatar, Typography } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DataTable from "./components/dataTable";
import LineChart from "./components/linechart";
import BarChart from "./components/barchart";
import Dashboard from "./components/dashboard";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            padding: "0 24px",
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <Title
              level={1}
              style={{
                margin: 0,
                color: "#0551f5",
                fontSize: "42px",
                whiteSpace: "nowrap",
              }}
            >
              Overview
            </Title>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DatePicker
              style={{ marginRight: "16px", maxWidth: "100%" }}
              placeholder="Select Date"
            />
            <Avatar size="large" src="https://www.example.com/avatar.png" />
          </div>
        </Header>
        <Layout style={{ marginLeft: 160 }}>
          <Sidebar />
          <Content
            style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/sales"
                element={
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={11}>
                      <Card title="Data Table" bordered={false}>
                        <div style={{ height: "220px", overflow: "hidden" }}>
                          <DataTable />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                }
              />
              <Route
                path="/performance"
                element={
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={10} md={12} lg={11}>
                      <Card title="Line Chart" bordered={false}>
                        <div style={{ height: "220px", overflow: "hidden" }}>
                          <LineChart />
                        </div>
                      </Card>
                    </Col>
                    <Col xs={24} sm={10} md={12} lg={11}>
                      <Card title="Bar Chart" bordered={false}>
                        <div style={{ height: "220px", overflow: "hidden" }}>
                          <BarChart />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
