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
          background: '#faf8f5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
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
              fontStyle: 'italic',
              fontFamily: 'Georgia, Times New Roman, serif',
              color: '#1a1714',
              margin: 0,
              marginBottom: 20,
            }}
          >
            Anton Solovyov
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#b85a30',
              margin: 0,
              marginBottom: 10,
            }}
          >
            Senior Full-Stack Software Engineer
          </p>
          <p
            style={{
              fontSize: 28,
              color: '#6b6560',
              margin: 0,
            }}
          >
            React • TypeScript • Node.js • Go • Web3
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#b85a30',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
