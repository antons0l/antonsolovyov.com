import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Anton Solovyov - Senior Full-Stack Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: 20,
            }}
          >
            Anton Solovyov
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#e5e7eb',
              margin: 0,
              marginBottom: 10,
            }}
          >
            Senior Full-Stack Software Engineer
          </p>
          <p
            style={{
              fontSize: 28,
              color: '#9ca3af',
              margin: 0,
            }}
          >
            React • TypeScript • Node.js • Go • Web3
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
