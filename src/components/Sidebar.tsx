import React from 'react';

interface SidebarProps {
  onProviderChange: (providers: any[]) => void;
}

const providers = [
  { name: 'ChatGPT', icon: '🤖' },
  { name: 'GitHub Copilot', icon: '🧑‍💻' },
  { name: 'Gemini', icon: '🔮' },
  { name: 'DeepSeek', icon: '🦙' },
];

const Sidebar: React.FC<SidebarProps> = ({ onProviderChange }) => {
  return (
    <div className="sidebar">
      <h2 style={{ marginBottom: '24px', fontWeight: 700 }}>Chats</h2>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '8px' }}>Recent</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '8px 0', color: '#555' }}>Welcome to LLMRoundTable</li>
        </ul>
      </div>
      <div>
        <div style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '8px' }}>Providers</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {providers.map((p) => (
            <li key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0' }}>
              <span className="avatar" style={{ width: 28, height: 28, fontSize: '1.1rem' }}>{p.icon}</span>
              <span>{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;