import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import PublicLayout from '@/layouts/PublicLayout';
import RutaProtegida from './RutaProtegida';

// Importación dinámica de páginas
const PaginaDashboard = lazy(() => import('@/pages/dashboard/PaginaDashboard'));
const PaginaLogin = lazy(() => import('@/pages/auth/PaginaLogin'));
const PaginaRegistro = lazy(() => import('@/pages/auth/PaginaRegistro'));
const PaginaPrincipal = lazy(() => import('@/pages/public/PaginaPrincipal'));
const PaginaAcercaDe = lazy(() => import('@/pages/public/PaginaAcercaDe'));
const PaginaTransferencia = lazy(() => import('@/pages/transfers/PaginaTransferencia'));
const PaginaSimulacionCredito = lazy(() => import('@/pages/credits/PaginaSimulacionCredito'));
const PaginaCuentas = lazy(() => import('@/pages/cuentas/PaginaCuentas'));

// 1. ELIMINADA LA IMPORTACIÓN DE 'PaginaPagoServicios'

// Componente Loader
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Cargando...</p>
  </div>
);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Rutas Públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/registro" element={<PaginaRegistro />} />
          <Route path="/acerca-de" element={<PaginaAcercaDe />} />
          <Route path="/simular-credito" element={<PaginaSimulacionCredito />} />
        </Route>

        {/* Rutas Privadas */}
        <Route 
          path="/app" 
          element={<RutaProtegida><AppLayout /></RutaProtegida>}
        >
          <Route path="dashboard" element={<PaginaDashboard />} />
          <Route path="transferir" element={<PaginaTransferencia />} />
          
          {/* 2. ELIMINADA LA RUTA 'pagar-servicios' */}
          
          <Route path="acerca-de" element={<PaginaAcercaDe />} />
          <Route path="ayuda" element={<PaginaAcercaDe />} /> 
          <Route path="cuentas" element={<PaginaCuentas />} />
        </Route>
        
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;