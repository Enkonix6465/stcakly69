import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, LabelList } from 'recharts';
import mapImg from './assets/world.png';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import { 
  getRegisteredUsers, 
  deleteUser, 
  getUserStatistics 
} from './utils/userRegistration.js';
    // Removed getTotalUsersCount as it is now orphaned

// Section1 (KPI Cards Example)
function Section1() {
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [showRecent, setShowRecent] = useState(false);

  // Load users and stats on component mount and when data changes
  useEffect(() => {
    const loadData = () => {
      const currentUsers = getRegisteredUsers();
      const stats = getUserStatistics();
      setUsers(currentUsers);
      setUserStats(stats);
    };

    loadData();

    // Listen for storage changes to update in real-time
    const handleStorageChange = () => {
      loadData();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events
    window.addEventListener('userRegistrationUpdated', loadData);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userRegistrationUpdated', loadData);
    };
  }, []);


  // Function to delete a user
  const handleDeleteUser = (userId) => {
    const result = deleteUser(userId);
    if (result.success) {
      // Force re-render
      const currentUsers = getRegisteredUsers();
      const stats = getUserStatistics();
      setUsers(currentUsers);
      setUserStats(stats);
    } else {
      alert(result.message || 'Failed to delete user');
    }
  };

  // Get real-time data
  const totalUsers = userStats.total || 1250;

  const kpis = [
    { label: 'Total Clients', value: totalUsers.toString(), color: '#ffe5d0' },
    { label: 'Active Projects', value: (userStats.active || 3).toString(), color: '#d0f4ff' },
    { label: 'This Month', value: (userStats.thisMonth || 2).toString(), color: '#fff9d0' },
    { label: 'Growth Rate', value: totalUsers > 0 ? '+12.5%' : '6%', color: '#f0e0ff' },
  ];
  const cardStyle = (color, clickable) => ({
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    padding: '20px 18px',
    minWidth: 170,
    minHeight: 110,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    position: 'relative',
    overflow: 'hidden',
    cursor: clickable ? 'pointer' : 'default',
  border: clickable ? '2px solid #8F00FF' : 'none',
    transition: 'box-shadow 0.2s, background 0.3s',
  });
  function RegisteredUsersModal({ open, onClose }) {
    if (!open) return null;
    
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,40,60,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} onClick={onClose}>
        <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.13)', padding: '40px 32px', minWidth: 340, maxWidth: 520, width: '90%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
          <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#8ca1a6', cursor: 'pointer' }}>&times;</button>
          <div style={{ fontWeight: 700, color: '#111', fontSize: 22, marginBottom: 18, textAlign: 'center' }}>Registered Users ({users.length})</div>
          <div style={{ marginBottom: 16, textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
              Real user registrations from the welcome page
            </p>
          </div>
          {users.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#8ca1a6', fontSize: 16, padding: '20px' }}>
              No users registered yet. Users will appear here when they sign up on the welcome page.
            </div>
          ) : (
            <div style={{ maxHeight: '400px', overflowY: 'auto', width: '100%' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f6f8fa', borderRadius: 10, overflow: 'hidden', fontSize: 14, color: '#111' }}>
                <thead>
                  <tr style={{ background: '#8F00FF', color: '#fff', fontWeight: 700 }}>
                    <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Email</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Phone</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Source</th>
                    <th style={{ padding: 12, textAlign: 'left' }}>Registration Date & Time</th>
                    <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={user.id} style={{ background: i % 2 === 0 ? '#fff' : '#f6f8fa', color: '#111' }}>
                      <td style={{ padding: 12 }}>{user.name}</td>
                      <td style={{ padding: 12 }}>{user.email}</td>
                      <td style={{ padding: 12 }}>{user.phone || 'N/A'}</td>
                      <td style={{ padding: 12 }}>
                        <span style={{
                          background: '#f0f0f0',
                          color: '#666',
                          padding: '2px 6px',
                          borderRadius: '3px',
                          fontSize: '11px'
                        }}>
                          {user.source || 'Website'}
                        </span>
                      </td>
                      <td style={{ padding: 12 }}>{user.registrationDate}</td>
                      <td style={{ padding: 12, textAlign: 'center' }}>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
                              handleDeleteUser(user.id);
                            }
                          }}
                          style={{
                            background: '#ff4757',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 8px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontWeight: '600'
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .kpi-card:hover {
  background: linear-gradient(90deg, #8F00FF 0%, #8F00FF 100%) !important;
        box-shadow: 0 4px 24px rgba(46,196,182,0.18);
      }
      .kpi-card:hover span {
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px 0 24px 0' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg className="w-12 h-12" style={{ color: '#8F00FF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
        </svg>
        <span style={{ color: '#8F00FF', fontSize: 48, fontWeight: 800, letterSpacing: '-1px' }}>Shoply Admin</span>
      </span>
      <div style={{ color: '#444', fontSize: 20, fontWeight: 500, marginTop: 8, textAlign: 'center' }}>
        Track sales, users, and orders in real time
      </div>
    </div>
  <section style={{ background: 'transparent', borderRadius: 16, marginBottom: 32, padding: 0 }}>
        <div
          className="kpi-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            width: '100%',
            margin: 0,
          }}
        >
          {kpis.map((kpi, idx) => (
            <div
              key={kpi.label}
              className="kpi-card"
              style={{
                ...cardStyle(kpi.color, kpi.label === 'Total Clients'),
                marginRight: idx !== kpis.length - 1 ? 0 : 0 // Remove any custom margin, rely only on grid gap
              }}
              onClick={kpi.label === 'Total Clients' ? () => setShowRecent(true) : undefined}
            >
              <span style={{ fontSize: 20, color: '#2e5d50', fontWeight: 700 }}>{kpi.label}</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#1a3c34', marginBottom: 2 }}>{kpi.value}</span>
            </div>
          ))}
        </div>
      </section>
      <RegisteredUsersModal open={showRecent} onClose={() => setShowRecent(false)} />
    </>
  );
}

// Section2 (Appointments Chart)
function Section2() {
  const filters = ['Today', 'This Week', 'This Month', 'Year Overview'];
  const chartData = {
    'Today': [
      { hour: '8am', value: 2 },
      { hour: '10am', value: 5 },
      { hour: '12pm', value: 8 },
      { hour: '2pm', value: 10 },
      { hour: '4pm', value: 7 },
      { hour: '6pm', value: 7 },
    ],
    'This Week': [
      { day: 'Mon', value: 12 },
      { day: 'Tue', value: 9 },
      { day: 'Wed', value: 15 },
      { day: 'Thu', value: 8 },
      { day: 'Fri', value: 13 },
      { day: 'Sat', value: 10 },
      { day: 'Sun', value: 11 },
    ],
    'This Month': [
      { date: '1', value: 5 },
      { date: '5', value: 8 },
      { date: '10', value: 12 },
      { date: '15', value: 10 },
      { date: '20', value: 15 },
      { date: '25', value: 9 },
      { date: '30', value: 13 },
    ],
    'Year Overview': [
      { month: 'Jan', value: 20 },
      { month: 'Feb', value: 20 },
      { month: 'Mar', value: 45 },
      { month: 'Apr', value: 30 },
      { month: 'May', value: 65 },
      { month: 'Jun', value: 30 },
      { month: 'Jul', value: 75 },
      { month: 'Aug', value: 50 },
      { month: 'Sep', value: 70 },
      { month: 'Oct', value: 40 },
      { month: 'Nov', value: 30 },
      { month: 'Dec', value: 50 },
    ],
  };
  const counts = {
    'Today': 39,
    'This Week': 87,
    'This Month': 320,
    'Year Overview': 1200,
  };
  const xKey = {
    'Today': 'hour',
    'This Week': 'day',
    'This Month': 'date',
    'Year Overview': 'month',
  };
  const [selected, setSelected] = useState('Year Overview');
  const data = chartData[selected];
  const count = counts[selected];
  const xDataKey = xKey[selected];
  const maxValue = Math.max(...data.map(d => d.value));
  const yMax = maxValue <= 10 ? Math.ceil(maxValue / 5) * 5 : Math.ceil(maxValue / 10) * 10;
  return (
  <section style={{ background: 'transparent', borderRadius: 16, marginBottom: 32, padding: 0 }}>
      <style>{`
        @media (max-width: 900px) {
          .section2-chart-outer { padding: 0 2px !important; }
        }
        @media (max-width: 600px) {
          .section2-chart-outer { overflow-x: auto !important; padding: 0 !important; }
          .section2-chart-inner { min-width: 420px !important; width: 420px !important; }
          .section2-filters { flex-wrap: wrap !important; gap: 6px !important; }
        }
      `}</style>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
  <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1a3c34', display: 'flex', alignItems: 'center', gap: 10 }}>
            Projects {selected === 'Today' ? 'Today' : selected === 'This Week' ? 'This Week' : selected === 'This Month' ? 'This Month' : 'This Year'}: <span style={{ color: '#FF4D00', fontSize: 26, fontWeight: 800 }}>{count}</span>
          </div>
          <div className="section2-filters" style={{ display: 'flex', gap: 8 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelected(f)}
                style={{
                  background: selected === f ? '#FF4D00' : '#f6f8fa',
                  color: selected === f ? '#fff' : '#1a3c34',
                  border: selected === f ? '2px solid #1a3c34' : 'none',
                  borderRadius: 20,
                  padding: '6px 18px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 17,
                  transition: 'background 0.2s',
                  boxShadow: selected === f ? '0 2px 8px rgba(46,196,182,0.10)' : 'none',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
  <div className="section2-chart-outer" style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '20px 20px', minHeight: 220, overflowX: 'auto' }}>
          <div style={{ fontWeight: 700, color: '#1a3c34', fontSize: 18, marginBottom: 8 }}>{selected === 'Year Overview' ? 'Year Overview' : selected}</div>
          <div className="section2-chart-inner" style={{ width: '100%', height: 180, minWidth: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF4D00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF4D00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey={xDataKey} tick={{ fontSize: 13, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 13, fill: '#b0b0b0' }} axisLine={false} tickLine={false} domain={[0, yMax]} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <Tooltip
                  content={({ active, payload }) =>
                    active && payload && payload.length ? (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        background: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        borderRadius: 12,
                        border: 'none',
                        padding: '10px 18px',
                        fontWeight: 700
                      }}>
                        {payload.map((entry, i) => (
                          <span key={i} style={{ color: entry.color || '#1a3c34', fontWeight: 700, fontSize: 18 }}>{entry.value}</span>
                        ))}
                      </div>
                    ) : null
                  }
                />
                <Area type="monotone" dataKey="value" stroke="#FF4D00" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section3 (Ecommerce Analytics Overview)
import { PieChart, Pie, Cell, Legend } from 'recharts';
function Section3() {
  // Example ecommerce analytics data
  const salesByCategory = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Home & Kitchen', value: 200 },
    { name: 'Beauty', value: 100 },
  ];
  const ordersByMonth = [
    { month: 'Jan', Orders: 120 },
    { month: 'Feb', Orders: 150 },
    { month: 'Mar', Orders: 180 },
    { month: 'Apr', Orders: 200 },
    { month: 'May', Orders: 170 },
    { month: 'Jun', Orders: 210 },
    { month: 'Jul', Orders: 250 },
    { month: 'Aug', Orders: 230 },
    { month: 'Sep', Orders: 220 },
    { month: 'Oct', Orders: 240 },
    { month: 'Nov', Orders: 260 },
    { month: 'Dec', Orders: 300 },
  ];
  const revenueTrend = [
    { month: 'Jan', Revenue: 12000 },
    { month: 'Feb', Revenue: 13500 },
    { month: 'Mar', Revenue: 15000 },
    { month: 'Apr', Revenue: 17000 },
    { month: 'May', Revenue: 16000 },
    { month: 'Jun', Revenue: 18000 },
    { month: 'Jul', Revenue: 20000 },
    { month: 'Aug', Revenue: 21000 },
    { month: 'Sep', Revenue: 22000 },
    { month: 'Oct', Revenue: 23000 },
    { month: 'Nov', Revenue: 25000 },
    { month: 'Dec', Revenue: 27000 },
  ];
  const COLORS = ['#8F00FF', '#2563eb', '#ffb84d', '#FF4D00'];
  return (
    <section style={{ background: 'transparent', borderRadius: 16, marginBottom: 32, padding: 0 }}>
      <div className="section-container" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Pie Chart: Sales by Category */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, margin: 0, marginBottom: 12 }}>Sales by Category</h2>
          <PieChart width={320} height={220}>
            <Pie data={salesByCategory} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {salesByCategory.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
        {/* Bar Chart: Orders by Month */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 480, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, margin: 0, marginBottom: 12 }}>Orders by Month</h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={ordersByMonth} barSize={28}>
              <XAxis dataKey="month" tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="Orders" fill="#8F00FF" radius={[8,8,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart: Revenue Trend */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 480, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 24, margin: 0, marginBottom: 12 }}>Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={revenueTrend}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 14, fill: '#8ca1a6' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="Revenue" stroke="#2563eb" strokeWidth={3} dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

// Section5 (Trainers, Recent Activity, Social Source)
function Section5() {
  // Recent Orders
  const orders = [
    { id: 'ORD-1001', customer: 'Alice Smith', product: 'Wireless Earbuds', amount: '$59.99', status: 'Delivered', time: 'Just Now', color: '#8F00FF' },
    { id: 'ORD-1002', customer: 'Bob Lee', product: 'Yoga Mat', amount: '$24.99', status: 'Shipped', time: '10 min ago', color: '#2563eb' },
    { id: 'ORD-1003', customer: 'Priya Patel', product: 'Coffee Maker', amount: '$89.00', status: 'Processing', time: '30 min ago', color: '#ffb84d' },
    { id: 'ORD-1004', customer: 'John Doe', product: 'Bluetooth Speaker', amount: '$39.99', status: 'Delivered', time: '1 hr ago', color: '#8F00FF' },
    { id: 'ORD-1005', customer: 'Sara Kim', product: 'Running Shoes', amount: '$120.00', status: 'Cancelled', time: '2 hr ago', color: '#FF4D00' },
  ];
  // Top Products
  const topProducts = [
    { name: 'Wireless Earbuds', sales: 320, color: '#8F00FF' },
    { name: 'Yoga Mat', sales: 210, color: '#2563eb' },
    { name: 'Coffee Maker', sales: 180, color: '#ffb84d' },
    { name: 'Bluetooth Speaker', sales: 150, color: '#8ca1a6' },
    { name: 'Running Shoes', sales: 120, color: '#FF4D00' },
  ];
  // Marketing/Social Stats
  const marketingStats = [
    { name: 'Facebook', value: 125, label: 'Ad Clicks', color: '#3b5998' },
    { name: 'Instagram', value: 104, label: 'Followers', color: '#e1306c' },
    { name: 'Google Ads', value: 98, label: 'Conversions', color: '#4285F4' },
  ];
  return (
    <section style={{ background: 'transparent', borderRadius: 16, marginBottom: 32, padding: 0 }}>
      <div className="section-container" style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Recent Orders */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 22, margin: 0, marginBottom: 12 }}>Recent Orders</h2>
          <div style={{ maxHeight: 220, overflowY: 'auto' }}>
            {orders.map(order => (
              <div key={order.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                <div>
                  <div style={{ fontWeight: 600, color: order.color }}>{order.product}</div>
                  <div style={{ fontSize: 13, color: '#8ca1a6' }}>{order.customer} • {order.amount}</div>
                </div>
                <div style={{ fontSize: 13, color: '#8ca1a6', minWidth: 80 }}>{order.status}</div>
                <div style={{ fontSize: 12, color: '#bbb' }}>{order.time}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Top Products */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 320, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 22, margin: 0, marginBottom: 12 }}>Top Products</h2>
          <div>
            {topProducts.map(product => (
              <div key={product.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ fontWeight: 600, color: product.color }}>{product.name}</div>
                <div style={{ fontSize: 13, color: '#8ca1a6' }}>{product.sales} sales</div>
              </div>
            ))}
          </div>
        </div>
        {/* Marketing/Social Stats */}
        <div style={{ flex: 1, minWidth: 220, maxWidth: 220, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(46,196,182,0.10)', padding: '24px 20px', margin: '0 0 16px 0', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontWeight: 700, color: '#1a3c34', fontSize: 22, margin: 0, marginBottom: 12 }}>Marketing Stats</h2>
          <div>
            {marketingStats.map(stat => (
              <div key={stat.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ fontWeight: 600, color: stat.color }}>{stat.name}</div>
                <div style={{ fontSize: 13, color: '#8ca1a6' }}>{stat.label}: {stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Section6 (Map and Bar Chart)
function Section6() {
  const periods = ['Last month', 'Last 3 months', 'Last year'];
  const periodData = {
    'Last month': [
      { country: 'Germany', clients: 12 },
      { country: 'SA', clients: 13 },
      { country: 'Brazil', clients: 27 },
      { country: 'UK', clients: 10 },
      { country: 'USA', clients: 38 },
      { country: 'Australia', clients: 7 },
      { country: 'India', clients: 41 },
    ],
    'Last 3 months': [
      { country: 'Germany', clients: 18 },
      { country: 'SA', clients: 21 },
      { country: 'Brazil', clients: 35 },
      { country: 'UK', clients: 17 },
      { country: 'USA', clients: 52 },
      { country: 'Australia', clients: 12 },
      { country: 'India', clients: 60 },
    ],
    'Last year': [
      { country: 'Germany', clients: 42 },
      { country: 'SA', clients: 39 },
      { country: 'Brazil', clients: 67 },
      { country: 'UK', clients: 32 },
      { country: 'USA', clients: 98 },
      { country: 'Australia', clients: 25 },
      { country: 'India', clients: 120 },
    ],
  };
  const [period, setPeriod] = useState(periods[0]);
  const barData = periodData[period].map(b => ({ country: b.country, clients: b.clients, label: `${b.clients}` }));
  const BAR_COLOR = '#FF4D00';
  return (
  <section style={{ marginBottom: 32 }}>
      <style>{`
        @media (max-width: 900px) {
          .section6-flex {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .section6-map, .section6-chart {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            height: 200px !important;
          }
        }
        @media (max-width: 600px) {
          .section6-flex {
            flex-direction: column !important;
            gap: 18px !important;
          }
          .section6-map, .section6-chart {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            height: 140px !important;
          }
        }
      `}</style>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        padding: '20px 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <div>
            <h2 style={{
              fontWeight: 700,
              color: '#1a3c34',
              fontSize: 18,
              margin: 0
            }}>Most Projects</h2>
            <p style={{
              color: '#7b8a8b',
              fontSize: 14,
              marginTop: 2
            }}>Our project distribution based on location</p>
          </div>
          <select
            value={period}
            onChange={e => setPeriod(e.target.value)}
            style={{
              padding: '6px 12px',
              borderRadius: 8,
              border: '1px solid #e0e0e0',
              fontWeight: 600,
              fontSize: 14,
              background: '#f6f8fa',
              color: '#1a3c34'
            }}
          >
            {periods.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="section6-flex" style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 100,
          alignItems: 'stretch'
        }}>
          {/* Map always visible */}
          <div className="section6-map" style={{
            flex: 1,
            minWidth: 0,
            maxWidth: 'none',
            height: 260,
            borderRadius: 12,
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 0,
          }}>
            <img
              src={mapImg}
              alt="World Map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 12
              }}
            />
          </div>
          {/* Bar chart always visible, horizontally scrollable on mobile */}
          <div className="section6-chart" style={{
            flex: 1,
            minWidth: 0,
            maxWidth: 600,
            height: 260,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            paddingTop: 4,
            overflowX: 'hidden',
            width: '100%'
          }}>
            <div style={{ minWidth: 0, minHeight: 220, height: 220 }}>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData} margin={{ top: 10, left: 20, right: 20, bottom: 10 }} barCategoryGap="60%" style={{ background: 'transparent' }}>
                  <XAxis dataKey="country" tick={{ fontSize: 14, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 14, fill: '#1a3c34' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    content={({ active, payload }) =>
                      active && payload && payload.length ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 4,
                          background: '#fff',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                          borderRadius: 12,
                          border: 'none',
                          padding: '10px 18px',
                          fontWeight: 700
                        }}>
                          {payload.map((entry, i) => (
                            <span key={i} style={{ color: entry.color || '#1a3c34', fontWeight: 700, fontSize: 18 }}>{entry.value}</span>
                          ))}
                        </div>
                      ) : null
                    }
                  />
                  <Bar dataKey="clients" barSize={28} radius={[6, 6, 0, 0]} fill={BAR_COLOR} activeBar={null} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Dashboard Page
export default function FullDashboard() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', fontFamily: 'Inter, Arial, sans-serif', overflowX: 'hidden', background: '#fff' }}>
      <Header />
      <div className="dashboard-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 16px' }}>
        <style>{`
          @media (max-width: 768px) {
            .dashboard-container {
              padding: 0 12px !important;
            }
            .kpi-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
              gap: 16px !important;
            }
            .section-container {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .chart-container {
              min-height: 200px !important;
            }
            .button-group {
              flex-wrap: wrap !important;
              gap: 8px !important;
            }
            .button-group button {
              font-size: 14px !important;
              padding: 6px 16px !important;
            }
            .section5-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            .section5-col {
              min-width: 0 !important;
              width: 100% !important;
            }
            .section6-flex {
              flex-direction: column !important;
              gap: 20px !important;
            }
            .section6-map, .section6-chart {
              min-width: 0 !important;
              width: 100% !important;
              height: 200px !important;
            }
            /* Increase header icon contrast on small screens */
            header svg, header .text-gray-600, header .text-white {
              color: #222 !important;
              fill: #222 !important;
            }
          }
          @media (max-width: 480px) {
            .dashboard-container {
              padding: 0 8px !important;
            }
            .kpi-grid {
              grid-template-columns: 1fr !important;
              gap: 12px !important;
            }
            .chart-container {
              min-height: 180px !important;
            }
            .button-group button {
              font-size: 12px !important;
              padding: 4px 12px !important;
            }
            /* Increase header icon contrast on very small screens */
            header svg, header .text-gray-600, header .text-white {
              color: #222 !important;
              fill: #222 !important;
            }
          }
        `}</style>
        <div className="dashboard-section"><Section1 /></div>
        <div className="dashboard-section"><Section2 /></div>
        <div className="dashboard-section"><Section3 /></div>
        <div className="dashboard-section"><Section6 /></div>
      </div>
      <Footer />
    </div>
  );
}