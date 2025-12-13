import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DCSLayout } from './components/DCSLayout';
import { Starfield } from './components/Starfield';
import { Portfolio } from './pages/Portfolio';

import { DBDPLayout } from './components/DBDPLayout';
import { WSLayout } from './components/WSLayout';

// ADK Pages
import { Home } from './pages/Home';
import { SystemOverview } from './pages/SystemOverview';
import { EventSources } from './pages/EventSources';
import { IngestionLayer } from './pages/IngestionLayer';
import { QueueStreaming } from './pages/QueueStreaming';
import { WorkerArchitecture } from './pages/WorkerArchitecture';
import { DataLake } from './pages/DataLake';
import { AnalyticsEngine } from './pages/AnalyticsEngine';
import { KnowledgeGraph } from './pages/KnowledgeGraph';
import { DataModels } from './pages/DataModels';
import { ProcessingSemantics } from './pages/ProcessingSemantics';
import { FailureHandling } from './pages/FailureHandling';
import { Scalability } from './pages/Scalability';
import { Security } from './pages/Security';
import { DesignDecisions } from './pages/DesignDecisions';
import { FutureExtensions } from './pages/FutureExtensions';

// DCS Pages
import { HomeDCS } from './pages/dcs/HomeDCS';
import { SystemOverviewDCS } from './pages/dcs/SystemOverviewDCS';
import { SubmissionFlow } from './pages/dcs/SubmissionFlow';
import { UploadService } from './pages/dcs/UploadService';
import { ObjectStorage } from './pages/dcs/ObjectStorage';
import { QueueingArchitecture } from './pages/dcs/QueueingArchitecture';
import { CompileServices } from './pages/dcs/CompileServices';
import { PythonPipeline } from './pages/dcs/PythonPipeline';
import { CPipeline } from './pages/dcs/CPipeline';
import { ExecutionTesting } from './pages/dcs/ExecutionTesting';
import { ResultStorage } from './pages/dcs/ResultStorage';
import { StatusTracking } from './pages/dcs/StatusTracking';
import { Consistency } from './pages/dcs/Consistency';
import { FailureHandling as FailureHandlingDCS } from './pages/dcs/FailureHandling';
import { ScalabilityDCS } from './pages/dcs/ScalabilityDCS';
import { SecurityDCS } from './pages/dcs/SecurityDCS';
import { DesignDecisionsDCS } from './pages/dcs/DesignDecisionsDCS';

// DBDP Pages
import { HomeDBDP } from './pages/dbdp/HomeDBDP';
import { SystemOverviewDBDP } from './pages/dbdp/SystemOverviewDBDP';
import { ArchitectureDBDP } from './pages/dbdp/ArchitectureDBDP';
import { UploadServiceDBDP } from './pages/dbdp/UploadServiceDBDP';
import { CloningPipeline } from './pages/dbdp/CloningPipeline';
import { BuildQueue } from './pages/dbdp/BuildQueue';
import { WorkerArchitectureDBDP } from './pages/dbdp/WorkerArchitectureDBDP';
import { ContainerBuild } from './pages/dbdp/ContainerBuild';
import { ArtifactStorage } from './pages/dbdp/ArtifactStorage';
import { DeploymentPipeline } from './pages/dbdp/DeploymentPipeline';
import { StatusTrackingDBDP } from './pages/dbdp/StatusTrackingDBDP';
import { ReverseProxy } from './pages/dbdp/ReverseProxy';
import { RequestServing } from './pages/dbdp/RequestServing';
import { ConsistencyDBDP } from './pages/dbdp/ConsistencyDBDP';
import { FailureHandlingDBDP } from './pages/dbdp/FailureHandlingDBDP';
import { ScalabilityDBDP } from './pages/dbdp/ScalabilityDBDP';
import { DesignDecisionsDBDP } from './pages/dbdp/DesignDecisionsDBDP';

// WS Pages
import { HomeWS } from './pages/ws/HomeWS';
import { ArchitectureWS } from './pages/ws/ArchitectureWS';
import { ScalingWS } from './pages/ws/ScalingWS';

// Contact Pipeline
import { ContactPipeline } from './pages/ContactPipeline';

function App() {
  return (
    <BrowserRouter>
      <Starfield />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact-pipeline" element={<ContactPipeline />} />
        
        {/* ADK Documentation Routes */}
        <Route path="adk" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="system-overview" element={<SystemOverview />} />
          <Route path="event-sources" element={<EventSources />} />
          <Route path="ingestion" element={<IngestionLayer />} />
          <Route path="queue-streaming" element={<QueueStreaming />} />
          <Route path="workers" element={<WorkerArchitecture />} />
          <Route path="data-lake" element={<DataLake />} />
          <Route path="analytics" element={<AnalyticsEngine />} />
          <Route path="knowledge-graph" element={<KnowledgeGraph />} />
          <Route path="data-models" element={<DataModels />} />
          <Route path="semantics" element={<ProcessingSemantics />} />
          <Route path="failure-handling" element={<FailureHandling />} />
          <Route path="scalability" element={<Scalability />} />
          <Route path="security" element={<Security />} />
          <Route path="design-decisions" element={<DesignDecisions />} />
          <Route path="future" element={<FutureExtensions />} />
        </Route>

        {/* DCS Documentation Routes */}
        <Route path="dcs" element={<DCSLayout />}>
          <Route index element={<HomeDCS />} />
          <Route path="system-overview" element={<SystemOverviewDCS />} />
          <Route path="submission-flow" element={<SubmissionFlow />} />
          <Route path="upload-service" element={<UploadService />} />
          <Route path="object-storage" element={<ObjectStorage />} />
          <Route path="queues" element={<QueueingArchitecture />} />
          <Route path="compile-services" element={<CompileServices />} />
          <Route path="python-pipeline" element={<PythonPipeline />} />
          <Route path="c-pipeline" element={<CPipeline />} />
          <Route path="execution" element={<ExecutionTesting />} />
          <Route path="results" element={<ResultStorage />} />
          <Route path="status-tracking" element={<StatusTracking />} />
          <Route path="consistency" element={<Consistency />} />
          <Route path="failure-handling" element={<FailureHandlingDCS />} />
          <Route path="scalability" element={<ScalabilityDCS />} />
          <Route path="security" element={<SecurityDCS />} />
          <Route path="design-decisions" element={<DesignDecisionsDCS />} />
        </Route>

        {/* DBDP Documentation Routes */}
        <Route path="dbdp" element={<DBDPLayout />}>
          <Route index element={<HomeDBDP />} />
          <Route path="system-overview" element={<SystemOverviewDBDP />} />
          <Route path="architecture" element={<ArchitectureDBDP />} />
          <Route path="upload-service" element={<UploadServiceDBDP />} />
          <Route path="cloning-pipeline" element={<CloningPipeline />} />
          <Route path="queues" element={<BuildQueue />} />
          <Route path="workers" element={<WorkerArchitectureDBDP />} />
          <Route path="containers" element={<ContainerBuild />} />
          <Route path="storage" element={<ArtifactStorage />} />
          <Route path="pipeline" element={<DeploymentPipeline />} />
          <Route path="status" element={<StatusTrackingDBDP />} />
          <Route path="proxy" element={<ReverseProxy />} />
          <Route path="serving" element={<RequestServing />} />
          <Route path="consistency" element={<ConsistencyDBDP />} />
          <Route path="failure-handling" element={<FailureHandlingDBDP />} />
          <Route path="scalability" element={<ScalabilityDBDP />} />
          <Route path="design-decisions" element={<DesignDecisionsDBDP />} />
        </Route>

        {/* WS Documentation Routes */}
        <Route path="ws" element={<WSLayout />}>
          <Route index element={<HomeWS />} />
          <Route path="architecture" element={<ArchitectureWS />} />
          <Route path="scaling" element={<ScalingWS />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
