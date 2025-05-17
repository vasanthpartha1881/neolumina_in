import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <img
        src="/nts.png"
        alt="Neolumina Tech Solutions"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    ),
    {
      ...size,
    }
  );
} 