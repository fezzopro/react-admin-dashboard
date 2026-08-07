import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar/Topbar';
import Sidebar from './scenes/global/Sidebar/Sidebar';
import Dashboard from './scenes/Dashboard';
import Team from './scenes/Team';
import Invoices from './scenes/Invoices';
import Contacts from './scenes/Contacts';
import Bar from './scenes/Bar';
import Form from './scenes/Form';
import Line from './scenes/Line';
import Pie from './scenes/Pie';
import FAQ from './scenes/FAQ';
import Geography from './scenes/Geography';
import Calendar from './scenes/Calendar';
import Login from './scenes/Login';

function App() {
  const [theme, coloMode] = useMode();
  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
