import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import CreateCampaign from "./pages/CreateCampaign";
import Templates from "./pages/Templates";
import Analytics from "./pages/Analytics";
import UsersPage from "./pages/Users";
import UserProfiles from "./pages/UserProfiles";
import History from "./pages/History";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import LandingPages from "./pages/LandingPages";
import SMSGateway from "./pages/SMSGateway";
import BackupService from "./pages/BackupService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/campaigns" element={<Layout><Campaigns /></Layout>} />
          <Route path="/create-campaign" element={<Layout><CreateCampaign /></Layout>} />
          <Route path="/templates" element={<Layout><Templates /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/users" element={<Layout><UsersPage /></Layout>} />
          <Route path="/user-profiles" element={<Layout><UserProfiles /></Layout>} />
          <Route path="/history" element={<Layout><History /></Layout>} />
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/landing-pages" element={<Layout><LandingPages /></Layout>} />
          <Route path="/sms-gateway" element={<Layout><SMSGateway /></Layout>} />
          <Route path="/backup-service" element={<Layout><BackupService /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
