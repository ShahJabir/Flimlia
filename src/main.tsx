import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import {
  Movies,
  ErrorPage,
  MovieInformation,
  Actors,
  Profile,
} from './components/index.ts';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Movies />,
      },
      {
        path: 'movie/:id',
        element: <MovieInformation />,
      },
      {
        path: 'actors/:id',
        element: <Actors />,
      },
      {
        path: 'profile/:id',
        element: <Profile />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// jsx route
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />}>
//           <Route path="" element={<Movies />} />
//           <Route path="movie/:id" element={<MovieInformation />} />
//           <Route path="actors/:id" element={<Actors />} />
//           <Route path="profile/:id" element={<Profile />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       )
// );
