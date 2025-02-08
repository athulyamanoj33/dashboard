import { Layout, Row, Col, Card} from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DataTable from "./components/dataTable";
import LineChart from "./components/linechart";
import BarChart from "./components/barchart";
import Dashboard from "./components/dashboard";

const {Content } = Layout;


const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
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
      <Row
        gutter={[16, 16]}
        justify="center"
        align="middle"
        style={{ minHeight: '100vh' }}
      >
        <Col xs={24} sm={24} md={16} lg={18}> {/* Increase column size for larger widths */}
          <Card title="Data Table" bordered={false}>
            <div style={{ height: "500px", overflow: "hidden" }}>
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
                        <div style={{ height: "500px", overflow: "hidden" }}>
                          <LineChart />
                        </div>
                      </Card>
                    </Col>
                    <Col xs={24} sm={10} md={12} lg={11}>
                      <Card title="Bar Chart" bordered={false}>
                        <div style={{ height: "500px", overflow: "hidden" }}>
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
