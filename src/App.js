import './App.css';
import Paper from '@mui/material/Paper';
import { Sidebar, Menu, MenuItem /*,SubMenu*/ } from 'react-pro-sidebar';
import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';

function App() {
  const chart_data = [
    { argument: 'Upcoming', value: 10 },
    { argument: 'Ongoind', value: 40 },
    { argument: 'Compleated', value: 10 },
  ];

  return (
    <div className="App">
      <div className="side-navbar">
        <Sidebar
          defaultCollapsed={true}
          collapsed={true}
          collapsedWidth={'60px'}
          backgroundColor="white"
        >
          <Menu>
            <MenuItem>
              <img id="nav-icon-home" src="./assets/1.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/2.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/3.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/4.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/5.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/6.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/7.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/8.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/9.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/10.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/11.png" alt="" />
            </MenuItem>
            <MenuItem>
              <img id="nav-icon" src="./assets/12.png" alt="" />
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className="main-dashboard">
        <div className="dashboard-head">
          <h2>Dashboard</h2>
        </div>
        <div className="chart-boxes">
          <div className="chart-box">
            <Paper>
              <h4>Orders</h4>
              <Chart data={chart_data} height={150}>
                <PieSeries
                  valueField="value"
                  argumentField="argument"
                  innerRadius={0.7}
                />
              </Chart>
              <div id="data-1">
                <h5>Upcomming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <div id="data-2">
                <h5>
                  Ongoing
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  15
                </h5>
              </div>
              <div id="data-3">
                <h5>Compleated &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <br />
            </Paper>
          </div>
          <div className="chart-box">
            <Paper>
              <h4>Trip</h4>
              <Chart data={chart_data} height={150}>
                <PieSeries
                  valueField="value"
                  argumentField="argument"
                  innerRadius={0.7}
                />
              </Chart>
              <div id="data-1">
                <h5>Upcomming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <div id="data-2">
                <h5>
                  Ongoing
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  15
                </h5>
              </div>
              <div id="data-3">
                <h5>Compleated &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <br />
            </Paper>
          </div>
          <div className="chart-box">
            <Paper>
              <h4>Revenue</h4>
              <Chart data={chart_data} height={150}>
                <PieSeries
                  valueField="value"
                  argumentField="argument"
                  innerRadius={0.7}
                />
              </Chart>
              <div id="data-1">
                <h5>Upcomming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <div id="data-2">
                <h5>
                  Ongoing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15
                </h5>
              </div>
              <div id="data-3">
                <h5>Compleated &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <br />
            </Paper>
          </div>
          <div className="chart-box">
            <Paper>
              <h4>Expences</h4>
              <Chart data={chart_data} height={150}>
                <PieSeries
                  valueField="value"
                  argumentField="argument"
                  innerRadius={0.7}
                />
              </Chart>
              <div id="data-1">
                <h5>Upcomming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <div id="data-2">
                <h5>
                  Ongoing
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  15
                </h5>
              </div>
              <div id="data-3">
                <h5>Compleated &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10</h5>
              </div>
              <br />
            </Paper>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="quick-action">
          <h4>Quick Action</h4>
          <Paper>
            <div className="quick-action-nav">
              <img id="quick-action-img1" src="./assets/q1.png" alt="" />
              <img id="quick-action-img2" src="./assets/q2.png" alt="" />
              <img id="quick-action-img3" src="./assets/q3.png" alt="" />
              <img id="quick-action-img4" src="./assets/q4.png" alt="" />
              <img id="quick-action-img5" src="./assets/q5.png" alt="" />
            </div>
          </Paper>
        </div>
      </div>
      <div className="extra-content">
        <h3>Todays Highlight</h3>
        <div className="extra-content-exp-rev">
          <Paper>
            <div className="extra-income">
              <h5>Income</h5>
              <h4>10000 CAD</h4>
            </div>
          </Paper>
          <div id="for-space"></div>
          <Paper>
            <div className="extra-expence">
              <h5>Revenue</h5>
              <h4>50000 CAD</h4>
            </div>
          </Paper>
        </div>
        <div className="compleated-activity">
          <h4>Compleated Activities</h4>
          <div className="compleated-activity-list">
            <Paper>
              <p>
                In publishing and graphic design, <b>Lorem ipsum</b> is a
                placeholder text commonly used to demonstrate
              </p>
            </Paper>
            <Paper>
              <p>
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the{' '}
                <b>final copy is available.</b>
              </p>
            </Paper>
            <Paper>
              <p>
                In publishing and <b>graphic design</b>, Lorem ipsum is a
                placeholder
              </p>
            </Paper>
            <Paper>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to <b>demonstrate the visual form</b> of a
                document
              </p>
            </Paper>
            <Paper>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonl
              </p>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
