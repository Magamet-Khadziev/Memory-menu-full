# Project Rules

This is a JavaScript/TypeScript project.

## Project Structure

<!-- TODO: Describe your project structure here -->
<!-- Example:
- `src/` - Application source code
- `tests/` - Test files
- `docs/` - Documentation
-->

## Code Standards

- Use TypeScript with strict mode where possible
- Prefer ESM imports over CommonJS require
- Use async/await over raw Promises

## Commands

- **Build:** `npm run build`
- **Test:** `npm test`
- **Lint:** `npm run lint`

## Custom Agents

The following custom subagents are available (invoke with `@agent-name`):

- **@backend-developer**: Server-side logic, APIs, and data processing
- **@frontend-developer**: UI implementation, components, and browser APIs
- **@fullstack-developer**: End-to-end feature development across the stack
- **@websocket-engineer**: Real-time communication and WebSocket protocol design
- **@typescript-pro**: TypeScript type system, generics, and advanced patterns
- **@javascript-pro**: Modern JavaScript, ES modules, and runtime optimization
- **@react-specialist**: React hooks, state management, and component design
- **@vue-expert**: Vue 3 composition API, reactivity, and ecosystem
- **@angular-architect**: Angular modules, RxJS, and enterprise-scale SPAs
- **@nextjs-developer**: Next.js App Router, SSR, RSC, and deployment
- **@devops-engineer**: CI/CD pipelines, infrastructure, and deployment
- **@code-reviewer**: Code review with security and performance focus
- **@build-engineer**: Build system configuration, caching, and optimization
- **@dependency-manager**: Dependency updates, audit, and compatibility checks
- **@git-workflow-manager**: Git workflow, branching strategy, and commit hygiene
- **@test-writer**: Test generation following project patterns
- **@api-designer**: REST/GraphQL API design and contract definition
- **@graphql-architect**: GraphQL schema design, resolvers, and federation
- **@microservices-architect**: Microservices design, boundaries, and communication
- **@mobile-developer**: Native and cross-platform mobile app development
- **@python-pro**: Pythonic patterns, async, and ecosystem best practices
- **@java-architect**: Java architecture, JVM tuning, and enterprise patterns
- **@kotlin-specialist**: Kotlin idioms, coroutines, and multiplatform development
- **@golang-pro**: Go concurrency, interfaces, and systems programming
- **@rust-engineer**: Rust ownership, lifetimes, and zero-cost abstractions
- **@swift-expert**: Swift protocols, concurrency, and Apple platform APIs
- **@cpp-pro**: Modern C++ patterns, templates, and memory management
- **@csharp-developer**: C# and .NET ecosystem, LINQ, and async patterns
- **@php-pro**: Modern PHP, Composer, and framework best practices
- **@ruby-pro**: Ruby idioms, metaprogramming, and gem ecosystem
- **@django-developer**: Django ORM, views, middleware, and admin patterns
- **@fastapi-developer**: FastAPI async endpoints, Pydantic, and OpenAPI
- **@spring-boot-engineer**: Spring Boot auto-config, DI, and reactive stack
- **@laravel-specialist**: Laravel Eloquent, Blade, queues, and artisan
- **@flutter-expert**: Flutter widgets, state management, and platform channels
- **@elixir-expert**: Elixir OTP, GenServer, and Phoenix LiveView
- **@azure-infra-engineer**: Azure services, ARM/Bicep templates, and cloud networking
- **@cloud-architect**: Multi-cloud architecture, cost optimization, and resilience
- **@database-administrator**: Database provisioning, replication, and backup strategy
- **@deployment-engineer**: Deployment strategies, blue-green, canary, and rollbacks
- **@docker-expert**: Docker optimization, multi-stage builds, and security
- **@incident-responder**: Incident triage, mitigation, and post-mortem coordination
- **@kubernetes-specialist**: Kubernetes orchestration, Helm charts, and cluster ops
- **@network-engineer**: Network topology, DNS, load balancing, and firewalls
- **@platform-engineer**: Internal developer platforms and self-service tooling
- **@security-engineer**: Infrastructure security, IAM policies, and secrets management
- **@sre-engineer**: Site reliability, monitoring, and incident response
- **@terraform-engineer**: Terraform modules, state management, and IaC workflows
- **@accessibility-tester**: WCAG compliance and accessibility audit
- **@architect-reviewer**: Architecture review and design pattern evaluation
- **@chaos-engineer**: Failure mode analysis and resilience testing
- **@compliance-auditor**: Regulatory compliance checks (GDPR, SOC2, HIPAA)
- **@debugger**: Bug investigation and root cause analysis
- **@error-detective**: Error pattern analysis and root cause detection
- **@penetration-tester**: Offensive security testing and vulnerability exploitation
- **@performance-engineer**: Performance profiling and optimization guidance
- **@security-auditor**: Security vulnerability scanning and threat modeling
- **@test-automator**: End-to-end test automation and CI test pipelines
- **@ai-engineer**: AI system design, model integration, and inference pipelines
- **@data-analyst**: Data exploration, visualization, and statistical analysis
- **@data-engineer**: Data pipelines, ETL workflows, and warehouse design
- **@data-scientist**: Statistical modeling, experiments, and feature engineering
- **@database-optimizer**: Query optimization, indexing, and schema design
- **@llm-architect**: LLM application architecture, RAG, and fine-tuning
- **@machine-learning-engineer**: ML model training, evaluation, and deployment
- **@mlops-engineer**: ML pipeline orchestration, model registry, and monitoring
- **@nlp-engineer**: Natural language processing, tokenization, and text analysis
- **@postgres-pro**: PostgreSQL tuning, extensions, and advanced SQL
- **@prompt-engineer**: Prompt design, chain-of-thought, and LLM optimization
- **@sql-pro**: Advanced SQL queries, window functions, and optimization
- **@cli-developer**: CLI tool design, argument parsing, and UX patterns
- **@docs-writer**: Technical documentation and API reference writing
- **@dx-optimizer**: Developer experience improvement and workflow friction reduction
- **@legacy-modernizer**: Legacy code modernization and migration planning
- **@mcp-developer**: MCP server development and tool integration
- **@refactorer**: Code refactoring with test verification
- **@tooling-engineer**: Developer tooling, linters, formatters, and IDE config
- **@blockchain-developer**: Smart contracts, DeFi protocols, and chain integration
- **@embedded-systems**: Firmware, RTOS, and hardware interface programming
- **@fintech-engineer**: Financial systems, ledgers, and regulatory compliance
- **@game-developer**: Game engine integration, physics, and rendering pipelines
- **@iot-engineer**: IoT protocols, edge computing, and device management
- **@mobile-app-developer**: Mobile UI/UX, app lifecycle, and platform guidelines
- **@payment-integration**: Payment gateway integration, PCI compliance, and billing
- **@seo-specialist**: Technical SEO, structured data, and web performance
- **@business-analyst**: Requirements gathering, process modeling, and stakeholder analysis
- **@content-marketer**: Content strategy, copywriting, and brand messaging
- **@legal-advisor**: Software licensing, ToS review, and IP guidance
- **@product-manager**: Product roadmap, prioritization, and feature scoping
- **@project-manager**: Project planning, timelines, and resource coordination
- **@sales-engineer**: Technical demos, proof-of-concept, and solution design
- **@scrum-master**: Agile ceremonies, sprint planning, and team facilitation
- **@technical-writer**: User guides, tutorials, and knowledge base articles
- **@ux-researcher**: User research, usability testing, and persona development
- **@agent-organizer**: Agent selection, routing, and capability mapping
- **@context-manager**: Project context loading and memory management
- **@error-coordinator**: Cross-agent error handling and recovery strategies
- **@knowledge-synthesizer**: Multi-source knowledge aggregation and summarization
- **@multi-agent-coordinator**: Parallel agent execution and result merging
- **@task-distributor**: Task decomposition and delegation across agents
- **@workflow-orchestrator**: Multi-agent task orchestration and workflow coordination
- **@competitive-analyst**: Competitive landscape analysis and feature benchmarking
- **@data-researcher**: Data source discovery, collection, and quality assessment
- **@market-researcher**: Market sizing, trends analysis, and opportunity mapping
- **@research-analyst**: Technical research synthesis and recommendation reports
- **@scientific-literature-researcher**: Academic paper search, citation analysis, and review
- **@search-specialist**: Search engine optimization and information retrieval
- **@trend-analyst**: Technology trend tracking and adoption forecasting

## Conventions

- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
- Write meaningful commit messages that explain the "why"
- Keep PRs focused on a single concern
