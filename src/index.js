import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
<>
<Suspense fallback={null}>
  <>
  </>
</Suspense>
<Loader />
</>
);